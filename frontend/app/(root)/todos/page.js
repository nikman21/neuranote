"use client";
import { useState, useEffect } from "react";
import AllTodos from "../../components/allTodos"; // Assuming you have an AllTodos component for displaying todos
import { useRouter } from "next/navigation";

const Todos = () => {
    const [token, setToken] = useState('');
    const router = useRouter();

    const handleCreateTodoButton = () => {
        router.push('/createTodo'); // Assuming you have a route for creating todos
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
            <AllTodos token={token} /> 
            <div>
                <button
                    className="bg-blue-500 mt-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleCreateTodoButton}
                >
                    Create Todo
                </button>
            </div>
        </div>
    );
};

export default Todos;

