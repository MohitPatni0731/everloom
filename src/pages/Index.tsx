
import { useState } from "react";
import { Plus, MapPin, MessageCircle, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import TaskCard from "@/components/TaskCard";
import TaskPostModal from "@/components/TaskPostModal";
import RadiusSelector from "@/components/RadiusSelector";
import UserProfile from "@/components/UserProfile";

const Index = () => {
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [showRadiusSelector, setShowRadiusSelector] = useState(false);
  const [currentRadius, setCurrentRadius] = useState("50m");
  const [activeFilter, setActiveFilter] = useState("all");

  const mockTasks = [
    {
      id: 1,
      title: "Borrow a ladder for 30 minutes",
      description: "Need to change a light bulb in my hallway ceiling",
      distance: "2 doors down",
      timeAgo: "5 min ago",
      exchange: "free",
      duration: "30 min",
      requester: {
        name: "Sarah M.",
        verified: true,
        building: "Building A"
      }
    },
    {
      id: 2,
      title: "Walk my dog while I'm in a meeting",
      description: "Quick 10-minute walk around the block for Luna (friendly golden retriever)",
      distance: "Same floor",
      timeAgo: "12 min ago",
      exchange: "$8",
      duration: "15 min",
      requester: {
        name: "Marcus T.",
        verified: true,
        building: "Building A"
      }
    },
    {
      id: 3,
      title: "Share WiFi password",
      description: "New resident, internet won't be set up until tomorrow",
      distance: "Apt 4B",
      timeAgo: "1 hour ago",
      exchange: "coffee",
      duration: "immediate",
      requester: {
        name: "Emma L.",
        verified: false,
        building: "Building A"
      }
    }
  ];

  const filters = [
    { id: "all", label: "All Tasks", count: 12 },
    { id: "immediate", label: "Immediate", count: 3 },
    { id: "today", label: "Today", count: 7 },
    { id: "free", label: "Free", count: 4 }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-light tracking-tight text-foreground">
                Radius
              </h1>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowRadiusSelector(true)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <MapPin className="w-4 h-4 mr-2" />
                {currentRadius} radius
              </Button>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Users className="w-4 h-4" />
                <span>23 neighbors online</span>
              </div>
              <UserProfile />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-4xl font-light tracking-tight mb-4 text-foreground">
            Your neighborhood,
            <br />
            <span className="text-muted-foreground">simplified.</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Connect with neighbors for life's small moments. Borrow, share, and help within your radius.
          </p>
          
          <Button
            onClick={() => setShowTaskModal(true)}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full shadow-sm transition-all duration-200 hover:shadow-md"
          >
            <Plus className="w-5 h-5 mr-2" />
            Post a Task
          </Button>
        </div>

        {/* Filters */}
        <div className="flex items-center space-x-1 mb-8 p-1 bg-muted/30 rounded-full w-fit mx-auto">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveFilter(filter.id)}
              className={`rounded-full px-4 py-2 transition-all duration-200 ${
                activeFilter === filter.id
                  ? "bg-background shadow-sm text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {filter.label}
              <Badge variant="secondary" className="ml-2 text-xs bg-muted text-muted-foreground">
                {filter.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Tasks Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {mockTasks.map((task, index) => (
            <TaskCard
              key={task.id}
              task={task}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            />
          ))}
        </div>

        {/* Empty State Encouragement */}
        <div className="text-center py-12 border-t border-border/40">
          <Clock className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
          <p className="text-muted-foreground mb-4">
            That's all for now in your radius.
          </p>
          <Button
            variant="outline"
            onClick={() => setShowTaskModal(true)}
            className="rounded-full"
          >
            Be the first to post something new
          </Button>
        </div>
      </main>

      {/* Modals */}
      <TaskPostModal open={showTaskModal} onOpenChange={setShowTaskModal} />
      <RadiusSelector 
        open={showRadiusSelector} 
        onOpenChange={setShowRadiusSelector}
        currentRadius={currentRadius}
        onRadiusChange={setCurrentRadius}
      />
    </div>
  );
};

export default Index;
