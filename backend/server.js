const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { Pool } = require('pg');
const sanitizeHtml = require('sanitize-html');
const http = require('http');
const WebSocket = require('ws');
require('dotenv').config();

const app = express();
const server = http.createServer(app);

// CRITICAL: WebSocket server for real-time updates
const wss = new WebSocket.Server({ server });

// WebSocket connection management
const clients = new Set();

wss.on('connection', (ws) => {
  clients.add(ws);
  
  ws.on('close', () => {
    clients.delete(ws);
  });
  
  ws.on('error', (error) => {
    clients.delete(ws);
  });
});

// Broadcast message to all connected clients
function broadcastToClients(message) {
  const messageStr = JSON.stringify(message);
  
  clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      try {
        client.send(messageStr);
      } catch (error) {
        clients.delete(client);
      }
    } else {
      clients.delete(client);
    }
  });
}

const PORT = process.env.PORT || 3001;

// Database connection with optimized settings
const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'radius_db',
  user: process.env.DB_USER || 'radius_user',
  password: process.env.DB_PASSWORD || 'radius_password',
  // CRITICAL: Connection pool settings for performance
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// Test database connection
pool.connect((err, client, release) => {
  if (err) {
    console.error('❌ Database connection failed:', err);
    process.exit(1);
  } else {
    console.log('✅ Database connected successfully');
    release();
  }
});

// Sanitization function for user input
function sanitizeInput(text) {
  if (!text || typeof text !== 'string') return text;
  return sanitizeHtml(text, {
    allowedTags: [], // No HTML tags allowed
    allowedAttributes: {}
  });
}

// Validation functions
function validateTaskFields(data) {
  const errors = [];
  
  // Required fields
  if (!data.title || data.title.trim() === '') {
    errors.push('Title is required');
  } else if (data.title.length > 100) {
    errors.push('Title must be 100 characters or less');
  }
  
  if (!data.description || data.description.trim() === '') {
    errors.push('Description is required');
  } else if (data.description.length > 500) {
    errors.push('Description must be 500 characters or less');
  }
  
  // Category validation
  const validCategories = ['help_needed', 'offering_help', 'borrow', 'lend', 'general'];
  if (!data.category || !validCategories.includes(data.category)) {
    errors.push('Category must be one of: help_needed, offering_help, borrow, lend, general');
  }
  
  // Exchange validation
  const validExchanges = ['free', 'paid', 'trade'];
  if (!data.exchange || !validExchanges.includes(data.exchange)) {
    errors.push('Exchange must be one of: free, paid, trade');
  }
  
  // Urgency validation
  const validUrgencies = ['low', 'medium', 'high'];
  if (!data.urgency || !validUrgencies.includes(data.urgency)) {
    errors.push('Urgency must be one of: low, medium, high');
  }
  
  // Amount validation for paid exchanges
  if (data.exchange === 'paid' && data.amount) {
    const amount = parseFloat(data.amount);
    if (isNaN(amount) || amount < 0) {
      errors.push('Amount must be a positive number');
    }
  }
  
  return errors;
}

// Middleware
app.use(helmet());
app.use(cors({
  origin: ['http://localhost:8080', 'http://localhost:8081', 'http://localhost:3000'],
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));

// Rate limiting DISABLED for development - CRITICAL FIX
// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 5000, // much higher limit for development
//   message: 'Too many requests from this IP, please try again later.'
// });
// app.use('/api/', limiter);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    database: 'connected'
  });
});

// USER LOCATION ENDPOINTS

// Get user location
app.get('/api/user-location/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    
    const result = await pool.query(
      'SELECT * FROM user_locations WHERE user_id = $1',
      [userId]
    );
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User location not found' });
    }
    
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user location' });
  }
});

