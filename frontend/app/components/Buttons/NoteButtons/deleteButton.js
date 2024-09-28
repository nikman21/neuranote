// DeleteButton.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { deleteNote } from '@/app/utils/notes/api';

const DeleteButton = ({ noteId, token, onDelete }) => {
    const [isDeleting, setIsDeleting] = useState(false);
  
  
    const handleDelete = async () => {
      if (!noteId) {
        console.error('Invalid noteId:', noteId);
        return;
      }
  
      setIsDeleting(true);
      try {
        await deleteNote(noteId, token);
        onDelete(noteId); // Notify the parent component that the note is deleted
      } catch (error) {
        console.error('Error deleting note:', error);
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
    noteId: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
  };
  
  export default DeleteButton;
  
  
  
  
  
  