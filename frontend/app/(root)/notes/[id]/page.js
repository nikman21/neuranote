'use client';
import { useEffect, useState } from 'react';
import { getNoteById, updateNote } from '../../../utils/notes/api';
import { useRouter } from 'next/navigation';
import TextEditor from '../../../components/textEditor';

export default function Note({ params }) {
  const [note, setNote] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState([]); // State for existing tags
  const router = useRouter();
  const id = params.id; // Define 'id' in the component's scope

  useEffect(() => {
    if (id) {
      const fetchNote = async () => {
        try {
          const fetchedNote = await getNoteById(id);
          setNote(fetchedNote);
          setTitle(fetchedNote.title);
          setContent(fetchedNote.content);
          setTags(fetchedNote.tags);
        } catch (error) {
          console.error('Error fetching note:', error);
        }
      };

      fetchNote();
    }
  }, [id]);

  const saveEntry = async () => {
    const id = params.id;
  
    // Save the note with the updated tags
    const noteEntry = {
      title,
      tags,
      content,
    };
  
    try {
      const response = await updateNote(id, noteEntry);
      if (response) {
        router.push('/notes');
      } else {
        console.log('Note update failed.');
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
        Save Note
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






