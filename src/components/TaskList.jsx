import React from 'react';

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <div className='l__container'>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => deleteTask(task.id)}
            >Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;