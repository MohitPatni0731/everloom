const { Pool } = require('pg');
require('dotenv').config();

// Database connection for creating the database
const adminPool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: 'postgres', // Connect to default postgres database
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
});

// Database connection for creating tables
const appPool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'radius_db',
  user: process.env.DB_USER || 'radius_user',
  password: process.env.DB_PASSWORD || 'radius_password',
});

async function setupDatabase() {
  try {
    console.log('🏗️  Setting up PostgreSQL database for Radius...');

    // Create database if it doesn't exist
    console.log('📊 Creating database...');
    try {
      await adminPool.query(`CREATE DATABASE ${process.env.DB_NAME || 'radius_db'}`);
      console.log('✅ Database created successfully');
    } catch (error) {
      if (error.code === '42P04') {
        console.log('ℹ️  Database already exists');
      } else {
        throw error;
      }
    }

    // Create user if it doesn't exist
    console.log('👤 Creating database user...');
    try {
      await adminPool.query(`CREATE USER ${process.env.DB_USER || 'radius_user'} WITH PASSWORD '${process.env.DB_PASSWORD || 'radius_password'}'`);
      await adminPool.query(`GRANT ALL PRIVILEGES ON DATABASE ${process.env.DB_NAME || 'radius_db'} TO ${process.env.DB_USER || 'radius_user'}`);
      console.log('✅ Database user created successfully');
    } catch (error) {
      if (error.code === '42710') {
        console.log('ℹ️  Database user already exists');
      } else {
        throw error;
      }
    }

    // Close admin connection
    await adminPool.end();

    // Create tables
    console.log('📋 Creating tables...');
    
    // Create tasks table
    await appPool.query(`
      CREATE TABLE IF NOT EXISTS tasks (
        id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        category TEXT NOT NULL CHECK (category IN ('help_needed', 'offering_help', 'borrow', 'lend', 'general')),
        exchange TEXT NOT NULL CHECK (exchange IN ('free', 'paid', 'trade')),
        amount DECIMAL(10, 2),
        duration TEXT NOT NULL,
        urgency TEXT NOT NULL CHECK (urgency IN ('low', 'medium', 'high')),
        latitude DECIMAL(10, 8),
        longitude DECIMAL(11, 8),
        address TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        created_by_user_id TEXT NOT NULL,
        created_by_name TEXT NOT NULL,
        created_by_email TEXT NOT NULL,
        created_by_verified BOOLEAN DEFAULT FALSE,
        status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'in_progress', 'completed', 'cancelled')),
        respondents TEXT[] DEFAULT '{}'::TEXT[]
      )
    `);
    console.log('✅ Tasks table created successfully');

    // Create indexes
    console.log('📇 Creating indexes...');
    await appPool.query(`CREATE INDEX IF NOT EXISTS idx_tasks_location ON tasks (latitude, longitude)`);
    await appPool.query(`CREATE INDEX IF NOT EXISTS idx_tasks_created_by ON tasks (created_by_user_id)`);
    await appPool.query(`CREATE INDEX IF NOT EXISTS idx_tasks_status ON tasks (status)`);
    await appPool.query(`CREATE INDEX IF NOT EXISTS idx_tasks_created_at ON tasks (created_at DESC)`);
    console.log('✅ Indexes created successfully');

    // Create function to update updated_at timestamp
    await appPool.query(`
      CREATE OR REPLACE FUNCTION update_updated_at_column()
      RETURNS TRIGGER AS $$
      BEGIN
          NEW.updated_at = NOW();
          RETURN NEW;
      END;
      $$ LANGUAGE plpgsql;
    `);

    // Create trigger
    await appPool.query(`
      DROP TRIGGER IF EXISTS update_tasks_updated_at ON tasks;
      CREATE TRIGGER update_tasks_updated_at
          BEFORE UPDATE ON tasks
          FOR EACH ROW
          EXECUTE FUNCTION update_updated_at_column();
    `);
    console.log('✅ Triggers created successfully');

    await appPool.end();

    console.log('🎉 Database setup completed successfully!');
    console.log('📊 Your PostgreSQL database is ready for the Radius app');
    console.log('🚀 You can now start the backend server with: npm run dev');

  } catch (error) {
    console.error('❌ Error setting up database:', error);
    process.exit(1);
  }
}

// Run setup if this file is executed directly
if (require.main === module) {
  setupDatabase();
}

module.exports = { setupDatabase }; 