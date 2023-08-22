import React from 'react';
import DeleteTask from './DeleteTask';

const TaskList = ({ tasks, onDelete, onUpdate }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <DeleteTask
          key={index}
          task={task}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </ul>
  );
};

export default TaskList;
