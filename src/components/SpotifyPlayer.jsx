import React from 'react';

// Reproductor de Música - Regresando a Spotify (Playlist Recomendada)
// Hemos reemplazado el buscador de YouTube por el Widget oficial de Spotify solicitado.
export default function SpotifyPlayer() {
  const playlistId = '3m5jM0TdKvCJdO1TywkDtk';

  return (
    <div className="relative animate-fade-in w-full max-w-[20rem] md:max-w-md lg:max-w-lg mx-auto lg:mx-0">
      {/* Contenedor Ghost con Glassmorphism profundo compatible con temas Día/Noche */}
      <div className="bg-slate-100 dark:bg-black/30 backdrop-blur-sm border border-slate-400/55 dark:border-white/10 rounded-[1.5rem] overflow-hidden shadow-sm dark:shadow-none flex flex-col transition-colors duration-500 hover:border-slate-500/50 dark:hover:border-white/15 group">

        {/* Cabecera Sutil de Spotify */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-slate-200 dark:bg-white/[0.03] border-b border-slate-400/55 dark:border-white/10 transition-colors duration-500">
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-[#1DB954]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.491 17.306c-.215.352-.674.463-1.025.248-2.855-1.745-6.449-2.14-10.681-1.171-.403.092-.81-.159-.902-.562-.092-.403.159-.81.562-.902 4.631-1.06 8.604-.614 11.796 1.338.351.215.462.674.25 1.049zm1.465-3.263c-.27.439-.848.583-1.287.313-3.267-2.008-8.248-2.592-12.112-1.419-.494.15-.1.025-.566-.231-.466-.256-.616-.856-.36-1.321.15-.494.75-.639 1.11-.478 4.417-1.34 9.907-.669 13.659 1.639.439.27.583.847.31 1.286zm.135-3.376C15.542 8.527 9.53 8.328 6.046 9.385c-.551.167-1.127-.146-1.294-.697-.167-.551.146-1.127.697-1.294 4.01-1.218 10.648-1.002 14.773 1.448.497.295.661.936.366 1.432-.295.497-.936.662-1.432.367z" />
            </svg>
            <span className="text-[10px] uppercase tracking-[0.2em] font-light text-slate-500 dark:text-white/40">Spotify Session</span>
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-[#1DB954] animate-pulse"></div>
        </div>

        {/* El Iframe solicitado - Notar que los widgets de Spotify funcionan mejor con una altura mínima */}
        <div className="w-full h-[360px] bg-slate-200/70 dark:bg-black/[0.2]">
          <iframe
            title="Spotify Embed: Recommendation Playlist"
            src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`}
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="opacity-95 group-hover:opacity-100 transition-opacity duration-300"
          />
        </div>

        {/* Pie sutil */}
        <div className="px-5 py-2 bg-slate-200 dark:bg-black/25 text-center transition-colors duration-500">
          <p className="text-[9px] text-slate-400 dark:text-white/10 uppercase tracking-[0.2em] font-light italic">
            vibra el momento
          </p>
        </div>
      </div>
    </div>
  );
}
