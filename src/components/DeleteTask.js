import React, { useState } from 'react';

const DeleteTasks = ({ task, onDelete, onUpdate }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedText, setEditedText] = useState(task.text);
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  const handleCheckboxChange = (event) => {
    setEditMode(false);
    setShowDeleteButton(event.target.checked); // Show delete button when checkbox is checked
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    setEditMode(false);
    onUpdate(task, editedText);
  };

  return (
    <li>
      <input type="checkbox" onChange={handleCheckboxChange} />
      {editMode ? (
        <>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSaveClick();
              }
            }}
          />
          <button onClick={handleSaveClick}>Save</button>
        </>
      ) : (
        <>
          <span
            onClick={handleEditClick}
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
          >
            {task.text}
          </span>
          {showDeleteButton && (
            <button onClick={() => onDelete(task)}>Delete</button>
          )}
        </>
      )}
    </li>
  );
};

export default DeleteTasks;
