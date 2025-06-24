import { Clock, MapPin, MessageCircle, CheckCircle, User, Phone, MoreVertical, Home } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/clerk-react";
import { useState } from "react";
import { toast } from "sonner";
import { Task } from "@/lib/supabase";
import { useLocalTasks } from "@/hooks/useLocalTasks";

interface TaskCardProps {
  task: Task;
  distance?: number;
  className?: string;
  style?: React.CSSProperties;
}

const TaskCard = ({ task, distance, className, style }: TaskCardProps) => {
  const { user } = useUser();
  const { updateTaskStatus, respondToTask, getContactInfo } = useLocalTasks();
  const [contactInfo, setContactInfo] = useState<{phone: string, address: string} | null>(null);
  const [showingContact, setShowingContact] = useState(false);
  
  const isMyTask = user && task.created_by_user_id === user.id;
  const hasUserResponded = user && task.respondents.includes(user.id);

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffHours / 24);

    if (diffDays > 0) {
      return `${diffDays}d ago`;
    } else if (diffHours > 0) {
      return `${diffHours}h ago`;
    } else {
      return "Just now";
    }
  };

  const getExchangeBadge = (exchange: string, amount?: number) => {
    if (exchange === "free") {
      return (
        <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
          Free
        </Badge>
      );
    }
    if (exchange === "paid" && amount) {
      return (
        <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
          ${amount}
        </Badge>
      );
    }
    if (exchange === "trade") {
      return (
        <Badge variant="secondary" className="bg-amber-50 text-amber-700 border-amber-200">
          Trade
        </Badge>
      );
    }
    return (
      <Badge variant="secondary" className="bg-gray-50 text-gray-700 border-gray-200">
        {exchange}
      </Badge>
    );
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case 'in_progress':
        return <Badge className="bg-yellow-100 text-yellow-800">In Progress</Badge>;
      case 'completed':
        return <Badge className="bg-blue-100 text-blue-800">Completed</Badge>;
      case 'cancelled':
        return <Badge className="bg-red-100 text-red-800">Cancelled</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const handleStatusChange = async (newStatus: string) => {
    try {
      await updateTaskStatus(task.id, newStatus as Task['status']);
      toast.success(`Task status updated to ${newStatus}`);
    } catch (error) {
      toast.error("Failed to update task status");
    }
  };

  const handleOfferHelp = async () => {
    if (!user) return;
    
    try {
      await respondToTask(task.id);
      toast.success("You offered to help!");
    } catch (error) {
      toast.error("Failed to offer help");
    }
  };

  const handleShowContact = async () => {
    if (!user || !hasUserResponded) return;
    
    try {
      const contact = await getContactInfo(task.id);
      if (contact) {
        setContactInfo(contact);
        setShowingContact(true);
      }
    } catch (error) {
      toast.error("Unable to get contact information");
    }
  };

  const canOfferHelp = !isMyTask && task.status === 'active' && !hasUserResponded;
  const canSeeContact = !isMyTask && hasUserResponded && task.status === 'active';

  return (
    <Card 
      className={cn(
        "p-4 hover:shadow-md transition-all duration-300 border-border/40 hover:border-border/60 group bg-card/50 backdrop-blur-sm aspect-square flex flex-col",
        isMyTask && "ring-2 ring-blue-500/20 bg-blue-50/30",
        task.status !== 'active' && "opacity-75",
        className
      )}
      style={style}
    >
      {/* Header - Compact */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2 flex-1 min-w-0">
          <div className={cn(
            "w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0",
            isMyTask ? "bg-blue-500 text-white" : "bg-primary/10"
          )}>
            {isMyTask ? (
              <User className="w-3 h-3" />
            ) : (
              <span className="text-xs font-medium text-primary">
                {task.created_by_name.charAt(0)}
              </span>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-1">
              <span className="text-xs font-medium text-foreground truncate">
                {task.created_by_name}
              </span>
              {task.created_by_verified && (
                <CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0" />
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-1 items-end">
          {getStatusBadge(task.status)}
          {getExchangeBadge(task.exchange, task.amount)}
        </div>
      </div>

      {/* Content - Expandable */}
      <div className="flex-1 mb-3">
        <h3 className="font-medium text-sm text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {task.title}
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
          {task.description}
        </p>
      </div>

      {/* Footer Info */}
      <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
        <div className="flex items-center space-x-2">
          {distance && (
            <div className="flex items-center space-x-1">
              <MapPin className="w-3 h-3" />
              <span>{distance.toFixed(1)}mi</span>
            </div>
          )}
          <div className="flex items-center space-x-1">
            <Clock className="w-3 h-3" />
            <span>{task.duration}</span>
          </div>
        </div>
        <span>{formatTimeAgo(task.created_at)}</span>
      </div>

      {/* Actions - Bottom */}
      <div className="mt-auto">
        {isMyTask ? (
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Select value={task.status} onValueChange={handleStatusChange}>
                <SelectTrigger className="flex-1 h-8 text-xs">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="in_progress">In Progress</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
              {task.respondents.length > 0 && (
                <Badge variant="outline" className="text-xs px-2 py-1">
                  {task.respondents.length}
                </Badge>
              )}
            </div>
            <Badge variant="secondary" className="w-full justify-center bg-blue-100 text-blue-700 text-xs py-1">
              My Task
            </Badge>
          </div>
        ) : (
          <div className="space-y-2">
            {canOfferHelp && (
              <Button 
                size="sm" 
                className="w-full h-8 rounded-full bg-primary/5 hover:bg-primary/10 text-primary border-primary/20 transition-all duration-200 text-xs"
                variant="outline"
                onClick={handleOfferHelp}
              >
                <MessageCircle className="w-3 h-3 mr-1" />
                Offer Help
              </Button>
            )}
            
            {hasUserResponded && task.status === 'active' && (
              <div className="space-y-2">
                <Badge variant="secondary" className="w-full justify-center text-xs py-1">
                  You offered to help
                </Badge>
                {canSeeContact && (
                  <div className="space-y-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full h-8 rounded-full text-xs"
                      onClick={handleShowContact}
                    >
                      <Phone className="w-3 h-3 mr-1" />
                      {showingContact && contactInfo ? "Contact Info" : "Get Contact"}
                    </Button>
                    
                    {showingContact && contactInfo && (
                      <div className="p-2 bg-muted/20 rounded border">
                        <div className="flex items-center space-x-1 text-xs mb-1">
                          <Phone className="w-3 h-3 text-primary" />
                          <span className="font-mono text-primary">{contactInfo.phone}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-xs">
                          <Home className="w-3 h-3 text-primary" />
                          <span className="text-primary truncate">{contactInfo.address}</span>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
            
            {task.status !== 'active' && (
              <Badge variant="secondary" className="w-full justify-center text-xs py-2 opacity-60">
                {task.status === 'in_progress' ? 'Task in progress' : 
                 task.status === 'completed' ? 'Task completed' : 'Task closed'}
              </Badge>
            )}
          </div>
        )}
      </div>
    </Card>
  );
};

export default TaskCard;
