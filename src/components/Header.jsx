import React from 'react';

export default function Header() {
  return (
    <header className="w-full text-center mt-8 mb-5 animate-fade-in">
      <h1 className="text-2xl md:text-3xl font-light text-slate-700 dark:text-white/75 tracking-[0.22em] uppercase leading-relaxed transition-colors duration-500">
        Mente Enfocada
      </h1>
      <div className="w-8 h-px bg-slate-300/70 dark:bg-white/15 mx-auto mt-3 mb-2 transition-colors duration-500"></div> {/* Separador sutil */}
      <p className="text-[10px] md:text-xs font-light text-slate-500 dark:text-white/35 tracking-[0.26em] uppercase transition-colors duration-500">
        tu refugio de concentración
      </p>
    </header>
  );
}
