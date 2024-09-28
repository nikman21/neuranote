'use client';
import jwt_decode from 'jwt-decode';
import { useState, useEffect } from 'react';
import { getJournals } from '../utils/journals/api'; // You need to create this API function
import DeleteButton from './Buttons/JournalButtons/deleteButton'; // Create a DeleteButton component for journals
import EditButton from './Buttons/JournalButtons/editButton'; // Create an EditButton component for journals

const AllJournals = ({ token }) => {
  const [journals, setJournals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserJournals = async () => {
      try {
        // Get the user ID from the token
        const decodedToken = jwt_decode(token);
        const userId = decodedToken.id;

        // Fetch the user journals
        const userJournals = await getJournals(userId, token);
        setJournals(userJournals);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching user journals:', error);
        setIsLoading(false); // Handle the error and set isLoading to false
      }
    };

    fetchUserJournals();
  }, [token]);

  const handleDeleteJournal = (deletedJournalId) => {
    // Update the state to remove the deleted journal
    setJournals((prevJournals) => prevJournals.filter((journal) => journal._id !== deletedJournalId));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Add a key prop to each element in the journals array
  const journalsWithKeys = journals.map((journal, index) => (
    <li key={index} className="bg-gradient-to-r from-blue-500 to-blue-800 p-4 rounded-lg shadow-md mb-4">
      <h2 className="text-xl font-semibold text-gray-900">{journal.title}</h2>
      <p className="text-sm text-gray-600 font-bold mb-2">{journal.tags.join(', ')}</p>
      <div className="flex items-center space-x-4">
        <EditButton journalId={journal._id} /> {/* Pass the journal ID instead of note ID */}
        <DeleteButton journalId={journal._id} token={token} onDelete={handleDeleteJournal} /> {/* Pass the journal ID and token */}
      </div>
    </li>
  ));

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-white mb-4">All Journals</h1>
        <ul>{journalsWithKeys}</ul>
      </div>
    </div>
  );
};

export default AllJournals;
