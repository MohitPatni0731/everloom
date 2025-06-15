import { Home } from "lucide-react";
import React from "react";

// Modern minimalist constellation cluster colors
const nodeColors = [
  "bg-gradient-to-br from-[#e0e7ee] to-[#bcc4d4]",
  "bg-gradient-to-br from-[#f3f4f6] to-[#b8c0d0]",
  "bg-gradient-to-br from-[#d2dae4] to-[#a6b4c8]",
];

const smallDot = (
  <div className="rounded-full bg-gradient-to-br from-gray-50 via-gray-200 to-white w-3 h-3 shadow shadow-black/10 opacity-60"></div>
);

const line = (className: string, style = {}) => (
  <div className={className} style={style}>
    <svg width="64" height="64" fill="none">
      <line
        x1="4"
        y1="60"
        x2="60"
        y2="8"
        stroke="#cdd6e0"
        strokeWidth="2"
        strokeOpacity="0.22"
        strokeLinecap="round"
      />
    </svg>
  </div>
);

const subtleRing = (className: string, diameter: number, opacity = 0.16) => (
  <svg
    className={className}
    width={diameter}
    height={diameter}
    fill="none"
    style={{ filter: "blur(4px)" }}
    aria-hidden="true"
  >
    <circle
      cx={diameter / 2}
      cy={diameter / 2}
      r={diameter / 2 - 2}
      stroke="#eaeef2"
      strokeWidth="3"
      strokeOpacity={opacity}
    />
  </svg>
);

const neighborNode = (
  iconSize: number,
  colorClass: string,
  pos: { top: number; left: number },
  boxSize = 28
) => (
  <div
    className={`absolute`}
    style={{
      top: pos.top,
      left: pos.left,
      width: boxSize,
      height: boxSize,
      zIndex: 1,
    }}
  >
    <div
      className={`${colorClass} w-full h-full rounded-2xl shadow-xl flex items-center justify-center opacity-90`}
    >
      <Home className={`w-[${iconSize}px] h-[${iconSize}px] text-white opacity-90`} />
    </div>
    {smallDot}
  </div>
);

export const NeighborhoodClusterAnimation = () => {
  return (
    <div
      className="absolute pointer-events-none select-none"
      style={{
        top: "-120px",
        left: "-80px",
        zIndex: 0,
        width: 400,
        height: 340,
        // Keeps cluster far in background
      }}
    >
      {/* Soft haze background gradient */}
      <div className="absolute top-10 left-10 w-[300px] h-[300px] rounded-full bg-gradient-to-br from-gray-100/20 via-white/70 to-transparent blur-2xl"></div>
      {/* Outer subtle premium rings */}
      {subtleRing("absolute top-[40px] left-[40px]", 220, 0.10)}
      {subtleRing("absolute top-[24px] left-[32px]", 260, 0.075)}
      {/* Central home node */}
      <div className="absolute top-[115px] left-[115px] w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-[#b2b9c2] flex items-center justify-center shadow-2xl ring-2 ring-white/30">
        <Home className="w-8 h-8 text-white" />
        {/* Minimal pulse */}
        <div className="absolute -inset-4 rounded-2xl bg-gray-200/10 animate-pulse-luxury"></div>
      </div>
      {/* Neighbor nodes (carefully positioned for constellation effect) */}
      {neighborNode(
        14,
        nodeColors[0],
        { top: 37, left: 57 },
        28
      )}
      {neighborNode(
        18,
        nodeColors[1],
        { top: 202, left: 58 },
        32
      )}
      {neighborNode(
        14,
        nodeColors[2],
        { top: 80, left: 222 },
        28
      )}
      {/* Soft connector lines */}
      <svg
        className="absolute left-[142px] top-[128px] z-0"
        width="80"
        height="80"
        fill="none"
      >
        <line
          x1="8"
          y1="8"
          x2="45"
          y2="-60"
          stroke="#c0cadb"
          strokeWidth="2"
          strokeOpacity="0.15"
        />
      </svg>
      {/* Central to neighbor 1 */}
      <svg
        className="absolute left-[125px] top-[128px]"
        width="70"
        height="74"
        fill="none"
      >
        <line
          x1="35"
          y1="35"
          x2="-35"
          y2="-70"
          stroke="#d2dbe5"
          strokeWidth="2"
          strokeOpacity="0.12"
        />
      </svg>
      {/* Central to neighbor 2 */}
      <svg
        className="absolute left-[138px] top-[148px]"
        width="88"
        height="88"
        fill="none"
      >
        <line
          x1="12"
          y1="15"
          x2="-44"
          y2="65"
          stroke="#ced6e0"
          strokeWidth="2"
          strokeOpacity="0.11"
        />
      </svg>
      {/* Central to neighbor 3 */}
      <svg
        className="absolute left-[159px] top-[136px]"
        width="50"
        height="50"
        fill="none"
      >
        <line
          x1="22"
          y1="15"
          x2="46"
          y2="-54"
          stroke="#c2cbd8"
          strokeWidth="2"
          strokeOpacity="0.11"
        />
      </svg>
      {/* More minimal random small orbs for constellation effect */}
      <div className="absolute top-[52px] left-[240px]">{smallDot}</div>
      <div className="absolute top-[175px] left-[25px]">{smallDot}</div>
      <div className="absolute top-[260px] left-[180px]">{smallDot}</div>
    </div>
  );
};

export default NeighborhoodClusterAnimation;
