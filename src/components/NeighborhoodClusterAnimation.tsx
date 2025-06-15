
import { Home } from "lucide-react";
import React from "react";

const colors = [
  "bg-gradient-to-br from-gray-400 to-gray-600",
  "bg-gradient-to-br from-gray-500 to-gray-700",
  "bg-gradient-to-br from-gray-600 to-gray-900",
];

export const NeighborhoodClusterAnimation = () => {
  return (
    <div className="absolute top-0 left-0 z-0 w-[370px] h-[320px] pointer-events-none select-none"
         style={{marginTop: '-2rem', marginLeft: '-1.6rem'}}>
      {/* Large faint circle background */}
      <div className="absolute top-10 left-12 w-[250px] h-[250px] rounded-full bg-gradient-to-br from-gray-100/25 via-gray-200/15 to-transparent blur-2xl"></div>
      
      {/* Central home */}
      <div className="absolute top-[110px] left-[130px] w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-900 via-gray-700 to-gray-500 flex items-center justify-center shadow-xl">
        <Home className="w-8 h-8 text-white" />
        {/* Subtle pulse */}
        <div className="absolute -inset-3 rounded-2xl bg-gray-700/10 animate-pulse-luxury"></div>
      </div>
      {/* Neighbor home 1 */}
      <div className="absolute top-[30px] left-[45px] w-7 h-7 rounded-xl flex items-center justify-center shadow-md bg-white/30">
        <div className={`${colors[0]} w-full h-full rounded-xl flex items-center justify-center`}>
          <Home className="w-3 h-3 text-white opacity-80" />
        </div>
      </div>
      {/* Neighbor home 2 */}
      <div className="absolute top-[200px] left-[65px] w-8 h-8 rounded-xl flex items-center justify-center shadow-md bg-white/30">
        <div className={`${colors[1]} w-full h-full rounded-xl flex items-center justify-center`}>
          <Home className="w-4 h-4 text-white opacity-80" />
        </div>
      </div>
      {/* Neighbor home 3 */}
      <div className="absolute top-[70px] left-[220px] w-7 h-7 rounded-xl flex items-center justify-center shadow-md bg-white/30">
        <div className={`${colors[2]} w-full h-full rounded-xl flex items-center justify-center`}>
          <Home className="w-3 h-3 text-white opacity-80" />
        </div>
      </div>
      {/* Orbiting curved lines */}
      <svg 
        className="absolute left-[105px] top-[85px] z-0"
        width="120"
        height="120"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="60"
          cy="60"
          r="56"
          stroke="#bcbcbc"
          strokeOpacity="0.22"
          strokeWidth="2"
        />
      </svg>
      {/* Connections: subtle lines */}
      {/* Central to house 1 */}
      <div className="absolute left-[140px] top-[118px] w-[0px] h-[0px]">
        <svg width="74" height="54" className="absolute -top-[84px] -left-[98px]" fill="none">
          <line x1="98" y1="84" x2="50" y2="25" stroke="#bcbcbc" strokeOpacity="0.28" strokeWidth="2" />
        </svg>
      </div>
      {/* Central to house 2 */}
      <div className="absolute left-[140px] top-[142px] w-[0px] h-[0px]">
        <svg width="90" height="100" className="absolute top-[45px] left-[-65px]" fill="none">
          <line x1="0" y1="0" x2="65" y2="58" stroke="#bcbcbc" strokeOpacity="0.25" strokeWidth="2" />
        </svg>
      </div>
      {/* Central to house 3 */}
      <div className="absolute left-[157px] top-[117px] w-[0px] h-[0px]">
        <svg width="76" height="52" className="absolute -top-[53px] left-[51px]" fill="none">
          <line x1="0" y1="37" x2="46" y2="0" stroke="#bcbcbc" strokeOpacity="0.25" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
};

export default NeighborhoodClusterAnimation;