// Update or create user location
app.post('/api/user-location', async (req, res) => {
  try {
    const {
      user_id,
      latitude,
      longitude,
      address,
      city,
      zipcode,
      country
    } = req.body;

    if (!user_id) {
      return res.status(400).json({ error: 'User ID is required' });
    }

    const result = await pool.query(`
      INSERT INTO user_locations (user_id, latitude, longitude, address, city, zipcode, country)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      ON CONFLICT (user_id) 
      DO UPDATE SET 
        latitude = EXCLUDED.latitude,
        longitude = EXCLUDED.longitude,
        address = EXCLUDED.address,
        city = EXCLUDED.city,
        zipcode = EXCLUDED.zipcode,
        country = EXCLUDED.country,
        updated_at = NOW()
      RETURNING *
    `, [user_id, latitude, longitude, address, city, zipcode, country]);

    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user location' });
  }
});

// TASKS ENDPOINTS

// Get all tasks with optional filtering - BULLETPROOF LOCATION HANDLING
app.get('/api/tasks', async (req, res) => {
  try {
    const { category, status, user_id, lat, lng, radius } = req.query;
    let query = 'SELECT id, title, description, category, exchange, amount, duration, urgency, latitude, longitude, address, created_at, updated_at, created_by_user_id, created_by_name, created_by_email, created_by_verified, status, respondents FROM tasks WHERE 1=1';
    const params = [];
    let paramCount = 0;

    // Always filter to show only active tasks to neighbors (unless it's user's own tasks)
    if (!user_id) {
      paramCount++;
      query += ` AND status = $${paramCount}`;
      params.push('active');
    }

    if (category && category !== 'all') {
      paramCount++;
      query += ` AND category = $${paramCount}`;
      params.push(category);
    }

    if (status && user_id) { // Only allow status filtering for own tasks
      paramCount++;
      query += ` AND status = $${paramCount}`;
      params.push(status);
    }

    if (user_id) {
      paramCount++;
      query += ` AND created_by_user_id = $${paramCount}`;
      params.push(user_id);
    }

    // CRITICAL FIX: Handle missing location gracefully
    // If no location provided for neighbor view, return empty array instead of error
    if (!user_id && (!lat || !lng)) {
      // For neighbor view without location, return empty array
      // This prevents the "Network error" and guides user to set location
      return res.json([]);
    }

    // Location-based filtering (neighbors only - within radius)
    if (lat && lng && !user_id) { // Only apply radius filter for neighbor view
      const radiusMiles = radius || 1; // Default 1 mile radius
      paramCount += 3;
      query += ` AND (
        latitude IS NOT NULL AND longitude IS NOT NULL AND
        6371 * acos(
          cos(radians($${paramCount-2})) * 
          cos(radians(latitude)) * 
          cos(radians(longitude) - radians($${paramCount-1})) + 
          sin(radians($${paramCount-2})) * 
          sin(radians(latitude))
        ) <= $${paramCount}
      )`;
      params.push(parseFloat(lat), parseFloat(lng), parseFloat(radiusMiles) * 1.60934); // Convert miles to km
    }

    query += ' ORDER BY created_at DESC';

    const result = await pool.query(query, params);
    
    // Remove sensitive data from response (phone, address, exact coordinates)
    const tasksWithoutSensitiveData = result.rows.map(task => {
      const { created_by_phone, address, latitude, longitude, ...taskWithoutSensitiveData } = task;
      return {
        ...taskWithoutSensitiveData,
        // Only include general location info, not exact coordinates or addresses
        has_location: !!(latitude && longitude)
      };
    });

    res.json(tasksWithoutSensitiveData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
});

// Get single task by ID
app.get('/api/tasks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT id, title, description, category, exchange, amount, duration, urgency, latitude, longitude, address, created_at, updated_at, created_by_user_id, created_by_name, created_by_email, created_by_verified, status, respondents FROM tasks WHERE id = $1', [id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Task not found' });
    }
    
    // Remove sensitive data and add location indicator
    const task = result.rows[0];
    const { created_by_phone, address, latitude, longitude, ...taskWithoutSensitiveData } = task;
    const taskResponse = {
      ...taskWithoutSensitiveData,
      has_location: !!(latitude && longitude)
    };
    
    res.json(taskResponse);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch task' });
  }
});

