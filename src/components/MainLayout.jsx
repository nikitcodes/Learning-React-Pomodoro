import React from 'react';

// MainLayout - Lienzo Minimalista (Sin Imágenes)
export default function MainLayout({ children, isDarkMode }) {
  return (
    <div className={`min-h-screen w-full transition-colors duration-1000 flex flex-col items-center justify-between p-6 ${isDarkMode ? 'bg-[#121212] backdrop-blur-none' : 'bg-slate-50'}`}>
      {children}
    </div>
  );
}
