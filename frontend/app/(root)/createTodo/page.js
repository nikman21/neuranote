'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createTodo } from '../../utils/todos/api';
import jwt_decode from 'jwt-decode';

function CreateTodo() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('High');
  const [isCompleted, setIsCompleted] = useState(false);

  const router = useRouter();

  // Use state to store the token
  const [token, setToken] = useState('');

  // Use useEffect to get the token from localStorage on the client side
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);
  }, []);

  const saveTodo = async () => {
    if (!token) {
      console.error('Token not available.');
      return;
    }

    const decodedToken = jwt_decode(token);
    const userId = decodedToken.id;

    const todoData = {
      userId,
      title,
      description,
      dueDate,
      priority,
      isCompleted,
    };

    try {
      console.log('Creating todo...');
      const response = await createTodo(todoData, token);
      console.log('Todo created successfully!');
      if (response) {
        router.push('/todos'); // Redirect to the '/todos' page
        // Reset form fields if needed
        setTitle('');
        setDescription('');
        setDueDate('');
        setPriority('');
        setIsCompleted(false);
      } else {
        console.log('Todo creation failed.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen  flex items-center justify-center">
      <div className="bg-white rounded-lg shadow p-6 w-full md:w-2/3 lg:w-1/2">
        <h1 className="text-3xl font-semibold mb-4">Create a New Todo</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            saveTodo();
          }}
        >
          <div className="mb-4">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 rounded border border-gray-300"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 rounded border border-gray-300"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="date"
              placeholder="Due Date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full p-3 rounded border border-gray-300"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="priority">Priority:</label>
            <select
              id="priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full p-3 rounded border border-gray-300"
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="isCompleted">Completed:</label>
            <input
              type="checkbox"
              id="isCompleted"
              checked={isCompleted}
              onChange={(e) => setIsCompleted(e.target.checked)}
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-700"
          >
            Save Todo
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateTodo;


