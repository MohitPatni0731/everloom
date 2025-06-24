import { useState } from "react";
import { X, Clock, DollarSign, Gift, ArrowRight, Loader2, AlertTriangle } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLocalTasks, TaskFormData } from "@/hooks/useLocalTasks";
import { toast } from "sonner";

interface TaskPostModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TaskPostModal = ({ open, onOpenChange }: TaskPostModalProps) => {
  const { createTask, refreshTasks } = useLocalTasks();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<TaskFormData>({
    title: "",
    description: "",
    category: "general",
    duration: "",
    exchange: "free",
    urgency: "medium",
    phone: "",
    address: "",
  });
  const [amount, setAmount] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const categoryOptions = [
    { id: "help_needed", label: "Need Help", description: "Ask for assistance" },
    { id: "offering_help", label: "Offering Help", description: "Offer your services" },
    { id: "borrow", label: "Need to Borrow", description: "Borrow items temporarily" },
    { id: "lend", label: "Available to Lend", description: "Lend your items" },
    { id: "general", label: "General", description: "Other neighborhood needs" },
  ];

  const exchangeOptions = [
    { id: "free", label: "Free / Goodwill", icon: Gift, color: "green", description: "No payment expected" },
    { id: "paid", label: "Small Payment", icon: DollarSign, color: "blue", description: "Fair compensation" },
    { id: "trade", label: "Trade / Barter", icon: ArrowRight, color: "amber", description: "Exchange services/items" }
  ];

  const urgencyOptions = [
    { id: "low", label: "No Rush", color: "gray" },
    { id: "medium", label: "This Week", color: "yellow" },
    { id: "high", label: "Urgent", color: "red" },
  ];

