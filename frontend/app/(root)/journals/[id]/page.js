'use client';
import { useEffect, useState } from 'react';
import { getJournalById, updateJournal } from '../../../utils/journals/api'; // Import the appropriate functions for journals
import { useRouter } from 'next/navigation';
import TextEditor from '../../../components/textEditor';

export default function Journal({ params }) {
  const [journal, setJournal] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState([]); // State for existing tags
  const router = useRouter();
  const id = params.id; // Define 'id' in the component's scope

  useEffect(() => {
    if (id) {
      const fetchJournal = async () => {
        try {
          const fetchedJournal = await getJournalById(id); // Use getJournalById function
          setJournal(fetchedJournal);
          setTitle(fetchedJournal.title);
          setContent(fetchedJournal.content);
          setTags(fetchedJournal.tags);
        } catch (error) {
          console.error('Error fetching journal:', error);
        }
      };

      fetchJournal();
    }
  }, [id]);

  const saveEntry = async () => {
    const id = params.id;
  
    // Save the journal with the updated tags
    const journalEntry = {
      title,
      tags,
      content,
    };
  
    try {
      const response = await updateJournal(id, journalEntry); // Use updateJournal function
      if (response) {
        router.push('/journals'); // Redirect to the '/journals' page
      } else {
        console.log('Journal update failed.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Function to extract tags from content
  const extractTagsFromContent = (content) => {
    const newTags = [];
    const tagRegex = /\[(.*?)\]/g;
    const matches = content.match(tagRegex);
  
    if (matches) {
      for (const match of matches) {
        newTags.push(match.slice(1, -1));
      }
    }
  
    return newTags;
  };
  
  // Update tags when content changes
  useEffect(() => {
    const newTags = extractTagsFromContent(content);
    setTags(newTags);
  }, [content]);

  return (
    <div className="">
      <button
        onClick={saveEntry}
        className="mb-2 bg-blue-500 text-white rounded py-2 px-4 hover.bg-blue-700"
      >
        Save Journal
      </button>

      <div className="">
        <label htmlFor="title" className="block text-gray-600">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 p-2"
          required
        />
      </div>

      <div className="mb-4">
        <TextEditor value={content} onChange={setContent} />
      </div>
    </div>
  );
}
