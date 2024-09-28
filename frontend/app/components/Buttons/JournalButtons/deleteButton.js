// DeleteButton.js for Journals
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { deleteJournal } from '@/app/utils/journals/api'; // Import the appropriate delete function for journals

const DeleteButton = ({ journalId, token, onDelete }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (!journalId) {
      console.error('Invalid journalId:', journalId);
      return;
    }

    setIsDeleting(true);
    try {
      await deleteJournal(journalId, token); // Use the deleteJournal function
      onDelete(journalId); // Notify the parent component that the journal is deleted
    } catch (error) {
      console.error('Error deleting journal:', error);
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
  journalId: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
