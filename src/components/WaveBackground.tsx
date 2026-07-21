import React from 'react';

interface WaveBackgroundProps {
  toColor?: string;
}

export const WaveBackground: React.FC<WaveBackgroundProps> = ({ toColor = 'to-white' }) => {
  const wavePath1 = "M-100 280 Q 350 200, 750 320 T 1600 240";
  const wavePath2 = "M-50 420 Q 400 320, 800 480 T 1550 360";
  const wavePath3 = "M-100 680 Q 450 480, 950 620 T 1600 500";
  const wavePath4 = "M-50 180 Q 500 380, 1000 180 T 1550 320";

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <svg
        className="w-full h-full opacity-70"
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        {/* Wave 1 - Gold/Yellow Top Wave */}
        <path
          d={wavePath1}
          stroke="#FFC700"
          strokeWidth="1.5"
          strokeOpacity="0.4"
          fill="none"
        />

        {/* Wave 2 - Yellow Sub-Wave */}
        <path
          d={wavePath2}
          stroke="#FFC700"
          strokeWidth="1.2"
          strokeOpacity="0.3"
          strokeDasharray="4 4"
          fill="none"
        />

        {/* Wave 3 - Deep Blue Dynamic Wave */}
        <path
          d={wavePath3}
          stroke="#2563EB"
          strokeWidth="2"
          strokeOpacity="0.5"
          fill="none"
        />

        {/* Wave 4 - Subtle Blue High Arc */}
        <path
          d={wavePath4}
          stroke="#1D4ED8"
          strokeWidth="1"
          strokeOpacity="0.25"
          fill="none"
        />

        {/* Traveling Glowing Gold Balls / Dots along Wave Paths */}
        <g>
          {/* Traveling Gold Dot 1 on Wave 1 */}
          <circle r="5" fill="#FFC700" className="filter drop-shadow-[0_0_8px_rgba(255,199,0,0.9)]">
            <animateMotion path={wavePath1} dur="12s" repeatCount="indefinite" />
          </circle>
          <circle r="3" fill="#FFFFFF" opacity="0.9">
            <animateMotion path={wavePath1} dur="12s" repeatCount="indefinite" />
          </circle>

          {/* Traveling Gold Dot 2 on Wave 1 (Offset start) */}
          <circle r="4" fill="#FFC700" className="filter drop-shadow-[0_0_6px_rgba(255,199,0,0.8)]">
            <animateMotion path={wavePath1} dur="16s" begin="-8s" repeatCount="indefinite" />
          </circle>

          {/* Traveling Gold Dot 3 on Wave 2 */}
          <circle r="4.5" fill="#FFC700" className="filter drop-shadow-[0_0_8px_rgba(255,199,0,0.9)]">
            <animateMotion path={wavePath2} dur="14s" begin="-4s" repeatCount="indefinite" />
          </circle>

          {/* Traveling Blue Dot on Wave 3 */}
          <circle r="5" fill="#60A5FA" className="filter drop-shadow-[0_0_8px_rgba(96,165,250,0.9)]">
            <animateMotion path={wavePath3} dur="18s" begin="-3s" repeatCount="indefinite" />
          </circle>

          {/* Traveling Gold Dot on Wave 4 */}
          <circle r="4" fill="#FFC700" className="filter drop-shadow-[0_0_6px_rgba(255,199,0,0.8)]">
            <animateMotion path={wavePath4} dur="15s" begin="-6s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Static Ambient Glowing Nodes */}
        <g className="animate-pulse">
          <circle cx="230" cy="580" r="4.5" fill="#FFC700" opacity="0.8" />
          <circle cx="720" cy="310" r="3.5" fill="#FFC700" opacity="0.9" />
          <circle cx="1180" cy="420" r="4" fill="#60A5FA" opacity="0.7" />
          <circle cx="480" cy="230" r="3" fill="#FFC700" opacity="0.6" />
          <circle cx="1310" cy="350" r="3.5" fill="#2563EB" opacity="0.8" />
        </g>
      </svg>
      
      {/* Radial Glow Overlay */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[300px] bg-yellow-500/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Smooth Morph Transition from Dark Hero into Next Section */}
      <div className={`absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-b from-transparent via-[#070e1b]/40 ${toColor} pointer-events-none z-10`} />
    </div>
  );
};
