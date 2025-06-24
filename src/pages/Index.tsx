import React, { useState, useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';
import TaskCard from '@/components/TaskCard';
import TaskPostModal from '@/components/TaskPostModal';
import LocationManager from '@/components/LocationManager';
import UserProfile from '@/components/UserProfile';
import WelcomeCard from '@/components/WelcomeCard';
import { Button } from '@/components/ui/button';
import { Plus, Filter } from 'lucide-react';
import { useLocalTasks } from '@/hooks/useLocalTasks';
import { useLocation } from '@/hooks/useLocation';
import LocationSetup from '@/components/LocationSetup';

const Index = () => {
  const { user } = useUser();
  const { location, hasPermission } = useLocation();
  const [showPostModal, setShowPostModal] = useState(false);
  const [currentFilter, setCurrentFilter] = useState('all');
  const [currentRadius, setCurrentRadius] = useState('1');
  const [locationSetupComplete, setLocationSetupComplete] = useState(false);

  const {
    tasks,
    loading,
    error,
    getTasksByFilter,
    getTasksWithDistance,
    loadTasksForFilter,
  } = useLocalTasks();

  // Clear all localStorage when component mounts (migration to database)
  useEffect(() => {
    // Clear all localStorage data for migration
    localStorage.removeItem('everloom_tasks');
    localStorage.removeItem('userLocation');
    localStorage.removeItem('tasks');
  }, []);

  // Check if location setup is complete
  useEffect(() => {
    if (location && hasPermission === true) {
      setLocationSetupComplete(true);
    } else if (hasPermission === false) {
      setLocationSetupComplete(false);
    }
  }, [location, hasPermission]);

  // Load tasks when filter changes - FIXED INFINITE LOOP
  useEffect(() => {
    loadTasksForFilter(currentFilter);
  }, [currentFilter]); // FIXED: Removed loadTasksForFilter from dependencies

  // If location setup is not complete, show location setup screen
  if (!locationSetupComplete) {
    return (
      <LocationSetup 
        onLocationSet={() => setLocationSetupComplete(true)} 
      />
    );
  }

  const filters = [
    { id: 'all', label: 'All', icon: '🏠' },
    { id: 'immediate', label: 'Urgent', icon: '⚡' },
    { id: 'today', label: 'Today', icon: '📅' },
    { id: 'free', label: 'Free', icon: '💝' },
    { id: 'my_tasks', label: 'My Tasks', icon: '📝' },
  ];

  const getFilteredTasks = () => {
    if (currentFilter === 'my_tasks') {
      return getTasksByFilter(currentFilter);
    }
    
    // For neighbor tasks, apply both filter and distance
    const categoryFilteredTasks = getTasksByFilter(currentFilter);
    
    // Then apply distance filter to the already category-filtered tasks
    if (location?.latitude && location?.longitude) {
      return categoryFilteredTasks.filter(task => {
        if (!task.latitude || !task.longitude) return true;
        const distance = calculateDistance(location.latitude!, location.longitude!, task.latitude, task.longitude);
        return distance <= parseFloat(currentRadius);
      });
    }
    return categoryFilteredTasks;
  };

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

  const filteredTasks = getFilteredTasks();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="/logo.png" 
                alt="EVERLOOM Logo" 
                className="w-10 h-10 filter contrast-125 brightness-110"
              />
              <h1 className="text-2xl font-medium italic tracking-[0.02em] text-black" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                <span className="relative">
                  everloom
                  <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50"></div>
                </span>
              </h1>
            </div>
            <div className="flex items-center space-x-3">
              <Button 
                onClick={() => window.location.reload()} 
                variant="outline" 
                size="sm"
                className="flex items-center space-x-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span>Refresh</span>
              </Button>
              <UserProfile />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        {/* Location Manager */}
        <LocationManager 
          currentRadius={currentRadius}
          onRadiusChange={setCurrentRadius}
        />

        {/* Welcome Card - only show for new users */}
        {currentFilter === 'all' && filteredTasks.length === 0 && !loading && (
          <WelcomeCard />
        )}

        {/* Post Task Button */}
        <div className="flex justify-center">
          <Button 
            onClick={() => setShowPostModal(true)}
            className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-lg font-medium"
            size="lg"
          >
            <Plus className="w-5 h-5 mr-2" />
            Post Task
          </Button>
        </div>

        {/* Filter Tabs */}
        <div className="flex space-x-2 overflow-x-auto">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setCurrentFilter(filter.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                currentFilter === filter.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white/60 text-gray-700 hover:bg-white/80'
              }`}
            >
              <span>{filter.icon}</span>
              <span>{filter.label}</span>
            </button>
          ))}
        </div>

        {/* Tasks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {loading && (
            <div className="col-span-full flex justify-center py-8">
              <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          {error && (
            <div className="col-span-full text-center py-8">
              {error === 'Set your location to find tasks in your area' ? (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="text-blue-700 mb-4">📍 {error}</div>
                  <p className="text-blue-600 text-sm">
                    Click the "Live Location" button above to see tasks from neighbors in your area.
                  </p>
                </div>
              ) : (
                <>
                  <p className="text-red-600 mb-4">{error}</p>
                  <Button onClick={() => loadTasksForFilter(currentFilter)} variant="outline">
                    Try Again
                  </Button>
                </>
              )}
            </div>
          )}

          {!loading && !error && filteredTasks.length === 0 && (
            <div className="col-span-full text-center py-12">
              <Filter className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {currentFilter === 'my_tasks' ? 'No tasks posted yet' : 'No tasks in this area'}
              </h3>
              <p className="text-gray-500 mb-6">
                {currentFilter === 'my_tasks' 
                  ? 'Post your first task to get started with your neighbors.'
                  : `No ${currentFilter === 'all' ? '' : currentFilter} tasks found within ${currentRadius} mile${currentRadius !== '1' ? 's' : ''}.`
                }
              </p>
              {currentFilter === 'my_tasks' && (
                <Button onClick={() => setShowPostModal(true)}>
                  <Plus className="w-4 h-4 mr-2" />
                  Post Your First Task
                </Button>
              )}
            </div>
          )}

          {filteredTasks.map((task) => (
            <TaskCard 
              key={task.id} 
              task={task}
            />
          ))}
        </div>
      </div>

      {/* Task Post Modal */}
      <TaskPostModal 
        open={showPostModal} 
        onOpenChange={setShowPostModal}
      />
    </div>
  );
};

export default Index;
