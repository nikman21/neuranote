

const loginUser = async (data) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/loginUser`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      
      console.log('Response:', response);
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      return response.json();
    } catch (error) {
      console.error('Error with login API call:', error);
      throw error;
    }
  };

  const signUp = async (data) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/createUsers`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error with Signup API call:', errorData);
            throw new Error(`Network response was not ok: ${errorData.message}`);
        }

        return response.json();
    } catch (error) {
        console.error('Error during signup:', error);
        throw error;
    }
}


const forgotPassword = async () => {
    try {
      const response = await fetch('/api/forgotPassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage('Password reset email sent. Check your inbox.');
      } else {
        setMessage('Error: Unable to send reset email.');
      }
    } catch (error) {
      console.error('Error sending reset email:', error);
      setMessage('Error: Unable to send reset email.');
    }
};

const resetPassword = async () => {
    try {
        const response = await fetch('/api/passwordRecovery/resetPassword', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ password, token }),
        });
    } catch (error) {
        console.error('Error resetting password:', error);
        setMessage('Error: Unable to reset password.');
    }
};


const logoutUser = async () => {
  try{
    const response = await fetch('/api/auth/logoutUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },  
    });
  } catch (error) {
    console.error('Error logging out:', error);
    throw error;
  }
}
module.exports = {
    loginUser,
    signUp,
    forgotPassword,
    resetPassword,
    logoutUser,
}
