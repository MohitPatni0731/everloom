import { useState } from 'react';
import { MapPin, Navigation, Loader2, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocation } from '@/hooks/useLocation';
import { toast } from 'sonner';

interface LocationManagerProps {
  currentRadius: string;
  onRadiusChange: (radius: string) => void;
}

const LocationManager = ({ currentRadius, onRadiusChange }: LocationManagerProps) => {
  const [isDetecting, setIsDetecting] = useState(false);
  const { 
    location, 
    error, 
    detectLiveLocation 
  } = useLocation();

  const radiusOptions = [
    { value: "0.5", label: "0.5 miles", desc: "Very close" },
    { value: "1", label: "1 mile", desc: "Walking distance" },
    { value: "2", label: "2 miles", desc: "Short bike ride" },
    { value: "5", label: "5 miles", desc: "Nearby area" },
    { value: "10", label: "10 miles", desc: "Extended area" },
  ];

  const handleDetectLiveLocation = async () => {
    setIsDetecting(true);
    try {
      await detectLiveLocation();
      toast.success('Live location updated!', {
        description: 'Your current location has been detected and updated.',
      });
    } catch (err) {
      toast.error('Failed to detect location', {
        description: 'Please ensure location permissions are enabled.',
      });
    } finally {
      setIsDetecting(false);
    }
  };

  const getCurrentLocationText = () => {
    if (!location) return 'Location not set';
    
    if (location.city) {
      return `${location.city}${location.zipcode ? `, ${location.zipcode}` : ''}`;
    }
    if (location.zipcode) {
      return location.zipcode;
    }
    if (location.address) {
      // Show a shortened version of the address
      const parts = location.address.split(',');
      return parts.slice(0, 2).join(',');
    }
    return 'Current location';
  };

  return (
      <div className="flex items-center space-x-4 p-4 bg-white/50 backdrop-blur-sm border border-gray-200/50 rounded-xl">
        <div className="flex items-center space-x-2 flex-1">
          <MapPin className="w-5 h-5 text-blue-600" />
          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-900">
                {getCurrentLocationText()}
              </span>
              {location && (
                <CheckCircle className="w-4 h-4 text-green-600" />
              )}
            </div>
            <span className="text-xs text-gray-500">
              Searching within {currentRadius} mile{currentRadius !== '1' ? 's' : ''}
            </span>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <select
            value={currentRadius}
            onChange={(e) => onRadiusChange(e.target.value)}
            className="text-xs border border-gray-200 rounded-lg px-2 py-1 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {radiusOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          
          <Button
            variant="outline"
            size="sm"
          onClick={handleDetectLiveLocation}
          disabled={isDetecting}
          className="text-xs flex items-center space-x-1 whitespace-nowrap"
        >
          {isDetecting ? (
                  <>
              <Loader2 className="w-3 h-3 animate-spin" />
              <span>Detecting...</span>
                  </>
                ) : (
                  <>
              <Navigation className="w-3 h-3" />
              <span>Live Location</span>
                  </>
                )}
              </Button>
            </div>
          </div>
  );
};

export default LocationManager; 