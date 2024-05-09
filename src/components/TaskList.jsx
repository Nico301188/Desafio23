import React from 'react';

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <ul style={{ color: 'red' }} >
      {tasks.map((task) => (
        <li key={task.id}>
          {task.text}
          <button onClick={() => deleteTask(task.id)}
          >Eliminar</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;