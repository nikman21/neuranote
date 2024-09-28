const User = require('../../models/User');
const Note = require('../../models/Note');
const bcrypt = require('bcrypt');
require('dotenv').config();
const jwt = require('jsonwebtoken');


getAllUsers = (req, res) => {
    User.find()
        .then((users) => {
            res.status(200).json(users);
        }
    );
};

getUserById = (req, res) => {  
    const { id } = req.params;
    User.findById(id)
        .then((user) => {
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            return res.status(200).json(user);
        })
        .catch((error) => {
            return res.status(500).json({ message: "Error getting user by id", error: error.message });
    });
};

const addUser = async (req, res) => {
  const { email, password, confirmPassword, username } = req.body;

  // Validate the request body
  if (!email || !password || !confirmPassword || !username) {
    return res.status(400).json({ message: 'Missing required fields.' });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match.' });
  }

  // Check if the user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(409).json({ message: 'User already exists.' });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user
  const user = new User({
    email,
    password: hashedPassword,
    username,
  });

  // Save the user to the database
  await user.save();

  // Generate a JWT token
  const token = await jwt.sign({ id: user.id }, process.env.JWT_SECRET);

  // Set the token in the response cookie
  res.cookie('token', token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
  });

  // Return the user data
  res.status(200).json({
    user: {
      id: user.id,
      username: user.username, 
      email: user.email,
    },
    token,
  });
};

deleteUser = (req, res) => {
    const { id } = req.params;
    User.findByIdAndDelete(id)
        .then((user) => {
            res.status(200).json(user);
        }
    );
};

getUserNotes = async (req, res) => {

  const { id } = req.params;

  // Get the user
  const user = await User.findById(id);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  // Get the user's notes
  const notes = await Note.find({ userId: user.id });

  // Return the user's notes
  res.status(200).json(notes);

};



module.exports = {
    getAllUsers,
    getUserById,
    addUser,
    deleteUser,
    getUserNotes,
};


