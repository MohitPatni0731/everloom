import { useState, useEffect, useRef, useCallback } from 'react';
import { useUser } from '@clerk/clerk-react';
import { useLocation } from './useLocation';
import { localAPI, Task } from '@/lib/supabase';
import { toast } from 'sonner';

export interface TaskFormData {
  title: string;
  description: string;
  category: Task['category'];
  exchange: Task['exchange'];
  amount?: number;
  duration: string;
  urgency: Task['urgency'];
  phone: string;
  address: string;
}

// WebSocket connection for real-time updates
class TaskWebSocketManager {
  private ws: WebSocket | null = null;
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;
  private reconnectInterval = 1000;
  private listeners: Set<(data: any) => void> = new Set();

  connect() {
    if (this.ws?.readyState === WebSocket.OPEN) return;

    try {
      this.ws = new WebSocket('ws://localhost:3001');
      
      this.ws.onopen = () => {
        this.reconnectAttempts = 0;
      };

      this.ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          this.listeners.forEach(listener => listener(data));
        } catch (error) {
          // Silent error handling for production
        }
      };

      this.ws.onclose = () => {
        this.scheduleReconnect();
      };

      this.ws.onerror = (error) => {
        // Silent error handling for production
      };
    } catch (error) {
      this.scheduleReconnect();
    }
  }

  private scheduleReconnect() {
    if (this.reconnectAttempts >= this.maxReconnectAttempts) {
      return;
    }

    setTimeout(() => {
      this.reconnectAttempts++;
      this.connect();
    }, this.reconnectInterval * Math.pow(2, this.reconnectAttempts));
  }

  addListener(listener: (data: any) => void) {
    this.listeners.add(listener);
  }

  removeListener(listener: (data: any) => void) {
    this.listeners.delete(listener);
  }

  disconnect() {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
    this.listeners.clear();
  }
}

const wsManager = new TaskWebSocketManager();