// BULLETPROOF task creation with transactional integrity
app.post('/api/tasks', async (req, res) => {
  const client = await pool.connect();
  
  try {
    // Start transaction for absolute consistency
    await client.query('BEGIN');
    
    const {
      title,
      description,
      category,
      exchange,
      amount,
      duration,
      urgency,
      latitude,
      longitude,
      address,
      created_by_user_id,
      created_by_name,
      created_by_email,
      created_by_verified,
      created_by_phone
    } = req.body;

    // Validate required fields
    const validationErrors = validateTaskFields(req.body);
    if (validationErrors.length > 0) {
      await client.query('ROLLBACK');
      return res.status(400).json({ error: validationErrors.join('; ') });
    }

    // Validate required phone number
    if (!created_by_phone || created_by_phone.trim() === '') {
      await client.query('ROLLBACK');
      return res.status(400).json({ error: 'Phone number is required' });
    }

    // Sanitize text inputs
    const sanitizedTitle = sanitizeInput(title);
    const sanitizedDescription = sanitizeInput(description);
    const sanitizedDuration = sanitizeInput(duration);
    const sanitizedAddress = sanitizeInput(address);
    const sanitizedName = sanitizeInput(created_by_name);

    // CRITICAL: Insert with transactional integrity
    const result = await client.query(`
      INSERT INTO tasks (
        title, description, category, exchange, amount, duration, urgency,
        latitude, longitude, address, created_by_user_id, created_by_name,
        created_by_email, created_by_verified, created_by_phone, status, respondents
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, 'active', '{}'
      ) RETURNING *
    `, [
      sanitizedTitle, sanitizedDescription, category, exchange, amount, sanitizedDuration, urgency,
      latitude, longitude, sanitizedAddress, created_by_user_id, sanitizedName,
      created_by_email, created_by_verified || false, created_by_phone
    ]);

    // COMMIT transaction before sending response
    await client.query('COMMIT');
    
    const createdTask = result.rows[0];

    // Prepare task for response (remove sensitive data)
    const { created_by_phone: _, ...taskForResponse } = createdTask;

    // CRITICAL: Broadcast NEW_TASK event to all WebSocket clients
    broadcastToClients({
      type: 'NEW_TASK',
      task: taskForResponse
    });

    // ONLY send 201 response after database commit AND WebSocket broadcast
    res.status(201).json(taskForResponse);
    
  } catch (error) {
    // Rollback transaction on any error
    await client.query('ROLLBACK');
    res.status(500).json({ error: 'Failed to create task' });
  } finally {
    client.release();
  }
});

// Update task
app.put('/api/tasks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const { user_id } = req.body; // Extract user_id from request body for authorization
    
    // First check if the task exists
    const taskCheck = await pool.query('SELECT created_by_user_id FROM tasks WHERE id = $1', [id]);
    
    if (taskCheck.rows.length === 0) {
      return res.status(404).json({ error: 'Task not found' });
    }

    // Authorization check - only for updates that require it (not for respondents array)
    if (user_id && taskCheck.rows[0].created_by_user_id !== user_id && !updates.respondents) {
      return res.status(403).json({ error: 'You can only update your own tasks' });
    }

    // Remove user_id from updates to prevent it from being updated in the database
    const { user_id: _, ...updatesWithoutUserId } = updates;
    
    // Sanitize text inputs if they exist
    if (updatesWithoutUserId.title) {
      updatesWithoutUserId.title = sanitizeInput(updatesWithoutUserId.title);
    }
    if (updatesWithoutUserId.description) {
      updatesWithoutUserId.description = sanitizeInput(updatesWithoutUserId.description);
    }
    if (updatesWithoutUserId.duration) {
      updatesWithoutUserId.duration = sanitizeInput(updatesWithoutUserId.duration);
    }
    
    // Validate status updates
    if (updatesWithoutUserId.status) {
      const validStatuses = ['active', 'in_progress', 'completed', 'cancelled'];
      if (!validStatuses.includes(updatesWithoutUserId.status)) {
        return res.status(400).json({ error: 'Invalid status. Must be one of: active, in_progress, completed, cancelled' });
      }
    }
    
    // Build dynamic update query
    const setClause = Object.keys(updatesWithoutUserId)
      .map((key, index) => `${key} = $${index + 2}`)
      .join(', ');
    
    const values = [id, ...Object.values(updatesWithoutUserId)];
    
    const result = await pool.query(`
      UPDATE tasks 
      SET ${setClause}, updated_at = NOW()
      WHERE id = $1 
      RETURNING *
    `, values);

    // Remove phone number from response for privacy
    const { created_by_phone: __, ...taskWithoutPhone } = result.rows[0];
    
    // Broadcast task update to all WebSocket clients
    broadcastToClients({
      type: 'TASK_UPDATED',
      task: taskWithoutPhone
    });
    
    res.json(taskWithoutPhone);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update task' });
  }
});

