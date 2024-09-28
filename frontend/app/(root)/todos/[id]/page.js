'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { updateTodo } from '../../../utils/todos/api'; // Import the updateTodo function
import jwt_decode from 'jwt-decode';

export default function TodoEditor({ params }) {
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('High');
  const [isCompleted, setIsCompleted] = useState(false);
  const [token, setToken] = useState('');

  const router = useRouter();
  const id = params.id; // Define 'id' in the component's scope

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);
  }, []);

  const saveTodo = async () => {
    if (!token) {
      console.error('Token not available.');
      return;
    }

    const todoData = {
      dueDate,
      priority,
      isCompleted,
    };

    try {
      if (id) {
        // If 'id' exists, it's an update operation
        const response = await updateTodo(id, todoData, token); // Replace with appropriate function
        console.log('Todo updated successfully!');
      }

      router.push('/todos'); // Redirect to the '/todos' page
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow p-6 w-full md:w-2/3 lg:w-1/2">
        <h1 className="text-3xl font-semibold mb-4">Edit Todo</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            saveTodo();
          }}
        >
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
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}