import React, { useState, useEffect } from 'react';

// TodoList Pro - con persistencia y corregido para evitar problemas de scroll total de pantalla
export default function TodoList() {
  // --- CARGA DE DATOS DESDE LOCALSTORAGE ---
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('mente-enfocada-tasks');
    if (saved) return JSON.parse(saved);
    return [
      { id: 1, text: 'Tu primera tarea', completed: false, priority: 'normal' },
      { id: 2, text: 'Tarea urgente (mira el punto)', completed: false, priority: 'high' }
    ];
  });

  const [newTaskText, setNewTaskText] = useState('');
  const [priority, setPriority] = useState('normal'); // 'low', 'normal', 'high'

  // --- PERSISTENCIA ---
  useEffect(() => {
    localStorage.setItem('mente-enfocada-tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault();
    if (newTaskText.trim() === '') return;
    setTasks([
      { id: Date.now(), text: newTaskText, completed: false, priority },
      ...tasks
    ]);
    setNewTaskText('');
    setPriority('normal');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const clearCompleted = () => {
    setTasks(tasks.filter(t => !t.completed));
  };

  // Ayudante de color según prioridad
  const getPriorityColor = (p) => {
    if (p === 'low') return 'bg-sky-400/40';
    if (p === 'high') return 'bg-rose-400/60';
    return 'bg-amber-400/40';
  };

  return (
    <div className="w-full max-w-md mx-auto animate-fade-in mt-4 bg-white/70 dark:bg-black/40 backdrop-blur-xl rounded-[2rem] p-6 border border-slate-200 dark:border-white/5 shadow-xl dark:shadow-2xl flex flex-col transition-all duration-700">
      
      {/* Cabecera del Todo con Limpieza */}
      <div className="flex justify-between items-center mb-6 px-1">
        <h3 className="text-slate-400 dark:text-white/40 tracking-[0.3em] text-[10px] uppercase font-light transition-colors duration-700">Ecos de Tareas</h3>
        <button 
          onClick={clearCompleted}
          className="text-[9px] uppercase tracking-widest text-slate-300 dark:text-white/20 hover:text-rose-500/60 transition-colors"
        >
          Limpiar completadas
        </button>
      </div>
      
      {/* Selector de prioridad y campo de entrada */}
      <form onSubmit={addTask} className="mb-8 space-y-4">
        <div className="flex items-center gap-2 px-2">
          <button type="button" onClick={() => setPriority('low')} className={`w-2 h-2 rounded-full transition-all ${priority === 'low' ? 'bg-sky-500 scale-125' : 'bg-sky-500/20'}`} title="Baja" />
          <button type="button" onClick={() => setPriority('normal')} className={`w-2 h-2 rounded-full transition-all ${priority === 'normal' ? 'bg-amber-500 scale-125' : 'bg-amber-500/20'}`} title="Normal" />
          <button type="button" onClick={() => setPriority('high')} className={`w-2 h-2 rounded-full transition-all ${priority === 'high' ? 'bg-rose-500 scale-125' : 'bg-rose-500/20'}`} title="Alta" />
          <input 
            type="text" 
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            placeholder="Danza una idea aquí..."
            className="flex-1 bg-transparent border-none outline-none text-slate-800 dark:text-white/90 text-sm font-light placeholder-slate-300 dark:placeholder-white/20 ml-2 transition-colors duration-700"
          />
        </div>
        <div className="h-[1px] w-full bg-slate-100 dark:bg-white/10 transition-colors duration-700" />
      </form>

      {/* --- LISTA CON ALTURA MÁXIMA Y SCROLL INTERNO (CORRECCIÓN UX) --- */}
      <ul className="space-y-4 max-h-[250px] overflow-y-auto pr-2 scrollbar-thin">
        {tasks.map(task => (
          <li key={task.id} className="group flex items-center justify-between text-sm font-light animate-fade-in">
            <div 
              className="flex items-center gap-4 cursor-pointer overflow-hidden" 
              onClick={() => toggleTask(task.id)}
            >
              {/* Indicador de prioridad estético */}
              <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors duration-700 ${getPriorityColor(task.priority)}`} />
              
              <span className={`transition-all duration-700 truncate tracking-wide ${task.completed ? 'line-through text-slate-300 dark:text-white/20 grayscale opacity-40' : 'text-slate-700 dark:text-white/80'}`}>
                {task.text}
              </span>
            </div>
            
            <button 
              onClick={() => deleteTask(task.id)}
              className="opacity-0 group-hover:opacity-100 text-slate-300 dark:text-white/10 hover:text-rose-500 border-none bg-transparent transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </li>
        ))}
        {tasks.length === 0 && (
          <p className="text-center py-4 text-[10px] text-slate-300 dark:text-white/10 uppercase tracking-widest font-light italic">
            silencio... no hay tareas pendientes
          </p>
        )}
      </ul>
    </div>
  );
}
