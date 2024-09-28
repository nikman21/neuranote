'use client';
import { useState, useEffect } from 'react';
import AllJournals from '../../components/allJournals';
import { useRouter } from 'next/navigation';

const Journals = () => {
  const [token, setToken] = useState('');
  const router = useRouter();

  const handleCreateJournalButton = () => {
    router.push('/createJournal');
  };

  // Get the token from local storage
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    console.log('Stored token: ', storedToken);
    setToken(storedToken);
  }, []);

  if (!token) {
    console.error('Token not available.');
    return;
  }

  return (
    <div>
      <AllJournals token={token} />
      <div>
        <button
          className="bg-blue-500 mt-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleCreateJournalButton}
        >
          Create Journal
        </button>
      </div>
    </div>
  );
};

export default Journals;
