import React, { useState, useEffect } from 'react';
import MainLayout from './components/MainLayout';
import Header from './components/Header';
import PomodoroTimer from './components/PomodoroTimer';
import TodoList from './components/TodoList';
import SpotifyPlayer from './components/SpotifyPlayer';

function App() {
  // Estado para el tema nocturno/diurno
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Cada que el tema cambie, aplicamos o quitamos la clase .dark del body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <MainLayout isDarkMode={isDarkMode}>
      {/* Botón Flotante para cambiar de tema */}
      <button 
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-50 p-2 md:p-3 rounded-full bg-slate-200/50 dark:bg-white/10 backdrop-blur-md border border-slate-300 dark:border-white/20 hover:bg-slate-300 dark:hover:bg-white/20 transition-all duration-500 group"
        title={isDarkMode ? "Cambiar a modo día" : "Cambiar a modo noche"}
      >
        {isDarkMode ? (
          // Icono Sol (Día)
          <svg className="w-5 h-5 text-amber-300 group-hover:rotate-45 transition-transform duration-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
          </svg>
        ) : (
          // Icono Luna (Noche)
          <svg className="w-5 h-5 text-slate-800 group-hover:-rotate-12 transition-transform duration-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
      </button>

      <div className="w-full flex-1 flex flex-col justify-between max-w-5xl mx-auto py-4">
        <div>
          <Header />
        </div>

        <div className="flex-1 flex flex-col justify-center items-center">
          <PomodoroTimer />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end w-full px-4 mb-4">
          <div className="order-2 md:order-1 flex justify-center md:justify-start">
            <SpotifyPlayer />
          </div>
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <TodoList />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default App;
