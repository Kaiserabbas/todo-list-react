import React, { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [task, setTask] = useState('');

  const handleAdd = () => {
    if (task.trim() !== '') {
      onAdd(task);
      setTask('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
};

export default AddTask;
