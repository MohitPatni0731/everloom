import { UserProfile } from "@clerk/clerk-react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const UserProfilePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Navigation Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-100/50 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate('/dashboard')}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Dashboard</span>
              </Button>
            </div>
            <div className="flex items-center space-x-3">
              <img 
                src="/logo.png" 
                alt="EVERLOOM Logo" 
                className="w-10 h-10 filter contrast-125 brightness-110"
              />
              <h1 className="text-2xl font-medium italic tracking-[0.02em] bg-gradient-to-r from-gray-900 via-gray-600 to-gray-800 bg-clip-text text-transparent" style={{ fontFamily: "'Cormorant Garamond', serif", textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
                everloom
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Account Settings</h2>
            <p className="text-gray-600">Manage your profile and account preferences</p>
          </div>
          <UserProfile 
            appearance={{
              elements: {
                rootBox: "mx-auto",
                card: "shadow-2xl border-0 bg-white/80 backdrop-blur-sm",
                navbar: "bg-gray-50/80",
                navbarButton: "text-gray-700 hover:text-gray-900",
                navbarButtonIcon: "text-gray-600",
                headerTitle: "text-xl font-bold text-gray-900",
                headerSubtitle: "text-gray-600",
                formButtonPrimary: "bg-gray-900 hover:bg-gray-800 transition-all duration-300"
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage; 