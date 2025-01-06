import React from 'react';

    function TaskItem({ task, onToggleComplete, onDeleteTask }) {
      return (
        <li className={`task-item ${task.completed ? 'completed' : ''}`}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleComplete(task.id)}
          />
          <span>{task.description}</span>
          <button onClick={() => onDeleteTask(task.id)}>Delete</button>
        </li>
      );
    }

    export default TaskItem;
