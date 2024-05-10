import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return; // Evitar agregar tareas vacías
    addTask({ id: Date.now(), text }); // Crear una nueva tarea con un ID único
    setText(''); // Limpiar el campo de texto después de agregar la tarea
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Ingrese una nueva tarea"
          />
        </div>
        <div>
          <button type="submit">Agregar</button>
        </div>
      </form>
    </>
  );
};

export default TaskForm;


