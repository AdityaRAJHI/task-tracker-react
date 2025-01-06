import React, { useState } from 'react';

    function TaskInput({ onAddTask }) {
      const [newTask, setNewTask] = useState('');

      const handleInputChange = (event) => {
        setNewTask(event.target.value);
      };

      const handleAddTask = () => {
        if (newTask.trim() !== '') {
          onAddTask(newTask);
          setNewTask('');
        }
      };

      const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          handleAddTask();
        }
      };

      return (
        <div className="task-input">
          <input
            type="text"
            placeholder="Start writing and press enter to create task"
            value={newTask}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleAddTask}>Add</button>
        </div>
      );
    }

    export default TaskInput;
