import React from 'react';

// MainLayout - Lienzo Minimalista (Sin Imágenes)
export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen w-full transition-colors duration-700 flex flex-col items-center p-4 md:p-6 bg-[#121212] overflow-y-auto overflow-x-hidden selection:bg-white/10 scroll-smooth">
      {children}
    </div>
  );
}
