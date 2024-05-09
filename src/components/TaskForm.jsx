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
      <form className='d__button'      style={{ color: 'red' }} onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Ingrese una nueva tarea"
          // className='d__button'
        />
        <button type="submit">Agregar</button>
      </form>
    </>
  );
};

export default TaskForm;


