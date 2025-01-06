import React from 'react';
    import TaskItem from './TaskItem';

    function TaskList({ tasks, onToggleComplete, onDeleteTask }) {
      const sortedTasks = [...tasks].sort((a, b) => {
        if (a.completed === b.completed) return 0;
        return a.completed ? 1 : -1;
      });

      return (
        <ul className="task-list">
          {sortedTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggleComplete={onToggleComplete}
              onDeleteTask={onDeleteTask}
            />
          ))}
        </ul>
      );
    }

    export default TaskList;
