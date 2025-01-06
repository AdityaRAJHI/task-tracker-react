import React, { useState } from 'react';
    import TaskInput from './components/TaskInput';
    import TaskList from './components/TaskList';

    function App() {
      const [tasks, setTasks] = useState([]);

      const addTask = (description) => {
        setTasks([...tasks, { id: Date.now(), description, completed: false }]);
      };

      const toggleComplete = (id) => {
        setTasks(
          tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task,
          ),
        );
      };

      const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
      };

      return (
        <div className="task-tracker">
          <h1>Task Tracker</h1>
          <TaskInput onAddTask={addTask} />
          <TaskList
            tasks={tasks}
            onToggleComplete={toggleComplete}
            onDeleteTask={deleteTask}
          />
        </div>
      );
    }

    export default App;