// Delete task
app.delete('/api/tasks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { user_id } = req.query; // Extract user_id from query parameters for authorization
    
    // First check if the task exists
    const taskCheck = await pool.query('SELECT created_by_user_id FROM tasks WHERE id = $1', [id]);
    
    if (taskCheck.rows.length === 0) {
      return res.status(404).json({ error: 'Task not found' });
    }

    // Authorization check - only if user_id is provided
    if (user_id && taskCheck.rows[0].created_by_user_id !== user_id) {
      return res.status(403).json({ error: 'You can only delete your own tasks' });
    }

    const result = await pool.query('DELETE FROM tasks WHERE id = $1 RETURNING *', [id]);
    
    // Broadcast task deletion to all WebSocket clients
    broadcastToClients({
      type: 'TASK_DELETED',
      taskId: id
    });
    
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
});

// Respond to a task (offer help)
app.post('/api/tasks/:id/respond', async (req, res) => {
  try {
    const { id } = req.params;
    const { user_id } = req.body;

    if (!user_id) {
      return res.status(400).json({ error: 'User ID is required' });
    }

    // Get current task
    const taskResult = await pool.query('SELECT respondents, status, created_by_user_id FROM tasks WHERE id = $1', [id]);
    
    if (taskResult.rows.length === 0) {
      return res.status(404).json({ error: 'Task not found' });
    }

    const task = taskResult.rows[0];

    // Check if task is active
    if (task.status !== 'active') {
      return res.status(400).json({ error: 'Task is not active' });
    }

    // Check if user is not the task creator
    if (task.created_by_user_id === user_id) {
      return res.status(400).json({ error: 'Cannot respond to your own task' });
    }

    // Check if user already responded
    if (task.respondents.includes(user_id)) {
      return res.status(400).json({ error: 'You have already offered help for this task' });
    }

    // Add user to respondents
    const newRespondents = [...task.respondents, user_id];
    
    const result = await pool.query(
      'UPDATE tasks SET respondents = $1 WHERE id = $2 RETURNING *',
      [newRespondents, id]
    );

    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Failed to respond to task' });
  }
});

// Get phone number for helpers who responded
app.get('/api/tasks/:id/contact', async (req, res) => {
  try {
    const { id } = req.params;
    const { user_id } = req.query;

    if (!user_id) {
      return res.status(400).json({ error: 'User ID is required' });
    }

    // First check if the task exists and user has responded
    const taskResult = await pool.query(
      'SELECT created_by_phone, address, respondents, status FROM tasks WHERE id = $1',
      [id]
    );

    if (taskResult.rows.length === 0) {
      return res.status(404).json({ error: 'Task not found' });
    }

    const task = taskResult.rows[0];

    // Check if user has responded to this task
    if (!task.respondents.includes(user_id)) {
      return res.status(403).json({ error: 'You must respond to this task to see contact information' });
    }

    // Return contact information
    res.json({
      phone: task.created_by_phone,
      address: task.address || 'Address not provided'
    });

  } catch (error) {
    res.status(500).json({ error: 'Failed to get contact information' });
  }
});

// Global error handler
app.use((err, req, res, next) => {
  res.status(500).json({ error: 'Internal server error' });
});

// Start the server
server.listen(PORT, () => {
  console.log(`🚀 EVERLOOM Backend Server running on http://localhost:${PORT}`);
  console.log(`📊 API endpoints available at http://localhost:${PORT}/api`);
  console.log(`🔌 WebSocket server running on ws://localhost:${PORT}`);
});