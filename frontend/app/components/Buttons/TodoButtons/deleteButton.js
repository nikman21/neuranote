// DeleteButton.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { deleteTodo } from '../../../utils/todos/api'; // Assuming you have a function for deleting todos

const DeleteButton = ({ todoId, token, onDelete }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (!todoId) {
      console.error('Invalid todoId:', todoId);
      return;
    }

    setIsDeleting(true);
    try {
      await deleteTodo(todoId, token); // Call the function for deleting todos
      onDelete(todoId); // Notify the parent component that the todo is deleted
    } catch (error) {
      console.error('Error deleting todo:', error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <button
      className={`${
        isDeleting ? 'bg-gray-400' : 'bg-red-500 hover:bg-red-700'
      } text-white font-bold py-2 px-4 rounded`}
      onClick={handleDelete}
      disabled={isDeleting}
    >
      {isDeleting ? 'Deleting...' : 'Delete'}
    </button>
  );
};

DeleteButton.propTypes = {
  todoId: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
