import { useState, useEffect } from 'react';
import { MapPin, Navigation, AlertCircle, Loader2, X, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useLocation } from '@/hooks/useLocation';

interface LocationSetupProps {
  onLocationSet: () => void;
}

const LocationSetup = ({ onLocationSet }: LocationSetupProps) => {
  const [showPermissionDialog, setShowPermissionDialog] = useState(false);
  const { 
    location, 
    loading, 
    error, 
    hasPermission, 
    requestLocationPermission
  } = useLocation();

  // Automatically request location permission when component mounts
  useEffect(() => {
    // Only request if we don't already have permission or location
    if (hasPermission === null && !location) {
      const requestLocation = async () => {
        try {
    await requestLocationPermission();
        } catch (err) {
          // Silent error handling for production
        }
      };
      requestLocation();
    }
  }, [requestLocationPermission, hasPermission, location]);

  // Handle location permission response and show modal when denied
  useEffect(() => {
    if (hasPermission === false && error) {
      setShowPermissionDialog(true);
    } else if (hasPermission === true && location) {
      // Close any open dialogs and proceed to main app
      setShowPermissionDialog(false);
      onLocationSet();
    }
  }, [hasPermission, location, error, loading, onLocationSet]);

  const handleRetryLocation = async () => {
    setShowPermissionDialog(false);
    try {
      await requestLocationPermission();
    } catch (err) {
      // Silent error handling for production
    }
  };

  // If location is already available, proceed to main app immediately
  if (location && hasPermission === true) {
    onLocationSet();
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <img 
              src="/logo.png" 
              alt="EVERLOOM Logo" 
              className="w-16 h-16 filter contrast-125 brightness-110"
            />
            <h1 className="text-4xl font-medium italic tracking-[0.03em] bg-gradient-to-r from-gray-900 via-gray-600 to-gray-800 bg-clip-text text-transparent" style={{ fontFamily: "'Cormorant Garamond', serif", textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <span className="relative">
                everloom
                <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-50"></div>
              </span>
            </h1>
          </div>

          {loading ? (
            <>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Getting Your Location
          </h2>
          <p className="text-gray-600 font-light">
                Please allow location access to connect with your neighbors
          </p>
            </>
          ) : error && hasPermission === false ? (
            <>
              <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-8 h-8 text-red-600" />
        </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Location Required
              </h2>
              <p className="text-gray-600 font-light mb-6">
                {error}
              </p>
              <Button 
                onClick={handleRetryLocation}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Navigation className="w-4 h-4 mr-2" />
                Try Again
              </Button>
            </>
          ) : (
            <>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Navigation className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Detecting Your Location
              </h2>
              <p className="text-gray-600 font-light">
                Connecting you with nearby neighbors...
              </p>
                  </>
                )}
        </div>
      </Card>

      {/* Interactive Permission Denied Dialog */}
      <Dialog open={showPermissionDialog} onOpenChange={setShowPermissionDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2 text-center justify-center">
              <Lock className="w-5 h-5 text-red-600" />
              <span>Location Permission Required</span>
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto">
              <MapPin className="w-10 h-10 text-red-600" />
                </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900">
                Connect with Your Neighbors
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To help your neighbors and find local tasks, we need to know your location. 
                This helps us show you relevant opportunities in your area.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="text-left">
                  <p className="text-sm font-medium text-blue-900 mb-1">
                    Why we need your location:
                  </p>
                  <ul className="text-xs text-blue-800 space-y-1">
                    <li>• Show tasks and requests near you</li>
                    <li>• Connect you with neighbors in your area</li>
                    <li>• Calculate walking/driving distances</li>
                    <li>• Send relevant local notifications</li>
                  </ul>
              </div>
              </div>
            </div>

            <div className="space-y-3">
            <Button
                onClick={handleRetryLocation}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                size="lg"
              >
                <Navigation className="w-4 h-4 mr-2" />
                Allow Location Access
            </Button>
            
              <p className="text-xs text-gray-500">
                Your exact location is never shared with other users. 
                We only show your general neighborhood area.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LocationSetup; 