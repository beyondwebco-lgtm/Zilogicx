import React from 'react';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light' | 'white-bg';
  href?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'dark', href = '/' }) => {
  // On dark backgrounds, ilogic text and doorstep line can be white/light or rendered inside a crisp container
  const textColor = variant === 'light' ? '#0B1E48' : variant === 'white-bg' ? '#0B1E48' : '#FFFFFF';
  
  if (variant === 'white-bg') {
    return (
      <Link href={href} className={`inline-flex items-center bg-white px-3 py-1.5 rounded-lg shadow-md border border-slate-100 hover:shadow-lg transition-all ${className}`}>
        <LogoSvg textColor="#0B1E48" />
      </Link>
    );
  }

  return (
    <Link href={href} className={`inline-flex items-center select-none hover:opacity-95 transition-opacity ${className}`}>
      <LogoSvg textColor={textColor} />
    </Link>
  );
};

const LogoSvg: React.FC<{ textColor: string }> = ({ textColor }) => (
  <svg 
    viewBox="0 0 250 78" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className="h-10 sm:h-11 w-auto"
  >
    {/* Speed Trails behind Z */}
    <g transform="translate(4, -1)">
      <path d="M -4 16 H 24 L 21 20 H -4 Z" fill="#F5B800" />
      <path d="M -4 24 H 19 L 16 28 H -4 Z" fill="#F5B800" />
      <path d="M -4 32 H 14 L 11 36 H -4 Z" fill="#F5B800" />

      {/* Main Z */}
      <path d="M 24 8 H 64 L 34 44 H 74 L 70 52 H 18 L 48 16 H 20 Z" fill="#F5B800" />
      
      {/* Arrow under Z */}
      <path d="M 8 58 H 55" stroke="#94a3b8" strokeWidth="1.5" fill="none" strokeOpacity="0.6" />
      <path d="M 55 55 L 61 58 L 55 61 Z" fill="#F5B800" />
    </g>

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
    <line x1="8" y1="67" x2="52" y2="67" stroke={textColor} strokeWidth="1.5" strokeOpacity="0.8" />
    <polygon points="57,67 50,64 50,70" fill="#F5B800" />

    {/* Subtitle Text */}
    <text 
      x="62" 
      y="71" 
      fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
      fontWeight="800" 
      fontSize="12.5" 
      letterSpacing="-0.2px"
      fill={textColor}
    >
      Doorstep In 24hrs
    </text>

    {/* Subtitle Decorative Right Line & Arrow */}
    <polygon points="185,67 192,64 192,70" fill="#F5B800" />
    <line x1="197" y1="67" x2="242" y2="67" stroke={textColor} strokeWidth="1.5" strokeOpacity="0.8" />
  </svg>
);
