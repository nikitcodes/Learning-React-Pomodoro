import React from 'react';

export default function Header() {
  return (
    <header className="w-full text-center mt-8 mb-4 animate-fade-in">
      <h1 className="text-2xl md:text-3xl font-extralight text-black/70 dark:text-white/80 tracking-[0.3em] uppercase leading-relaxed transition-colors duration-700">
        Mente Enfocada
      </h1>
      <div className="w-8 h-[1px] bg-black/10 dark:bg-white/20 mx-auto mt-3 mb-2 transition-colors duration-700"></div> {/* Separador sutil */}
      <p className="text-[10px] md:text-xs font-light text-black/40 dark:text-white/40 tracking-[0.4em] uppercase transition-colors duration-700">
        tu refugio de concentración
      </p>
    </header>
  );
}
