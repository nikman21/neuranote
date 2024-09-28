

const createJournal = async (data, token) => {
  try {
    const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/journals/createJournal`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      console.error('Error with Journal API call:', response);
      throw new Error('Network response was not ok');
    }

    return response.json();
  } catch (error) {
    console.error('Error during createJournal:', error);
    throw error;
  }
};

const getJournals = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/journals/journals`, {
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
    console.error('Error fetching journals:', error);
    throw error;
  }
};

const deleteJournal = async (id) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/journals/deleteJournal/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw Error('Network response was not ok');
    }

    return response.json();
  } catch (error) {
    console.error('Error deleting journal:', error);
    throw error;
  }
};

const updateJournal = async (id, data) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/journals/updateJournal/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.json();
  } catch (error) {
    console.error('Error updating journal:', error);
    throw error;
  }
};

const getJournalById = async (id) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/journals/journals/${id}`, {
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
    console.error('Error fetching journal:', error);
    throw error;
  }
};

module.exports = {
  createJournal,
  getJournals,
  deleteJournal,
  updateJournal,
  getJournalById,
};
