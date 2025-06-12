
import { useState } from "react";
import { MapPin, Minus, Plus } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

interface RadiusSelectorProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  currentRadius: string;
  onRadiusChange: (radius: string) => void;
}

const RadiusSelector = ({ open, onOpenChange, currentRadius, onRadiusChange }: RadiusSelectorProps) => {
  const [tempRadius, setTempRadius] = useState(50);

  const radiusOptions = [
    { value: 25, label: "25m", description: "Same building" },
    { value: 50, label: "50m", description: "Neighboring buildings" },
    { value: 100, label: "100m", description: "Block radius" },
    { value: 200, label: "200m", description: "Extended neighborhood" }
  ];

  const handleSave = () => {
    const selectedOption = radiusOptions.find(option => option.value === tempRadius);
    if (selectedOption) {
      onRadiusChange(selectedOption.label);
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md mx-auto bg-background border-border/40 shadow-xl">
        <DialogHeader className="text-center pb-6">
          <DialogTitle className="text-2xl font-light tracking-tight">
            Set Your Radius
          </DialogTitle>
          <p className="text-sm text-muted-foreground">
            Choose how close neighbors should be
          </p>
        </DialogHeader>

        <div className="space-y-8">
          {/* Visual Radius Display */}
          <div className="relative flex items-center justify-center py-8">
            <div className="w-32 h-32 rounded-full border-2 border-primary/20 bg-primary/5 flex items-center justify-center relative">
              <MapPin className="w-6 h-6 text-primary" />
              <div 
                className="absolute rounded-full border-2 border-primary/40 bg-primary/10"
                style={{
                  width: `${Math.min(tempRadius / 2, 60)}px`,
                  height: `${Math.min(tempRadius / 2, 60)}px`
                }}
              />
            </div>
          </div>

          {/* Radius Value */}
          <div className="text-center">
            <div className="text-3xl font-light text-foreground mb-2">
              {tempRadius}m
            </div>
            <div className="text-sm text-muted-foreground">
              {radiusOptions.find(option => option.value === tempRadius)?.description}
            </div>
          </div>

          {/* Slider */}
          <div className="px-4">
            <Slider
              value={[tempRadius]}
              onValueChange={(value) => setTempRadius(value[0])}
              max={200}
              min={25}
              step={25}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>25m</span>
              <span>200m</span>
            </div>
          </div>

          {/* Quick Options */}
          <div className="grid grid-cols-2 gap-2">
            {radiusOptions.map((option) => (
              <Button
                key={option.value}
                variant={tempRadius === option.value ? "default" : "outline"}
                size="sm"
                onClick={() => setTempRadius(option.value)}
                className="rounded-full text-xs"
              >
                {option.label}
              </Button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1 rounded-full"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              className="flex-1 rounded-full bg-primary hover:bg-primary/90"
            >
              Save Radius
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RadiusSelector;
