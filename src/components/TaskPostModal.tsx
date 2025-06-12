
import { useState } from "react";
import { X, Clock, DollarSign, Gift, ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

interface TaskPostModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TaskPostModal = ({ open, onOpenChange }: TaskPostModalProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    duration: "",
    exchange: "free",
    amount: ""
  });

  const exchangeOptions = [
    { id: "free", label: "Free / Goodwill", icon: Gift, color: "green" },
    { id: "money", label: "Small Payment", icon: DollarSign, color: "blue" },
    { id: "trade", label: "Trade / Barter", icon: ArrowRight, color: "amber" }
  ];

  const handleSubmit = () => {
    console.log("Task posted:", formData);
    onOpenChange(false);
    setStep(1);
    setFormData({
      title: "",
      description: "",
      duration: "",
      exchange: "free",
      amount: ""
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md mx-auto bg-background border-border/40 shadow-xl">
        <DialogHeader className="text-center pb-6">
          <DialogTitle className="text-2xl font-light tracking-tight">
            Post a Task
          </DialogTitle>
          <p className="text-sm text-muted-foreground">
            Ask your neighbors for a quick hand
          </p>
        </DialogHeader>

        {step === 1 && (
          <div className="space-y-6">
            {/* Task Title */}
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                What do you need?
              </label>
              <Input
                placeholder="e.g., Borrow a ladder for 30 minutes"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="bg-muted/20 border-border/40 focus:border-primary/40"
              />
            </div>

            {/* Description */}
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Brief details
              </label>
              <Textarea
                placeholder="Add any helpful context..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="bg-muted/20 border-border/40 focus:border-primary/40 min-h-[80px] resize-none"
              />
            </div>

            {/* Duration */}
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                How long?
              </label>
              <Input
                placeholder="e.g., 30 minutes, 1 hour, immediate"
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                className="bg-muted/20 border-border/40 focus:border-primary/40"
              />
            </div>

            <Button
              onClick={() => setStep(2)}
              disabled={!formData.title.trim()}
              className="w-full rounded-full bg-primary hover:bg-primary/90"
            >
              Continue
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div>
              <label className="text-sm font-medium text-foreground mb-4 block">
                What would you like to offer in return?
              </label>
              
              <div className="grid gap-3">
                {exchangeOptions.map((option) => {
                  const isSelected = formData.exchange === option.id;
                  return (
                    <div
                      key={option.id}
                      onClick={() => setFormData({ ...formData, exchange: option.id })}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                        isSelected
                          ? `border-${option.color}-200 bg-${option.color}-50`
                          : "border-border/40 bg-muted/20 hover:border-border/60"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <option.icon className={`w-5 h-5 ${
                          isSelected ? `text-${option.color}-600` : "text-muted-foreground"
                        }`} />
                        <span className={`font-medium ${
                          isSelected ? `text-${option.color}-700` : "text-foreground"
                        }`}>
                          {option.label}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {formData.exchange === "money" && (
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Suggested amount
                </label>
                <Input
                  placeholder="$5"
                  value={formData.amount}
                  onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                  className="bg-muted/20 border-border/40 focus:border-primary/40"
                />
              </div>
            )}

            <div className="flex space-x-3">
              <Button
                variant="outline"
                onClick={() => setStep(1)}
                className="flex-1 rounded-full"
              >
                Back
              </Button>
              <Button
                onClick={handleSubmit}
                className="flex-1 rounded-full bg-primary hover:bg-primary/90"
              >
                Post Task
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default TaskPostModal;
