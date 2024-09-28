import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';


const TodoWidget = ({ token, allTodos, router }) => { // Add `router` prop
  const [highestPriorityTasks, setHighestPriorityTasks] = useState([]);


  // Filter highest priority tasks
  useEffect(() => {
    const highPriorityTasks = allTodos.filter((todo) => todo.priority === 'High');
    setHighestPriorityTasks(highPriorityTasks);
  }, [allTodos]);

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <Typography variant="h5" gutterBottom className="text-2xl font-semibold text-gray-800">
        Highest Priority Tasks
      </Typography>
      <ul className="divide-y divide-gray-200">
        {highestPriorityTasks.map((task) => (
          <li key={task._id} className="py-4">
            <div className="text-lg font-medium text-gray-800">{task.title}</div>
            <div className="text-gray-600">{`Due: ${task.dueDate} | Priority: ${task.priority}`}</div>
          </li>
        ))}
      </ul>
      <button
        className="mt-4 px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg"
        onClick={() => router.push('/todos')}
      >
        View All Tasks
      </button>
    </div>
  );
};

export default TodoWidget;


