import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light' | 'white-bg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'dark' }) => {
  // On dark backgrounds, ilogic text and doorstep line can be white/light or rendered inside a crisp container
  const textColor = variant === 'light' ? '#0B1E48' : variant === 'white-bg' ? '#0B1E48' : '#FFFFFF';
  
  if (variant === 'white-bg') {
    return (
      <a href="#home" className={`inline-flex items-center bg-white px-3 py-1.5 rounded-lg shadow-md border border-slate-100 hover:shadow-lg transition-all ${className}`}>
        <LogoSvg textColor="#0B1E48" />
      </a>
    );
  }

  return (
    <a href="#home" className={`inline-flex items-center select-none hover:opacity-95 transition-opacity ${className}`}>
      <LogoSvg textColor={textColor} />
    </a>
  );
};

const LogoSvg: React.FC<{ textColor: string }> = ({ textColor }) => (
  <svg 
    viewBox="0 0 250 72" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className="h-10 sm:h-11 w-auto"
  >
    {/* Speed Trails behind Z */}
    <g fill="#F5B800">
      <path d="M 2 18 L 32 18 L 28 20.5 L 2 20.5 Z" opacity="0.9" />
      <path d="M -6 24.5 L 26 24.5 L 22 27 L -6 27 Z" opacity="0.8" />
      <path d="M -14 31 L 20 31 L 16 33.5 L -14 33.5 Z" opacity="0.7" />
    </g>

    {/* Stylized Speed Z */}
    <path 
      d="M 24 13 L 64 13 L 34 41 L 64 41 L 61 47 L 17 47 L 46 19 L 24 19 Z" 
      fill="#F5B800" 
    />

    {/* ilogic Text */}
    <text 
      x="65" 
      y="45" 
      fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
      fontWeight="900" 
      fontSize="37" 
      letterSpacing="-0.5px"
      fill={textColor}
    >
      ilogic
    </text>

    {/* Yellow X */}
    <text 
      x="167" 
      y="45" 
      fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
      fontWeight="900" 
      fontSize="39" 
      fill="#F5B800"
    >
      X
    </text>

    {/* Subtitle Decorative Left Line & Arrow */}
    <line x1="8" y1="62" x2="52" y2="62" stroke={textColor} strokeWidth="1.5" strokeOpacity="0.8" />
    <polygon points="57,62 50,59 50,65" fill="#F5B800" />

    {/* Subtitle Text */}
    <text 
      x="62" 
      y="66" 
      fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
      fontWeight="800" 
      fontSize="12.5" 
      letterSpacing="-0.2px"
      fill={textColor}
    >
      Doorstep In 24hrs
    </text>

    {/* Subtitle Decorative Right Line & Arrow */}
    <polygon points="185,62 192,59 192,65" fill="#F5B800" />
    <line x1="197" y1="62" x2="242" y2="62" stroke={textColor} strokeWidth="1.5" strokeOpacity="0.8" />
  </svg>
);
