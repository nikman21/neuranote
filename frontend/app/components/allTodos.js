import { useState, useEffect } from 'react';
import { getTodos } from '../utils/todos/api';
import DeleteButton from './Buttons/TodoButtons/deleteButton';
import EditButton from './Buttons/TodoButtons/editButton';
import jwt_decode from 'jwt-decode';

const AllTodos = ({ token }) => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserTodos = async () => {
      try {
        const decodedToken = jwt_decode(token);
        const userId = decodedToken.id;
        const userTodos = await getTodos(userId, token);
        setTodos(userTodos);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching user todos:', error);
        setIsLoading(false);
      }
    };

    fetchUserTodos();
  }, [token]);

  const handleDeleteTodo = (deletedTodoId) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo._id !== deletedTodoId));
  };

  if (isLoading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const todosWithKeys = todos.map((todo, index) => (
    <div key={index} className="mb-4 p-4 rounded-lg shadow-md bg-white">
      <h2 className="text-2xl text-gray-800 font-semibold mb-2">{todo.title}</h2>
      <p className="text-gray-600">{todo.description}</p>
      <p className="text-gray-600">
        Due Date: {formatDate(todo.dueDate)}
      </p>
      <p className="text-gray-600">Priority: {todo.priority}</p>
      <p className={`text-gray-600 ${todo.isCompleted ? 'text-green-600' : 'text-red-600'}`}>
        {todo.isCompleted ? 'Completed' : 'Not Completed'}
      </p>
      <div className="flex flex-row gap-3 items-center mt-2 ">
        <DeleteButton todoId={todo._id} token={token} onDelete={handleDeleteTodo} />
        <EditButton todoId={todo._id} />
      </div>
    </div>
  ));

  return (
    <div>
      <h1 className="text-3xl text-gray-800 font-semibold mb-4">All Todos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {todosWithKeys}
      </div>
    </div>
  );
};

export default AllTodos;
