import { useState, useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';

interface LocationData {
  latitude?: number;
  longitude?: number;
  zipcode?: string;
  address?: string;
  city?: string;
  country?: string;
}

interface LocationState {
  location: LocationData | null;
  loading: boolean;
  error: string | null;
  hasPermission: boolean | null;
}

export const useLocation = () => {
  const { user } = useUser();
  const [state, setState] = useState<LocationState>({
    location: null,
    loading: false,
    error: null,
    hasPermission: null,
  });

  // Save location to database
  const saveLocationToDatabase = async (locationData: LocationData) => {
    if (!user?.id) return;

    try {
      const response = await fetch('http://localhost:3001/api/user-location', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: user.id,
          ...locationData
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to save location to database');
      }
    } catch (error) {
      // Silent error handling for production
    }
  };

  // Load location from database
  const loadLocationFromDatabase = async () => {
    if (!user?.id) return null;

    try {
      const response = await fetch(`http://localhost:3001/api/user-location/${user.id}`);
      
      if (response.status === 404) {
        return null;
      }

      if (!response.ok) {
        throw new Error('Failed to load location from database');
      }

      const locationData = await response.json();
      
      // Convert database format to our format
      return {
        latitude: parseFloat(locationData.latitude),
        longitude: parseFloat(locationData.longitude),
        address: locationData.address,
        city: locationData.city,
        zipcode: locationData.zipcode,
        country: locationData.country,
      };
    } catch (error) {
      return null;
    }
  };

  const requestLocationPermission = async () => {
    setState(prev => ({ ...prev, loading: true, error: null }));

    try {
      // Check if geolocation is supported
      if (!navigator.geolocation) {
        throw new Error('Geolocation is not supported by this browser');
      }

      // Request current position
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          
          try {
            // Reverse geocoding using Nominatim (OpenStreetMap)
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`
            );
            const data = await response.json();
            
            const locationData: LocationData = {
              latitude,
              longitude,
              address: data.display_name,
              city: data.address?.city || data.address?.town || data.address?.village,
              zipcode: data.address?.postcode,
              country: data.address?.country,
            };
            
            // Save to database
            await saveLocationToDatabase(locationData);

            setState({
              location: locationData,
              loading: false,
              error: null,
              hasPermission: true,
            });
          } catch (error) {
            // Even if reverse geocoding fails, we have coordinates
            const locationData = { latitude, longitude };
            
            // Save to database
            await saveLocationToDatabase(locationData);
            
            setState({
              location: locationData,
              loading: false,
              error: null,
              hasPermission: true,
            });
          }
        },
        (error) => {
          let errorMessage = 'Unable to get your location';
          switch (error.code) {
            case error.PERMISSION_DENIED:
              errorMessage = 'Location access denied by user';
              break;
            case error.POSITION_UNAVAILABLE:
              errorMessage = 'Location information is unavailable';
              break;
            case error.TIMEOUT:
              errorMessage = 'Location request timed out';
              break;
          }
          
          setState({
            location: null,
            loading: false,
            error: errorMessage,
            hasPermission: false,
          });
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 300000, // 5 minutes
        }
      );
    } catch (error) {
      setState({
        location: null,
        loading: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred',
        hasPermission: false,
      });
    }
  };

  // New function for when user travels and wants to detect live location
  const detectLiveLocation = async () => {
    await requestLocationPermission();
  };

  const clearLocation = () => {
    setState({
      location: null,
      loading: false,
      error: null,
      hasPermission: null,
    });
  };

  // Load saved location from database on mount
  useEffect(() => {
    if (user?.id) {
      const loadSavedLocation = async () => {
        const savedLocation = await loadLocationFromDatabase();
    if (savedLocation) {
          setState(prev => ({ 
            ...prev, 
            location: savedLocation, 
            hasPermission: true 
          }));
        }
      };
      
      loadSavedLocation();
    }
  }, [user?.id]);

  return {
    ...state,
    requestLocationPermission,
    detectLiveLocation, // New function for travel scenarios
    clearLocation,
  };
}; 