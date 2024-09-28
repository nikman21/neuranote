'use client';
import jwt_decode from 'jwt-decode';
import { useState, useEffect } from 'react';
import { getUserNotes } from '../utils/users/api';
import DeleteButton from './Buttons/NoteButtons/deleteButton';
import EditButton from './Buttons/NoteButtons/editButton';

const AllNotes = ({ token }) => {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserNotes = async () => {
      try {
        // Get the user ID from the token
        const decodedToken = jwt_decode(token);
        const userId = decodedToken.id;
        
        // Fetch the user notes
        const userNotes = await getUserNotes(userId, token);
        setNotes(userNotes);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching user notes:', error);
        setIsLoading(false); // Handle the error and set isLoading to false
      }
    };

    fetchUserNotes();
  }, [token]);

  console.log('notes:', notes)

  const handleDeleteNote = (deletedNoteId) => {
    // Update the state to remove the deleted note
    setNotes((prevNotes) => prevNotes.filter((note) => note._id !== deletedNoteId));
  };


  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Add a key prop to each element in the notes array
  const notesWithKeys = notes.map((note, index) => (
    <li key={index} className="bg-gradient-to-r from-blue-500 to-blue-800  p-4 rounded-lg shadow-md mb-4">
       <h2 className="text-xl font-semibold text-gray-900">{note.title}</h2>
        <p className="text-sm text-gray-600 font-bold mb-2">{note.tags.join(', ')}</p>
        <div className="flex items-center space-x-4">
          <EditButton noteId={note._id} />
          <DeleteButton noteId={note._id} token={token} onDelete={handleDeleteNote} />
        </div>

    </li>
  ));

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-white mb-4">All Notes</h1>
        <ul>
          {notesWithKeys}
        </ul>

      </div>
    </div>
  );
};

export default AllNotes;