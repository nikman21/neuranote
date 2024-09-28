"use client";
import { useState, useEffect } from "react";
import AllNotes from "../../components/allNotes";
import { useRouter } from "next/navigation";

const Notes = () => {
    const [token, setToken] = useState('');
    const router = useRouter();

    const HandleCreateNoteButton = () => {
        router.push('/createNotes');
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
        <AllNotes token={token} />
        <div>
            <button className="bg-blue-500 mt-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"  onClick={HandleCreateNoteButton}> Create Note </button>
        </div>
      </div>
      
      

    
    );
};


export default Notes;



