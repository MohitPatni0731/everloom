
import { Home } from "lucide-react";
import React from "react";

// Premium constellation colors with gradients
const nodeColors = [
  "bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600",
  "bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-600", 
  "bg-gradient-to-br from-rose-400 via-pink-500 to-red-500",
  "bg-gradient-to-br from-amber-400 via-orange-500 to-red-500",
  "bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600",
  "bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600",
];

const neighborNode = (
  iconSize: number,
  colorClass: string,
  pos: { top: number; left: number },
  boxSize = 32,
  delay = 0
) => (
  <div
    className={`absolute animate-pulse`}
    style={{
      top: pos.top,
      left: pos.left,
      width: boxSize,
      height: boxSize,
      zIndex: 2,
      animationDelay: `${delay}s`,
      animationDuration: '3s'
    }}
  >
    <div
      className={`${colorClass} w-full h-full rounded-2xl shadow-2xl flex items-center justify-center ring-2 ring-white/30 hover:ring-white/60 transition-all duration-500 hover:scale-110 cursor-pointer group`}
    >
      <Home className={`w-[${iconSize}px] h-[${iconSize}px] text-white drop-shadow-lg group-hover:scale-110 transition-transform duration-300`} />
      
      {/* Glowing aura */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/20 to-transparent animate-pulse opacity-60"></div>
      
      {/* Sparkle effects */}
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping opacity-75"></div>
      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-yellow-300 rounded-full animate-bounce opacity-80" style={{ animationDelay: `${delay + 1}s` }}></div>
    </div>
  </div>
);

export const NeighborhoodClusterAnimation = () => {
  return (
    <div
      className="absolute pointer-events-none select-none"
      style={{
        top: "160px",
        right: "80px",
        zIndex: 1,
        width: 500,
        height: 400,
      }}
    >
      {/* Multi-layered background glow with color shifts */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gradient-radial from-blue-200/30 via-purple-100/20 via-pink-100/15 to-transparent blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-gradient-radial from-emerald-200/25 via-teal-100/15 to-transparent blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full bg-gradient-radial from-rose-200/20 via-orange-100/10 to-transparent blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Dynamic orbital rings with staggered animations */}
      <svg
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        width="320"
        height="320"
        fill="none"
      >
        {/* Outer ring */}
        <circle
          cx="160"
          cy="160"
          r="140"
          stroke="url(#rainbowGradient1)"
          strokeWidth="2"
          strokeOpacity="0.4"
          strokeDasharray="8 12"
          className="animate-spin"
          style={{ animationDuration: "25s" }}
        />
        {/* Middle ring */}
        <circle
          cx="160"
          cy="160"
          r="100"
          stroke="url(#rainbowGradient2)"
          strokeWidth="2"
          strokeOpacity="0.5"
          strokeDasharray="6 8"
          className="animate-spin"
          style={{ animationDirection: "reverse", animationDuration: "20s" }}
        />
        {/* Inner ring */}
        <circle
          cx="160"
          cy="160"
          r="60"
          stroke="url(#rainbowGradient3)"
          strokeWidth="1.5"
          strokeOpacity="0.6"
          strokeDasharray="4 6"
          className="animate-spin"
          style={{ animationDuration: "15s" }}
        />
        
        <defs>
          <linearGradient id="rainbowGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
            <stop offset="25%" stopColor="#8b5cf6" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#ec4899" stopOpacity="0.4" />
            <stop offset="75%" stopColor="#f59e0b" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="rainbowGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.5" />
            <stop offset="33%" stopColor="#06b6d4" stopOpacity="0.6" />
            <stop offset="66%" stopColor="#8b5cf6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="rainbowGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.6" />
          </linearGradient>
        </defs>
      </svg>

      {/* Central home with premium effects */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center shadow-2xl ring-4 ring-white/30 z-10 group hover:ring-white/60 transition-all duration-500 cursor-pointer">
        <Home className="w-10 h-10 text-white drop-shadow-xl group-hover:scale-110 transition-transform duration-300" />
        
        {/* Central glow effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white/10 to-transparent animate-pulse"></div>
        
        {/* Energy pulses */}
        <div className="absolute inset-0 rounded-3xl border-2 border-white/20 animate-ping"></div>
        <div className="absolute inset-0 rounded-3xl border border-blue-400/30 animate-ping" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Enhanced neighbor nodes with staggered effects */}
      {neighborNode(14, nodeColors[0], { top: 70, left: 120 }, 36, 0)}
      {neighborNode(16, nodeColors[1], { top: 140, left: 50 }, 40, 0.5)}
      {neighborNode(14, nodeColors[2], { top: 260, left: 110 }, 34, 1)}
      {neighborNode(18, nodeColors[3], { top: 150, left: 320 }, 44, 1.5)}
      {neighborNode(16, nodeColors[4], { top: 90, left: 280 }, 38, 2)}
      {neighborNode(14, nodeColors[5], { top: 290, left: 240 }, 36, 2.5)}
      {neighborNode(12, nodeColors[0], { top: 40, left: 200 }, 32, 3)}
      {neighborNode(15, nodeColors[1], { top: 220, left: 350 }, 38, 3.5)}

      {/* Dynamic morphing connection lines */}
      <svg
        className="absolute top-0 left-0 w-full h-full"
        fill="none"
      >
        {/* Animated connection lines with gradient effects */}
        <path
          d="M250 200 Q180 120 138 88"
          stroke="url(#connectionGradient1)"
          strokeWidth="3"
          strokeOpacity="0.7"
          strokeLinecap="round"
          className="animate-pulse"
          fill="none"
        />
        <path
          d="M250 200 Q150 150 70 158"
          stroke="url(#connectionGradient2)"
          strokeWidth="3"
          strokeOpacity="0.7"
          strokeLinecap="round"
          className="animate-pulse"
          style={{ animationDelay: "0.8s" }}
          fill="none"
        />
        <path
          d="M250 200 Q180 250 128 278"
          stroke="url(#connectionGradient3)"
          strokeWidth="3"
          strokeOpacity="0.7"
          strokeLinecap="round"
          className="animate-pulse"
          style={{ animationDelay: "1.6s" }}
          fill="none"
        />
        <path
          d="M250 200 Q285 175 342 168"
          stroke="url(#connectionGradient4)"
          strokeWidth="3"
          strokeOpacity="0.7"
          strokeLinecap="round"
          className="animate-pulse"
          style={{ animationDelay: "2.4s" }}
          fill="none"
        />
        
        <defs>
          <linearGradient id="connectionGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="connectionGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="connectionGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="connectionGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#ec4899" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>

      {/* Enhanced floating particles with various effects */}
      <div className="absolute top-[120px] left-[160px] w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full animate-bounce opacity-70 shadow-lg"></div>
      <div className="absolute top-[180px] left-[120px] w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-300 rounded-full animate-ping opacity-60" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-[240px] left-[280px] w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-300 rounded-full animate-pulse opacity-50 shadow-xl" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-[100px] left-[240px] w-2.5 h-2.5 bg-gradient-to-r from-yellow-400 to-orange-300 rounded-full animate-bounce opacity-65 shadow-md" style={{ animationDelay: "0.5s" }}></div>
      <div className="absolute top-[200px] left-[320px] w-3 h-3 bg-gradient-to-r from-rose-400 to-pink-300 rounded-full animate-ping opacity-55" style={{ animationDelay: "1.5s" }}></div>
      <div className="absolute top-[160px] left-[80px] w-2 h-2 bg-gradient-to-r from-indigo-400 to-blue-300 rounded-full animate-pulse opacity-75 shadow-lg" style={{ animationDelay: "2.5s" }}></div>
      
      {/* Magical sparkle trail effects */}
      <div className="absolute top-[140px] left-[200px] w-1 h-1 bg-white rounded-full animate-ping opacity-80"></div>
      <div className="absolute top-[190px] left-[180px] w-1.5 h-1.5 bg-yellow-200 rounded-full animate-bounce opacity-70" style={{ animationDelay: "0.3s" }}></div>
      <div className="absolute top-[170px] left-[260px] w-1 h-1 bg-cyan-200 rounded-full animate-pulse opacity-60" style={{ animationDelay: "0.8s" }}></div>
    </div>
  );
};

export default NeighborhoodClusterAnimation;
