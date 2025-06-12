
import { Clock, MapPin, MessageCircle, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TaskCardProps {
  task: {
    id: number;
    title: string;
    description: string;
    distance: string;
    timeAgo: string;
    exchange: string;
    duration: string;
    requester: {
      name: string;
      verified: boolean;
      building: string;
    };
  };
  className?: string;
  style?: React.CSSProperties;
}

const TaskCard = ({ task, className, style }: TaskCardProps) => {
  const getExchangeBadge = (exchange: string) => {
    if (exchange === "free") {
      return (
        <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
          Free
        </Badge>
      );
    }
    if (exchange.startsWith("$")) {
      return (
        <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
          {exchange}
        </Badge>
      );
    }
    return (
      <Badge variant="secondary" className="bg-amber-50 text-amber-700 border-amber-200">
        Trade for {exchange}
      </Badge>
    );
  };

  return (
    <Card 
      className={cn(
        "p-6 hover:shadow-md transition-all duration-300 cursor-pointer border-border/40 hover:border-border/60 group bg-card/50 backdrop-blur-sm",
        className
      )}
      style={style}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-sm font-medium text-primary">
              {task.requester.name.charAt(0)}
            </span>
          </div>
          <div>
            <div className="flex items-center space-x-1">
              <span className="text-sm font-medium text-foreground">
                {task.requester.name}
              </span>
              {task.requester.verified && (
                <CheckCircle className="w-3 h-3 text-green-600" />
              )}
            </div>
            <span className="text-xs text-muted-foreground">
              {task.requester.building}
            </span>
          </div>
        </div>
        {getExchangeBadge(task.exchange)}
      </div>

      {/* Content */}
      <div className="mb-4">
        <h3 className="font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
          {task.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {task.description}
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <MapPin className="w-3 h-3" />
            <span>{task.distance}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-3 h-3" />
            <span>{task.duration}</span>
          </div>
        </div>
        <span>{task.timeAgo}</span>
      </div>

      {/* Action Button */}
      <Button 
        size="sm" 
        className="w-full mt-4 rounded-full bg-primary/5 hover:bg-primary/10 text-primary border-primary/20 transition-all duration-200"
        variant="outline"
      >
        <MessageCircle className="w-4 h-4 mr-2" />
        Offer Help
      </Button>
    </Card>
  );
};

export default TaskCard;
