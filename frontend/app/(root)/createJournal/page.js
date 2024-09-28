'use client';

import jwt_decode from 'jwt-decode';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createJournal } from '../../utils/journals/api'; // Import the createJournal function
import TextEditor from '../../components/textEditor';

function CreateJournal() {
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState([]);
  const [content, setContent] = useState('');
  const [newTag, setNewTag] = useState('');

  const router = useRouter();

  // Use state to store the token
  const [token, setToken] = useState('');

  // Use useEffect to get the token from localStorage on the client side
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    console.log(storedToken);
    setToken(storedToken);
  }, []);

  const saveEntry = async () => {
    if (!token) {
      console.error('Token not available.');
      return;
    }

    // Decoding the token to get the user ID
    const decodedToken = jwt_decode(token);
    const userId = decodedToken.id;

    const journalEntry = {
      userId,
      title,
      tags,
      content,
    };

    console.log('Journal entry: ', journalEntry);

    try {
      console.log('Creating journal...');
      const response = await createJournal(journalEntry, token); // Use createJournal function
      console.log('Journal created successfully!');
      if (response) {
        router.push('/journals'); // Redirect to the '/journals' page
        setTitle('');
        setTags([]);
        setContent('');
      } else {
        console.log('Journal creation failed.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const extractTagsFromContent = (content) => {
    const tags = [];
    const tagRegex = /\[(.*?)\]/g;
    const matches = content.match(tagRegex);

    if (matches) {
      for (const match of matches) {
        tags.push(match.slice(1, -1));
      }
    }
    return tags;
  };

  useEffect(() => {
    const tags = extractTagsFromContent(content);
    setTags(tags);
  }, [content]);

  return (
    <div className="w-full">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          saveEntry();
        }}
        className="bg-gray-900 p-6 rounded shadow-md"
      >
        <div className="mb-4">
          <input
            type="text"
            placeholder="Title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-gray-800 text-white p-2 rounded border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <TextEditor value={content} onChange={setContent} />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover.bg-blue-700 text-white rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Save Journal
        </button>
      </form>
    </div>
  );
}

export default CreateJournal;
