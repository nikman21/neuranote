import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/navigation';

const EditButton = ({ todoId }) => {
  const router = useRouter();

  const handleEdit = () => {
    router.push(`/todos/${todoId}`); // Assuming todos can be edited at a specific route
  };

  return (
    <button
      className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleEdit}
    >
      Edit
    </button>
  );
};

EditButton.propTypes = {
  todoId: PropTypes.string.isRequired,
};

export default EditButton;
