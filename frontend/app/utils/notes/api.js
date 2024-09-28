const API_URL = 'http://localhost:3001';

const createNote = async (data, token) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/notes/createNote`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` // Pass the JWT token in the 'Authorization' header
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            console.error('Error with Note API call:', response); // Use 'response' instead of 'responseData'
            throw new Error('Network response was not ok');
        }

        return response.json();
    } catch (error) {
        console.error('Error during createNote:', error);
        throw error;
    }
}


const getNotes = async () => {  
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/notes/notes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      return response.json();
    } catch (error) {
      console.error('Error fetching notes:', error);
      throw error;
    }
}

const deleteNote = async (id) => {

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/notes/deleteNote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if (!response.ok) {
            throw Error('Network response was not ok');
        }

        return response.json();
    } catch (error) {
        console.error('Error deleting note:', error);
        throw error;
    }
}

const updateNote = async (id, data) => {
    try {
        const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/notes/updateNote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return response.json();
    } catch (error) {
        console.error('Error updating note:', error);
        throw error;
    }
}

const getNoteById = async (id) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/notes/notes/${id}` , {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return response.json();
    } catch (error) {
        console.error('Error fetching note:', error);
        throw error;
    }
}

module.exports = {
    createNote,
    getNotes,
    deleteNote,
    updateNote,
    getNoteById
}