export const useLocalTasks = () => {
  const { user } = useUser();
  const { location } = useLocation();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  // Bulletproof task loading with intelligent location handling
  const loadTasks = useCallback(async (includeOwnTasks = false, retryCount = 0) => {
    // Cancel any pending request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    abortControllerRef.current = new AbortController();

    try {
      setLoading(true);
      
      const params: any = {};
      
      if (includeOwnTasks && user) {
        params.user_id = user.id;
      } else {
        // CRITICAL FIX: Handle missing location gracefully
        if (!location || !location.latitude || !location.longitude) {
          // If no location is set, show empty tasks and guide user to set location
          setTasks([]);
          setError('Set your location to find tasks in your area');
          return; // FIXED: Remove setLoading(false) - it's handled in finally block
        }
        
        params.lat = location.latitude;
        params.lng = location.longitude;
        params.radius = 1;
      }
      
      const data = await localAPI.getTasks(params);
      
      // Only update if this request wasn't aborted
      if (!abortControllerRef.current?.signal.aborted) {
        setTasks(data || []);
        setError(null);
      }
    } catch (err) {
      if (!abortControllerRef.current?.signal.aborted) {
        // Add retry logic for initial connection failures
        if (retryCount < 2 && (err instanceof Error && err.message.includes('fetch'))) {
          // Wait a bit before retrying
          setTimeout(() => {
            loadTasks(includeOwnTasks, retryCount + 1);
          }, 1000 * (retryCount + 1));
          return;
        }
        setError(err instanceof Error ? err.message : 'Failed to load tasks');
      }
    } finally {
      // CRITICAL FIX: Always reset loading state regardless of abort status
      setLoading(false);
    }
  }, [user, location]);

  // WebSocket real-time updates - FIXED TO HANDLE ALL TASKS FOR ALL USERS
  useEffect(() => {
    const handleWebSocketMessage = (data: any) => {
      if (data.type === 'NEW_TASK') {
        setTasks(prevTasks => {
          // Check if task already exists to prevent duplicates
          const exists = prevTasks.some(task => task.id === data.task.id);
          if (exists) return prevTasks;
          
          // CRITICAL FIX: Add ALL new tasks regardless of who created them
          // Filtering happens at display level, not at state level
          return [data.task, ...prevTasks];
        });
      } else if (data.type === 'TASK_UPDATED') {
        setTasks(prevTasks => 
          prevTasks.map(task => 
            task.id === data.task.id ? data.task : task
          )
        );
      } else if (data.type === 'TASK_DELETED') {
        setTasks(prevTasks => 
          prevTasks.filter(task => task.id !== data.taskId)
        );
      }
    };

    wsManager.addListener(handleWebSocketMessage);
    wsManager.connect();

    return () => {
      wsManager.removeListener(handleWebSocketMessage);
    };
  }, []);

  // Initial load with delay to prevent "Failed to fetch" - FIXED
  useEffect(() => {
    // Add a small delay to allow backend to fully initialize
    const initializeWithDelay = async () => {
      // Wait for both user and location to be available
      if (user?.id && (location?.latitude && location?.longitude)) {
        // Add a small delay on initial load to prevent race conditions
        await new Promise(resolve => setTimeout(resolve, 500));
        loadTasks();
      }
    };

    initializeWithDelay();

    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [user?.id, location?.latitude, location?.longitude]); // Dependencies ensure it runs when location becomes available

  // BULLETPROOF task creation with immediate UI update
  const createTask = async (taskData: TaskFormData): Promise<Task | null> => {
    if (!user) {
      setError('No user found');
      return null;
    }

    // Validate required phone number before proceeding
    if (!taskData.phone || taskData.phone.trim() === '') {
      setError('Phone number is required');
      toast.error('Failed to post task', {
        description: 'Phone number is required to post a task.',
      });
      return null;
    }

    try {
      setLoading(true);
      
      const userName = user.fullName || 
                      user.firstName || 
                      user.primaryEmailAddress?.emailAddress?.split('@')[0] || 
                      `User${user.id.slice(-4)}`;

      const newTaskData = {
        title: taskData.title,
        description: taskData.description,
        category: taskData.category,
        exchange: taskData.exchange,
        amount: taskData.amount,
        duration: taskData.duration,
        urgency: taskData.urgency,
        latitude: location?.latitude,
        longitude: location?.longitude,
        address: taskData.address || location?.address || 'Not specified',
        created_by_user_id: user.id,
        created_by_name: userName,
        created_by_email: user.primaryEmailAddress?.emailAddress || '',
        created_by_verified: user.hasVerifiedEmailAddress || false,
        created_by_phone: taskData.phone.trim()
      };

      // Make API call - WebSocket will handle the UI update for ALL users including creator
      const createdTask = await localAPI.createTask(newTaskData);

      // DO NOT add to local state - let WebSocket handle this for real-time consistency
      // This ensures the creator sees the task appear the same way other users do

      toast.success('Task posted successfully!', {
        description: 'Your task is now visible to all neighbors in your area.',
      });

      return createdTask;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to create task';
      setError(errorMessage);
      
      toast.error('Failed to post task', {
        description: errorMessage,
      });
      return null;
    } finally {
      setLoading(false);
    }
  };

  // Optimistic task status update
  const updateTaskStatus = async (taskId: string, status: Task['status']) => {
    if (!user) return;
    
    try {
      // Immediate optimistic update
      setTasks(prevTasks => 
        prevTasks.map(task => 
          task.id === taskId ? { ...task, status } : task
        )
      );

      await localAPI.updateTask(taskId, { status, user_id: user.id } as any);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update task');
      
      // Revert optimistic update and reload
      await loadTasks();
      throw err;
    }
  };

  // Optimistic task response
  const respondToTask = async (taskId: string) => {
    if (!user) return;

    try {
      // Immediate optimistic update
      setTasks(prevTasks => 
        prevTasks.map(task => 
          task.id === taskId 
            ? { ...task, respondents: [...task.respondents, user.id] }
            : task
        )
      );

      await localAPI.respondToTask(taskId, user.id);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to respond to task');
      
      // Revert optimistic update
      await loadTasks();
      throw err;
    }
  };

  // Task deletion with immediate UI update
  const deleteTask = async (taskId: string) => {
    try {
      // Immediate optimistic removal
      setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
      
      await localAPI.deleteTask(taskId);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete task');
      
      // Reload on error
      await loadTasks();
    }
  };

  // CONSISTENT task filtering
  const getTasksByFilter = useCallback((filter: string): Task[] => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
    let filtered: Task[] = [];
    
    switch (filter) {
      case 'all':
        filtered = tasks.filter(task => 
          task.status === 'active' && 
          task.created_by_user_id !== user?.id
        );
        break;
      case 'immediate':
        filtered = tasks.filter(task => 
          task.status === 'active' && 
          task.urgency === 'high' &&
          task.created_by_user_id !== user?.id
        );
        break;
      case 'today': 
        filtered = tasks.filter(task => {
          const taskDate = new Date(task.created_at);
          const taskDay = new Date(taskDate.getFullYear(), taskDate.getMonth(), taskDate.getDate());
          return task.status === 'active' && 
                 taskDay.getTime() === today.getTime() &&
                 task.created_by_user_id !== user?.id;
        });
        break;
      case 'free':
        filtered = tasks.filter(task => 
          task.status === 'active' && 
          task.exchange === 'free' &&
          task.created_by_user_id !== user?.id
        );
        break;
      case 'my_tasks':
        filtered = tasks.filter(task => 
          task.created_by_user_id === user?.id
        );
        break;
      default:
        filtered = tasks.filter(task => 
          task.status === 'active' &&
          task.created_by_user_id !== user?.id
        );
    }
    
    return filtered.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  }, [tasks, user]);

  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
    const R = 3959; // Radius of the Earth in miles
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  const getTasksWithDistance = (userLat?: number, userLon?: number, radiusMiles: number = 1): Task[] => {
    if (!userLat || !userLon) return tasks;
    
    return tasks.filter(task => {
      if (!task.latitude || !task.longitude) return true;
      const distance = calculateDistance(userLat, userLon, task.latitude, task.longitude);
      return distance <= radiusMiles;
    });
  };

  const loadTasksForFilter = async (filter: string) => {
    await loadTasks(filter === 'my_tasks');
  };

  const refreshTasks = () => {
    loadTasks();
  };

  const getTaskById = (taskId: string): Task | undefined => {
    return tasks.find(task => task.id === taskId);
  };

  const getTasksIRespondedTo = (): Task[] => {
    if (!user) return [];
    return tasks.filter(task => task.respondents.includes(user.id));
  };

  const getContactInfo = async (taskId: string): Promise<{phone: string, address: string} | null> => {
    if (!user) return null;
    
    try {
      return await localAPI.getContactInfo(taskId, user.id);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to get contact info');
      return null;
    }
  };

  return {
    tasks,
    loading,
    error,
    createTask,
    updateTaskStatus,
    respondToTask,
    deleteTask,
    loadTasks,
    loadTasksForFilter,
    refreshTasks,
    getTasksByFilter,
    getTasksWithDistance,
    getTaskById,
    getTasksIRespondedTo,
    getContactInfo,
  };
}; 