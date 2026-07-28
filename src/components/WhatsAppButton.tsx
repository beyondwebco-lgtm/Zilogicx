'use client';

import React from 'react';

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
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg.5D366 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-3 rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 active:scale-95 group border border-white/30"
    >
      <svg
        className="w-6 h-6 fill-current transition-transform duration-300 group-hover:rotate-12"
        viewBox="0 0 24 24"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.156 4.226 4.299-1.127zm10.748-5.308c-.287-.144-1.701-.84-1.964-.936-.263-.096-.454-.144-.645.144-.191.288-.742.936-.91.1.128-.168.263-.336.551-.144.288-.287.072-.431-.072-.144-.144-.144-1.39-1.341-1.964-1.871-.573-.53-.191-.144-.383-.144-.192 0-.431 0-.645.072-.216.072-.551.263-.84.575-.288.312-1.077 1.054-1.077 2.57 0 1.516 1.103 2.979 1.257 3.195.153.216 2.169 3.312 5.255 4.646.734.317 1.307.507 1.753.649.738.235 1.409.202 1.94.123.592-.089 1.821-.744 2.077-1.463.256-.719.256-1.335.18-.1463-.077-.072-.268-.144-.555-.288z" />
      </svg>
      <span className="font-extrabold text-xs sm:text-sm tracking-wide hidden sm:inline-block">
        Chat on WhatsApp
      </span>
      <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-400 border-2 border-white"></span>
      </span>
    </a>
  );
};
