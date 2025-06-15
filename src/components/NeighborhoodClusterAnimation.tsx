
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
    className={`absolute animate-pulse`}
    style={{
      top: pos.top,
      left: pos.left,
      width: boxSize,
      height: boxSize,
      zIndex: 2,
    }}
  >
    <div
      className={`${colorClass} w-full h-full rounded-2xl shadow-lg flex items-center justify-center`}
    >
      <Home className={`w-[${iconSize}px] h-[${iconSize}px] text-white`} />
    </div>
  </div>
);

export const NeighborhoodClusterAnimation = () => {
  return (
    <div
      className="absolute pointer-events-none select-none"
      style={{
        top: "120px",
        right: "80px",
        zIndex: 1,
        width: 500,
        height: 400,
      }}
    >
      {/* Soft background glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-gradient-radial from-blue-100/20 via-purple-50/10 to-transparent blur-2xl animate-pulse"></div>
      
      {/* Outer connection rings */}
      <svg
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        width="280"
        height="280"
        fill="none"
      >
        <circle
          cx="140"
          cy="140"
          r="120"
          stroke="url(#connectionGradient)"
          strokeWidth="1"
          strokeOpacity="0.2"
          strokeDasharray="6 6"
          className="animate-spin"
          style={{ animationDuration: "20s" }}
        />
        <circle
          cx="140"
          cy="140"
          r="85"
          stroke="url(#connectionGradient2)"
          strokeWidth="1"
          strokeOpacity="0.3"
          strokeDasharray="4 4"
          className="animate-spin"
          style={{ animationDirection: "reverse", animationDuration: "15s" }}
        />
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="connectionGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>

      {/* Central main home - represents you */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 flex items-center justify-center shadow-xl ring-2 ring-white/20 z-10">
        <Home className="w-8 h-8 text-white" />
      </div>

      {/* Neighbor nodes positioned around central home */}
      {neighborNode(14, nodeColors[0], { top: 90, left: 110 }, 32)}
      {neighborNode(16, nodeColors[1], { top: 160, left: 70 }, 36)}
      {neighborNode(14, nodeColors[2], { top: 240, left: 130 }, 32)}
      {neighborNode(18, nodeColors[3], { top: 170, left: 300 }, 40)}
      {neighborNode(12, nodeColors[0], { top: 110, left: 270 }, 28)}
      {neighborNode(14, nodeColors[1], { top: 280, left: 220 }, 32)}

      {/* Dynamic connection lines */}
      <svg
        className="absolute top-0 left-0 w-full h-full"
        fill="none"
      >
        {/* Lines from center to each neighbor */}
        <line
          x1="250"
          y1="200"
          x2="128"
          y2="108"
          stroke="url(#lineGradient1)"
          strokeWidth="2"
          strokeOpacity="0.4"
          strokeLinecap="round"
          className="animate-pulse"
        />
        <line
          x1="250"
          y1="200"
          x2="88"
          y2="178"
          stroke="url(#lineGradient2)"
          strokeWidth="2"
          strokeOpacity="0.4"
          strokeLinecap="round"
          className="animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
        <line
          x1="250"
          y1="200"
          x2="148"
          y2="258"
          stroke="url(#lineGradient3)"
          strokeWidth="2"
          strokeOpacity="0.4"
          strokeLinecap="round"
          className="animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <line
          x1="250"
          y1="200"
          x2="322"
          y2="192"
          stroke="url(#lineGradient4)"
          strokeWidth="2"
          strokeOpacity="0.4"
          strokeLinecap="round"
          className="animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
        
        <defs>
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="lineGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="lineGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>

      {/* Subtle floating particles */}
      <div className="absolute top-[140px] left-[180px] w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-40"></div>
      <div className="absolute top-[200px] left-[140px] w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse opacity-50" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-[220px] left-[260px] w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-30" style={{ animationDelay: "2s" }}></div>
    </div>
  );
};

export default NeighborhoodClusterAnimation;
