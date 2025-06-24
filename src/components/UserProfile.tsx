import { useState } from "react";
import { User, Settings, LogOut, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { useUser } from "@clerk/clerk-react";

const UserProfile = () => {
  const { user } = useUser();

  if (!user) return null;

  // Get user's display name
  const displayName = user.fullName || 
                     user.firstName || 
                     user.primaryEmailAddress?.emailAddress?.split('@')[0] || 
                     'User';

  // Get user's initials for avatar
  const initials = user.fullName 
    ? user.fullName.split(' ').map(n => n[0]).join('').toUpperCase()
    : user.firstName 
    ? user.firstName[0].toUpperCase()
    : user.primaryEmailAddress?.emailAddress?.[0].toUpperCase() || 'U';

  // User location/building info (placeholder - can be enhanced later)
  const userLocation = "Location not set";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-10 w-10 rounded-full p-0">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-sm font-medium text-primary">
              {initials}
            </span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent align="end" className="w-64 bg-background border-border/40 shadow-xl">
        <DropdownMenuLabel className="pb-3">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-sm font-medium text-primary">
                {initials}
              </span>
            </div>
            <div>
              <div className="flex items-center space-x-1">
                <span className="font-medium text-foreground">{displayName}</span>
                {user.hasVerifiedEmailAddress && (
                  <CheckCircle className="w-4 h-4 text-green-600" />
                )}
              </div>
              <div className="text-xs text-muted-foreground">{userLocation}</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 mt-3 pt-3 border-t border-border/40">
            <div className="text-center">
              <div className="text-sm font-medium text-foreground">0</div>
              <div className="text-xs text-muted-foreground">Tasks</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium text-foreground">--</div>
              <div className="text-xs text-muted-foreground">Rating</div>
            </div>
            {user.hasVerifiedEmailAddress && (
              <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200 text-xs">
                Verified
              </Badge>
            )}
          </div>
        </DropdownMenuLabel>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem className="cursor-pointer">
          <User className="w-4 h-4 mr-2" />
          Profile
        </DropdownMenuItem>
        
        <DropdownMenuItem className="cursor-pointer">
          <Settings className="w-4 h-4 mr-2" />
          Settings
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem className="cursor-pointer text-destructive">
          <LogOut className="w-4 h-4 mr-2" />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserProfile;
