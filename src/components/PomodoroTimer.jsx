import React, { useState, useEffect } from 'react';

// Modos de tiempo por defecto en segundos
const MODES = {
  POMODORO: 45 * 60,
  SHORT_BREAK: 5 * 60,
  LONG_BREAK: 15 * 60
};

export default function PomodoroTimer() {
  // --- ESTADOS SIMPLES ---
  // El tiempo actual restante del temporizador en segundos
  const [timeLeft, setTimeLeft] = useState(MODES.POMODORO);
  // Booleano indica si está corriendo la cuenta regresiva
  const [isActive, setIsActive] = useState(false);
  // Rastrea en qué modo se encuentra (Pomodoro, Corto, Largo)
  const [currentMode, setCurrentMode] = useState('POMODORO');
  // Almacena el valor del input para minutos personalizados
  const [customMinutes, setCustomMinutes] = useState('');

  // Efecto que controla la cuenta regresiva segundo a segundo
  useEffect(() => {
    let interval = null;

    if (isActive && timeLeft > 0) {
      // Inicia intervalo que resta 1 segundo al estado timeLeft
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0 && isActive) {
      // Cuando termina el tiempo y sigue 'activo'
      clearInterval(interval);
      setIsActive(false);

      // Transición automática: si termina un Pomodoro, pasa a Descanso Corto
      if (currentMode === 'POMODORO') {
        setCurrentMode('SHORT_BREAK');
        setTimeLeft(MODES.SHORT_BREAK);
        // Opcional: setIsActive(true) para arrancar el descanso en automtico (lo mantenemos pausado por ahora)
      }
    }

    // Limpia el intervalo para evitar memory leaks (fugas de memoria)
    return () => clearInterval(interval);
  }, [isActive, timeLeft, currentMode]);

  /**
   * formateaSegundos
   * Convierte un número total de segundos a formato "MM:SS" (minutos:segundos).
   * @param {number} totalSeconds - Los segundos a convertir
   * @returns {string} - "Minutos decenales : Segundos decenales"
   */
  const formateaSegundos = (totalSeconds) => {
    // Calculamos los minutos enteros usando Math.floor
    const m = Math.floor(totalSeconds / 60);
    // Calculamos los segundos restantes usando el operador módulo (%)
    const s = totalSeconds % 60;

    // .padStart(2, '0') garantiza que números menores a 10 siempre tengan un cerito delante (ej: 09)
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // --- Funciones controladoras ---
  const toggleTimer = () => setIsActive(!isActive);

  const resetTimer = () => {
    setIsActive(false);
    // Regresa el tiempo a su valor inicial según el modo actual
    setTimeLeft(MODES[currentMode]);
  };

  const switchMode = (mode) => {
    setIsActive(false);
    setCurrentMode(mode);
    setTimeLeft(MODES[mode]);
  };

  const setCustomTime = (e) => {
    e.preventDefault();
    const mins = parseInt(customMinutes, 10);
    // Si el texto ingresado es un número válido mayor a 0
    if (!isNaN(mins) && mins > 0) {
      setIsActive(false);
      // Al actualizar tiempo personalizado, pasamos automáticamente al ciclo Pomodoro
      setCurrentMode('POMODORO');
      setTimeLeft(mins * 60);
      setCustomMinutes('');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center animate-fade-in my-4">

      {/* Botones selectores de modos */}
      <div className="flex space-x-5 mb-6">
        <button
          onClick={() => switchMode('POMODORO')}
          className={`text-[11px] uppercase tracking-[0.2em] px-2 py-1 font-light border-b border-transparent transition-colors duration-300 ${currentMode === 'POMODORO' ? 'border-slate-400/60 dark:border-white/55 text-slate-700 dark:text-white/85' : 'text-slate-500 dark:text-white/35 hover:text-slate-700 dark:hover:text-white/65'}`}
        >
          Pomodoro
        </button>
        <button
          onClick={() => switchMode('SHORT_BREAK')}
          className={`text-[11px] uppercase tracking-[0.2em] px-2 py-1 font-light border-b border-transparent transition-colors duration-300 ${currentMode === 'SHORT_BREAK' ? 'border-slate-400/60 dark:border-white/55 text-slate-700 dark:text-white/85' : 'text-slate-500 dark:text-white/35 hover:text-slate-700 dark:hover:text-white/65'}`}
        >
          Descanso Corto
        </button>
        <button
          onClick={() => switchMode('LONG_BREAK')}
          className={`text-[11px] uppercase tracking-[0.2em] px-2 py-1 font-light border-b border-transparent transition-colors duration-300 ${currentMode === 'LONG_BREAK' ? 'border-slate-400/60 dark:border-white/55 text-slate-700 dark:text-white/85' : 'text-slate-500 dark:text-white/35 hover:text-slate-700 dark:hover:text-white/65'}`}
        >
          Descanso Largo
        </button>
      </div>

      {/* Temporizador Digital Flotante */}
      <div className="text-[5.5rem] md:text-[7rem] font-light tracking-[0.08em] text-slate-700 dark:text-white/85 tabular-nums leading-none select-none transition-colors duration-500">
        {formateaSegundos(timeLeft)}
      </div>

      {/* Botones de control principal (Iniciar, Pausar, Reiniciar) */}
      <div className="flex gap-8 mt-6">
        <button
          onClick={toggleTimer}
          className="text-slate-600 dark:text-white/75 hover:text-slate-800 dark:hover:text-white uppercase tracking-[0.2em] text-xs font-light transition-colors pb-1 border-b border-transparent hover:border-slate-400/60 dark:hover:border-white/35"
        >
          {isActive ? 'Pausar' : 'Iniciar'}
        </button>
        <button
          onClick={resetTimer}
          className="text-slate-500 dark:text-white/35 hover:text-slate-700 dark:hover:text-white/65 uppercase tracking-[0.2em] text-xs font-light transition-colors pb-1 border-b border-transparent hover:border-slate-400/60 dark:hover:border-white/35"
        >
          Reiniciar
        </button>
      </div>

      {/* Input de minutos personalizados */}
      <form onSubmit={setCustomTime} className="mt-8 flex items-center bg-slate-100/80 dark:bg-white/[0.03] px-4 py-2 border border-slate-300/60 dark:border-white/10 rounded-full hover:bg-slate-200/70 dark:hover:bg-white/[0.06] transition-colors duration-300">
        <input
          type="number"
          value={customMinutes}
          onChange={(e) => setCustomMinutes(e.target.value)}
          placeholder="Minutos..."
          min="1"
          className="bg-transparent border-none outline-none text-slate-700 dark:text-white/85 placeholder-slate-400 dark:placeholder-white/35 text-xs tracking-[0.12em] w-24 text-center disabled:opacity-50 font-light"
        />
        <div className="w-px h-4 bg-slate-300/70 dark:bg-white/20 mx-3"></div>
        <button
          type="submit"
          className="text-[10px] uppercase tracking-[0.2em] text-slate-500 dark:text-white/55 hover:text-slate-700 dark:hover:text-white transition-colors"
        >
          Set
        </button>
      </form>

    </div>
  );
}
