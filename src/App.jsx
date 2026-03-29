import React, { useEffect } from 'react';
import MainLayout from './components/MainLayout';
import Header from './components/Header';
import PomodoroTimer from './components/PomodoroTimer';
import TodoList from './components/TodoList';
import SpotifyPlayer from './components/SpotifyPlayer';

function App() {
  // Forzamos tema oscuro global para toda la app
  useEffect(() => {
    document.body.classList.add('dark');
  }, []);

  return (
    <MainLayout>
      <div className="w-full max-w-6xl mx-auto flex flex-col min-h-full py-4 md:py-8">
        {/* Header - Siempre arriba */}
        <div className="w-full mb-8 md:mb-12">
          <Header />
        </div>

        {/* Timer - Centro focal */}
        <div className="flex-1 flex flex-col justify-center items-center py-8 md:py-12">
          <PomodoroTimer />
        </div>

        {/* Bottom Grid: Spotify & Todo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-6 items-end w-full mt-auto pb-10">
          {/* Spotify: Abajo a la izquierda en Desktop, segundo en Mobile */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <SpotifyPlayer />
          </div>

          {/* Todo: Abajo a la derecha en Desktop, tercero en Mobile */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <TodoList />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default App;
