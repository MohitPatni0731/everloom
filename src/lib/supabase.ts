// Local PostgreSQL API Client
const API_BASE_URL = 'http://localhost:3001/api';

// Database types
export interface Task {
  id: string
  title: string
  description: string
  category: 'help_needed' | 'offering_help' | 'borrow' | 'lend' | 'general'
  exchange: 'free' | 'paid' | 'trade'
  amount?: number
  duration: string
  urgency: 'low' | 'medium' | 'high'
  latitude?: number
  longitude?: number
  address?: string
  created_at: string
  updated_at: string
  created_by_user_id: string
  created_by_name: string
  created_by_email: string
  created_by_verified: boolean
  created_by_phone?: string
  status: 'active' | 'in_progress' | 'completed' | 'cancelled'
  respondents: string[]
}

// API client class
export class LocalAPI {
  private baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  // Generic fetch wrapper
  private async fetch<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: 'Network error' }));
      throw new Error(error.error || `HTTP ${response.status}`);
    }

    return response.json();
  }

  // Tasks API methods
  async getTasks(filters: {
    category?: string;
    status?: string;
    user_id?: string;
    lat?: number;
    lng?: number;
    radius?: number;
  } = {}): Promise<Task[]> {
    const params = new URLSearchParams();
    
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        params.append(key, value.toString());
      }
    });

    const queryString = params.toString();
    const endpoint = `/tasks${queryString ? `?${queryString}` : ''}`;
    
    return this.fetch<Task[]>(endpoint);
  }

  async getTask(id: string): Promise<Task> {
    return this.fetch<Task>(`/tasks/${id}`);
  }

  async createTask(task: Omit<Task, 'id' | 'created_at' | 'updated_at' | 'status' | 'respondents'>): Promise<Task> {
    return this.fetch<Task>('/tasks', {
      method: 'POST',
      body: JSON.stringify(task),
    });
  }

  async updateTask(id: string, updates: Partial<Task>): Promise<Task> {
    return this.fetch<Task>(`/tasks/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updates),
    });
  }

  async deleteTask(id: string): Promise<{ message: string }> {
    return this.fetch<{ message: string }>(`/tasks/${id}`, {
      method: 'DELETE',
    });
  }

  // Health check
  async healthCheck(): Promise<{ status: string; timestamp: string; database: string }> {
    return this.fetch<{ status: string; timestamp: string; database: string }>('/health');
  }

  // Respond to a task (offer help)
  async respondToTask(taskId: string, userId: string): Promise<Task> {
    return this.fetch<Task>(`/tasks/${taskId}/respond`, {
      method: 'POST',
      body: JSON.stringify({ user_id: userId }),
    });
  }

  // Get contact info for a task (only if user has responded)
  async getContactInfo(taskId: string, userId: string): Promise<{ phone: string, address: string }> {
    return this.fetch<{ phone: string, address: string }>(`/tasks/${taskId}/contact?user_id=${userId}`);
  }

  // User location methods
  async getUserLocation(userId: string): Promise<any> {
    return this.fetch(`/user-location/${userId}`);
  }

  async updateUserLocation(locationData: {
    user_id: string;
    latitude?: number;
    longitude?: number;
    address?: string;
    city?: string;
    zipcode?: string;
    country?: string;
  }): Promise<any> {
    return this.fetch('/user-location', {
      method: 'POST',
      body: JSON.stringify(locationData),
    });
  }
}

// Export a singleton instance
export const localAPI = new LocalAPI();

// Legacy export for backward compatibility (replaces supabase)
export const supabase = {
  from: (table: string) => {
    if (table === 'tasks') {
      return {
        select: (columns: string = '*') => ({
          eq: (column: string, value: any) => localAPI.getTasks({ [column]: value }),
          order: (column: string, options: any) => localAPI.getTasks(),
        }),
        insert: (data: any) => localAPI.createTask(data),
        update: (data: any) => ({
          eq: (column: string, value: any) => {
            if (column === 'id') {
              return localAPI.updateTask(value, data);
            }
            throw new Error('Only ID-based updates are supported');
          }
        }),
        delete: () => ({
          eq: (column: string, value: any) => {
            if (column === 'id') {
              return localAPI.deleteTask(value);
            }
            throw new Error('Only ID-based deletes are supported');
          }
        })
      };
    }
    throw new Error(`Table ${table} not supported`);
  }
}; 