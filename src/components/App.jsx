import React, { useState } from 'react';
// import TaskForm from './TaskForm';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="d__button">
      <h1>Lista de Tareas</h1>
      <TaskForm addTask={addTask}/>
      <TaskList tasks={tasks} deleteTask={deleteTask} 
      className="d__button" />
    </div>
  );
};

export default App