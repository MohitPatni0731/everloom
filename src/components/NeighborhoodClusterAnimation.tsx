
import { Home } from "lucide-react";
import React from "react";

// Elegant monochromatic colors
const nodeColors = [
  "bg-gradient-to-br from-slate-300 via-slate-400 to-slate-500",
  "bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500", 
  "bg-gradient-to-br from-zinc-300 via-zinc-400 to-zinc-500",
  "bg-gradient-to-br from-stone-300 via-stone-400 to-stone-500",
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
      animationDuration: '4s'
    }}
  >
    <div
      className={`${colorClass} w-full h-full rounded-xl shadow-lg flex items-center justify-center ring-1 ring-white/20 hover:ring-white/40 transition-all duration-500 hover:scale-110 cursor-pointer group`}
    >
      <Home className={`w-[${iconSize}px] h-[${iconSize}px] text-white drop-shadow-sm group-hover:scale-110 transition-transform duration-300`} />
      
      {/* Subtle glow */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/10 to-transparent opacity-40"></div>
    </div>
  </div>
);

export const NeighborhoodClusterAnimation = () => {
  return (
    <div
      className="absolute pointer-events-none select-none"
      style={{
        top: "200px",
        right: "80px",
        zIndex: 1,
        width: 400,
        height: 350,
      }}
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-gradient-radial from-gray-200/20 via-gray-100/10 to-transparent blur-2xl"></div>
      
      {/* Simple orbital ring */}
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
          stroke="url(#elegantGradient)"
          strokeWidth="1"
          strokeOpacity="0.3"
          strokeDasharray="4 8"
          className="animate-spin"
          style={{ animationDuration: "30s" }}
        />
        
        <defs>
          <linearGradient id="elegantGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#64748b" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#94a3b8" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>

      {/* Central home with elegant design */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-xl bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800 flex items-center justify-center shadow-lg ring-1 ring-white/20 z-10 group hover:ring-white/40 transition-all duration-500 cursor-pointer">
        <Home className="w-8 h-8 text-white drop-shadow-sm group-hover:scale-110 transition-transform duration-300" />
        
        {/* Subtle pulse */}
        <div className="absolute inset-0 rounded-xl border border-white/10 animate-pulse"></div>
      </div>

      {/* Elegant neighbor nodes */}
      {neighborNode(12, nodeColors[0], { top: 80, left: 120 }, 32, 0)}
      {neighborNode(14, nodeColors[1], { top: 140, left: 60 }, 36, 0.8)}
      {neighborNode(12, nodeColors[2], { top: 220, left: 110 }, 30, 1.6)}
      {neighborNode(16, nodeColors[3], { top: 150, left: 260 }, 38, 2.4)}
      {neighborNode(14, nodeColors[0], { top: 90, left: 240 }, 34, 3.2)}
      {neighborNode(12, nodeColors[1], { top: 250, left: 200 }, 32, 4)}

      {/* Subtle connection lines */}
      <svg
        className="absolute top-0 left-0 w-full h-full"
        fill="none"
      >
        <path
          d="M200 175 Q160 130 136 96"
          stroke="url(#connectionGradient)"
          strokeWidth="1"
          strokeOpacity="0.4"
          strokeLinecap="round"
          className="animate-pulse"
          fill="none"
        />
        <path
          d="M200 175 Q140 160 78 158"
          stroke="url(#connectionGradient)"
          strokeWidth="1"
          strokeOpacity="0.4"
          strokeLinecap="round"
          className="animate-pulse"
          style={{ animationDelay: "1s" }}
          fill="none"
        />
        <path
          d="M200 175 Q160 220 128 238"
          stroke="url(#connectionGradient)"
          strokeWidth="1"
          strokeOpacity="0.4"
          strokeLinecap="round"
          className="animate-pulse"
          style={{ animationDelay: "2s" }}
          fill="none"
        />
        <path
          d="M200 175 Q230 165 278 168"
          stroke="url(#connectionGradient)"
          strokeWidth="1"
          strokeOpacity="0.4"
          strokeLinecap="round"
          className="animate-pulse"
          style={{ animationDelay: "3s" }}
          fill="none"
        />
        
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#64748b" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#94a3b8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>

      {/* Minimal floating particles */}
      <div className="absolute top-[120px] left-[160px] w-2 h-2 bg-slate-400/60 rounded-full animate-bounce opacity-70"></div>
      <div className="absolute top-[180px] left-[120px] w-1.5 h-1.5 bg-gray-400/50 rounded-full animate-pulse opacity-60" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-[220px] left-[240px] w-2 h-2 bg-zinc-400/60 rounded-full animate-pulse opacity-50" style={{ animationDelay: "2s" }}></div>
    </div>
  );
};

export default NeighborhoodClusterAnimation;
