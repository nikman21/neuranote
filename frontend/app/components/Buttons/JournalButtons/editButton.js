import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/navigation';

const EditButton = ({ journalId }) => {
  const router = useRouter();

  const handleEdit = () => {
    router.push(`/journals/${journalId}`); // Use the appropriate route for editing journals
  };

  return (
    <button
      className="bg-yellow-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleEdit}
    >
      Edit
    </button>
  );
};

EditButton.propTypes = {
  journalId: PropTypes.string.isRequired,
};

export default EditButton;
