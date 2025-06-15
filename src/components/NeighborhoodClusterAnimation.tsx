
import { Home } from "lucide-react";
import React from "react";

// Modern minimalist constellation cluster colors
const nodeColors = [
  "bg-gradient-to-br from-blue-500 to-blue-600",
  "bg-gradient-to-br from-green-500 to-green-600", 
  "bg-gradient-to-br from-purple-500 to-purple-600",
  "bg-gradient-to-br from-orange-500 to-orange-600",
];

const neighborNode = (
  iconSize: number,
  colorClass: string,
  pos: { top: number; left: number },
  boxSize = 32
) => (
  <div
    className={`absolute animate-pulse-luxury`}
    style={{
      top: pos.top,
      left: pos.left,
      width: boxSize,
      height: boxSize,
      zIndex: 2,
    }}
  >
    <div
      className={`${colorClass} w-full h-full rounded-2xl shadow-xl flex items-center justify-center`}
    >
      <Home className={`w-[${iconSize}px] h-[${iconSize}px] text-white`} />
    </div>
    {/* Connection pulse effect */}
    <div className="absolute inset-0 rounded-2xl bg-white/20 animate-ping"></div>
  </div>
);

export const NeighborhoodClusterAnimation = () => {
  return (
    <div
      className="absolute pointer-events-none select-none"
      style={{
        top: "50px",
        right: "80px",
        zIndex: 1,
        width: 500,
        height: 400,
      }}
    >
      {/* Soft background glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gradient-radial from-blue-100/30 via-purple-50/20 to-transparent blur-3xl animate-pulse-subtle"></div>
      
      {/* Outer connection rings */}
      <svg
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        width="320"
        height="320"
        fill="none"
      >
        <circle
          cx="160"
          cy="160"
          r="140"
          stroke="url(#connectionGradient)"
          strokeWidth="2"
          strokeOpacity="0.3"
          strokeDasharray="8 8"
          className="animate-spin-gentle"
        />
        <circle
          cx="160"
          cy="160"
          r="100"
          stroke="url(#connectionGradient2)"
          strokeWidth="2"
          strokeOpacity="0.4"
          strokeDasharray="6 6"
          className="animate-spin-gentle"
          style={{ animationDirection: "reverse", animationDuration: "12s" }}
        />
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="connectionGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </svg>

      {/* Central main home - represents you */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 flex items-center justify-center shadow-2xl ring-4 ring-white/40 z-10">
        <Home className="w-10 h-10 text-white" />
        {/* Central pulse */}
        <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-blue-400/20 to-purple-400/20 animate-ping"></div>
        <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-300/30 to-purple-300/30 animate-pulse-luxury"></div>
      </div>

      {/* Neighbor nodes positioned around central home */}
      {neighborNode(16, nodeColors[0], { top: 80, left: 120 }, 36)}
      {neighborNode(18, nodeColors[1], { top: 160, left: 60 }, 40)}
      {neighborNode(16, nodeColors[2], { top: 260, left: 140 }, 36)}
      {neighborNode(20, nodeColors[3], { top: 180, left: 320 }, 44)}
      {neighborNode(14, nodeColors[0], { top: 100, left: 280 }, 32)}
      {neighborNode(16, nodeColors[1], { top: 300, left: 240 }, 36)}

      {/* Dynamic connection lines */}
      <svg
        className="absolute top-0 left-0 w-full h-full"
        fill="none"
      >
        {/* Lines from center to each neighbor */}
        <line
          x1="250"
          y1="200"
          x2="138"
          y2="98"
          stroke="url(#lineGradient1)"
          strokeWidth="3"
          strokeOpacity="0.6"
          strokeLinecap="round"
          className="animate-connection-line"
        />
        <line
          x1="250"
          y1="200"
          x2="80"
          y2="180"
          stroke="url(#lineGradient2)"
          strokeWidth="3"
          strokeOpacity="0.6"
          strokeLinecap="round"
          className="animate-connection-line-delayed"
        />
        <line
          x1="250"
          y1="200"
          x2="158"
          y2="278"
          stroke="url(#lineGradient3)"
          strokeWidth="3"
          strokeOpacity="0.6"
          strokeLinecap="round"
          className="animate-connection-line"
          style={{ animationDelay: "1s" }}
        />
        <line
          x1="250"
          y1="200"
          x2="342"
          y2="202"
          stroke="url(#lineGradient4)"
          strokeWidth="3"
          strokeOpacity="0.6"
          strokeLinecap="round"
          className="animate-connection-line-delayed"
          style={{ animationDelay: "0.5s" }}
        />
        
        <defs>
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="lineGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="lineGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating connection particles */}
      <div className="absolute top-[120px] left-[200px] w-3 h-3 bg-blue-400 rounded-full animate-bounce-slow opacity-60"></div>
      <div className="absolute top-[180px] left-[160px] w-2 h-2 bg-green-400 rounded-full animate-bounce-slow opacity-70" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-[240px] left-[280px] w-3 h-3 bg-purple-400 rounded-full animate-bounce-slow opacity-50" style={{ animationDelay: "2s" }}></div>
    </div>
  );
};

export default NeighborhoodClusterAnimation;
