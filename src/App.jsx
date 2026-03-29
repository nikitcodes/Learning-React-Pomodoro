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
      <div className="w-full flex-1 flex flex-col justify-between max-w-5xl mx-auto py-5">
        <div>
          <Header />
        </div>

        <div className="flex-1 flex flex-col justify-center items-center">
          <PomodoroTimer />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end w-full px-4 mb-4">
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
