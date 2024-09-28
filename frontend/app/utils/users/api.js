
const getUserById = async (id) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return response.json();
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
}

const getUserNotes = async (id, token) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/notes/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` // Pass the JWT token in the 'Authorization' header
            }
        });

        console.log(response);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return response.json();
    } catch (error) {
        console.error('Error fetching user notes:', error);
        throw error;
    }
}


  

module.exports = {
    getUserById,
    getUserNotes,
}