  const validateStep1 = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.title.trim()) {
      newErrors.title = "Please describe what you need";
    }
    if (!formData.description.trim()) {
      newErrors.description = "Please add some details";
    }
    if (!formData.duration.trim()) {
      newErrors.duration = "Please specify the duration";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required for contact";
    } else if (formData.phone.replace(/[\s\-\(\)]/g, '').length < 10) {
      newErrors.phone = "Please enter a valid phone number";
    }
    // Address is optional - will use location address if not provided
    // if (!formData.address.trim()) {
    //   newErrors.address = "Address is required for helpers to find you";
    // }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (formData.exchange === "paid" && (!amount || !amount.trim())) {
      newErrors.amount = "Please specify the amount";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleSubmit = async () => {
    if (!validateStep2()) {
      return;
    }

    setLoading(true);

    const taskData: TaskFormData = {
      ...formData,
      amount: formData.exchange === "paid" ? parseFloat(amount) : undefined,
    };

    const task = await createTask(taskData);
    
    if (task) {
      // Reset form immediately - UI already updated by createTask optimistic update
      setFormData({
        title: "",
        description: "",
        category: "general",
        duration: "",
        exchange: "free",
        urgency: "medium",
        phone: "",
        address: "",
      });
      setAmount("");
      setErrors({});
      setStep(1);
      onOpenChange(false);
      // NO MORE refreshTasks() call - state already updated immediately
    }

    setLoading(false);
  };

  const resetModal = () => {
    setStep(1);
    setFormData({
      title: "",
      description: "",
      category: "general",
      duration: "",
      exchange: "free",
      urgency: "medium",
      phone: "",
      address: "",
    });
    setAmount("");
    setErrors({});
  };

  const handleClose = () => {
    resetModal();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-md mx-auto bg-background border-border/40 shadow-xl">
        <DialogHeader className="text-center pb-6">
          <DialogTitle className="text-2xl font-light tracking-tight">
            Post a Task
          </DialogTitle>
          <p className="text-sm text-muted-foreground">
            Connect with your neighbors
          </p>
          <div className="flex justify-center mt-4">
            <div className="flex space-x-2">
              <div className={`w-2 h-2 rounded-full transition-colors ${step >= 1 ? 'bg-primary' : 'bg-muted'}`} />
              <div className={`w-2 h-2 rounded-full transition-colors ${step >= 2 ? 'bg-primary' : 'bg-muted'}`} />
            </div>
          </div>
        </DialogHeader>

        {step === 1 && (
          <div className="space-y-6">
            {/* Category */}
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Category
              </label>
              <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value as any })}>
                <SelectTrigger className="bg-muted/20 border-border/40">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {categoryOptions.map((option) => (
                    <SelectItem key={option.id} value={option.id}>
                      <div>
                        <div className="font-medium">{option.label}</div>
                        <div className="text-xs text-muted-foreground">{option.description}</div>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Task Title */}
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                What do you need?
              </label>
              <Input
                placeholder="e.g., Borrow a ladder for 30 minutes"
                value={formData.title}
                onChange={(e) => {
                  setFormData({ ...formData, title: e.target.value });
                  if (errors.title) setErrors({ ...errors, title: "" });
                }}
                className={`bg-muted/20 border-border/40 focus:border-primary/40 ${errors.title ? 'border-red-300' : ''}`}
              />
              {errors.title && (
                <p className="text-red-500 text-xs mt-1 flex items-center">
                  <AlertTriangle className="w-3 h-3 mr-1" />
                  {errors.title}
                </p>
              )}
            </div>

            {/* Description */}
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Brief details
              </label>
              <Textarea
                placeholder="Add any helpful context..."
                value={formData.description}
                onChange={(e) => {
                  setFormData({ ...formData, description: e.target.value });
                  if (errors.description) setErrors({ ...errors, description: "" });
                }}
                className={`bg-muted/20 border-border/40 focus:border-primary/40 min-h-[80px] resize-none ${errors.description ? 'border-red-300' : ''}`}
              />
              {errors.description && (
                <p className="text-red-500 text-xs mt-1 flex items-center">
                  <AlertTriangle className="w-3 h-3 mr-1" />
                  {errors.description}
                </p>
              )}
            </div>

            {/* Duration */}
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                How long?
              </label>
              <Input
                placeholder="e.g., 30 minutes, 1 hour, immediate"
                value={formData.duration}
                onChange={(e) => {
                  setFormData({ ...formData, duration: e.target.value });
                  if (errors.duration) setErrors({ ...errors, duration: "" });
                }}
                className={`bg-muted/20 border-border/40 focus:border-primary/40 ${errors.duration ? 'border-red-300' : ''}`}
              />
              {errors.duration && (
                <p className="text-red-500 text-xs mt-1 flex items-center">
                  <AlertTriangle className="w-3 h-3 mr-1" />
                  {errors.duration}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Your phone number <span className="text-red-400">*</span>
              </label>
              <Input
                type="tel"
                placeholder="e.g., +1 (555) 123-4567"
                value={formData.phone}
                onChange={(e) => {
                  setFormData({ ...formData, phone: e.target.value });
                  if (errors.phone) setErrors({ ...errors, phone: "" });
                }}
                className={`bg-muted/20 border-border/40 focus:border-primary/40 ${errors.phone ? 'border-red-300' : ''}`}
              />
              <p className="text-xs text-muted-foreground mt-1">
                Only visible to neighbors who offer help
              </p>
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1 flex items-center">
                  <AlertTriangle className="w-3 h-3 mr-1" />
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Address */}
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Your address <span className="text-xs text-muted-foreground">(optional)</span>
              </label>
              <Input
                placeholder="e.g., 123 Main Street, Apartment 2B"
                value={formData.address}
                onChange={(e) => {
                  setFormData({ ...formData, address: e.target.value });
                  if (errors.address) setErrors({ ...errors, address: "" });
                }}
                className={`bg-muted/20 border-border/40 focus:border-primary/40 ${errors.address ? 'border-red-300' : ''}`}
              />
              <p className="text-xs text-muted-foreground mt-1">
                Only visible to neighbors who offer help on active tasks
              </p>
              {errors.address && (
                <p className="text-red-500 text-xs mt-1 flex items-center">
                  <AlertTriangle className="w-3 h-3 mr-1" />
                  {errors.address}
                </p>
              )}
            </div>

            {/* Urgency */}
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                How urgent?
              </label>
              <div className="grid grid-cols-3 gap-2">
                {urgencyOptions.map((option) => (
                  <Button
                    key={option.id}
                    type="button"
                    variant={formData.urgency === option.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFormData({ ...formData, urgency: option.id as any })}
                    className="text-xs"
                  >
                    {option.label}
                  </Button>
                ))}
              </div>
            </div>

            <Button
              onClick={handleContinue}
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
                      onClick={() => setFormData({ ...formData, exchange: option.id as any })}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                        isSelected
                          ? "border-primary bg-primary/10"
                          : "border-border/40 bg-muted/20 hover:border-border/60"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <option.icon className={`w-5 h-5 ${
                          isSelected ? "text-primary" : "text-muted-foreground"
                        }`} />
                        <div>
                          <span className={`font-medium block ${
                            isSelected ? "text-primary" : "text-foreground"
                          }`}>
                            {option.label}
                          </span>
                          <span className="text-xs text-muted-foreground">{option.description}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {formData.exchange === "paid" && (
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Suggested amount ($)
                </label>
                <Input
                  type="number"
                  placeholder="5.00"
                  value={amount}
                  onChange={(e) => {
                    setAmount(e.target.value);
                    if (errors.amount) setErrors({ ...errors, amount: "" });
                  }}
                  className={`bg-muted/20 border-border/40 focus:border-primary/40 ${errors.amount ? 'border-red-300' : ''}`}
                />
                {errors.amount && (
                  <p className="text-red-500 text-xs mt-1 flex items-center">
                    <AlertTriangle className="w-3 h-3 mr-1" />
                    {errors.amount}
                  </p>
                )}
              </div>
            )}

            <div className="flex space-x-3">
              <Button
                variant="outline"
                onClick={() => setStep(1)}
                className="flex-1 rounded-full"
                disabled={loading}
              >
                Back
              </Button>
              <Button
                onClick={handleSubmit}
                disabled={loading}
                className="flex-1 rounded-full bg-primary hover:bg-primary/90"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Posting...
                  </>
                ) : (
                  "Post Task"
                )}
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default TaskPostModal;
