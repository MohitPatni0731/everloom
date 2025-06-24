import { useUser } from "@clerk/clerk-react";
import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const WelcomeCard = () => {
  const { user } = useUser();

  if (!user) return null;

  return (
    <Card className="bg-gradient-to-r from-gray-50 to-white border-gray-200/50 p-6 mb-8">
      <div className="flex items-center space-x-3">
        <Sparkles className="w-6 h-6 text-yellow-500" />
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            Welcome to <span className="font-bold text-black">EVERLOOM</span>, neighbor!
          </h3>
          <p className="text-gray-600">
            You're now connected to your neighborhood community. Start by exploring what your neighbors need help with.
          </p>
        </div>
      </div>
    </Card>
  );
};

export default WelcomeCard; 