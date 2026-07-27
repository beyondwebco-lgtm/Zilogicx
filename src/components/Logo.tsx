import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light' | 'white-bg';
  href?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = '', href = '/' }) => {
  return (
    <Link href={href} className={`inline-flex items-center select-none hover:opacity-90 transition-transform hover:scale-[1.02] ${className}`}>
      <Image 
        src="/zilogicx-logo-v2.png" 
        alt="ZilogicX Logo" 
        width={180} 
        height={56} 
        className="h-14 sm:h-16 w-auto object-contain scale-110 origin-left"
        priority
      />
    </Link>
  );
};
