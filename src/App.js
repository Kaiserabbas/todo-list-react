import React, { useState, useEffect } from 'react';
import LocalStorage from './components/LocalStorage';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = LocalStorage.get('tasks');
    setTasks(savedTasks);
  }, []);

  const handleAddTask = (taskText) => {
    const newTask = { text: taskText };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    LocalStorage.set('tasks', updatedTasks);
  };

  const handleUpdateTask = (taskToUpdate, newText) => {
    const updatedTasks = tasks.map((task) => {
      if (task === taskToUpdate) {
        return { ...task, text: newText };
      }
      return task;
    });

    setTasks(updatedTasks);
    LocalStorage.set('tasks', updatedTasks);
  };

  const handleDeleteTask = (taskToDelete) => {
    const updatedTasks = tasks.filter((task) => task !== taskToDelete);
    setTasks(updatedTasks);
    LocalStorage.set('tasks', updatedTasks);
  };

  return (
    <div>
      <h1>Todo List App</h1>
      <AddTask onAdd={handleAddTask} />
      <TaskList
        tasks={tasks}
        onUpdate={handleUpdateTask}
        onDelete={handleDeleteTask}
      />
    </div>
  );
};

export default App;
