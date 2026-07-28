'use client';

import React from 'react';
import Image from 'next/image';

export const WhatsAppButton: React.FC = () => {
  const whatsappNumber = '919347166105';
  const defaultMessage = encodeURIComponent('Hello ZilogicX Team, I have an inquiry.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 active:scale-95 group filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]"
    >
      <div className="relative w-16 h-16">
        <Image
          src="/whatsapp-logo.png"
          alt="WhatsApp"
          width={64}
          height={64}
          className="object-contain w-full h-full"
          priority
        />
        <span className="absolute top-1 right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-500 border-2 border-white"></span>
        </span>
      </div>
    </a>
  );
};
