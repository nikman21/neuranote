const User = require('../../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const loginUser = async (req , res) => {
    const {email , password} = req.body;

    const user = await User.findOne({email});

    if(!user){
        return res.status(404).json({message : "User not found"});
    }

    const isPasswordCorrect = await bcrypt.compare(password , user.password);

    if(!isPasswordCorrect){
        return res.status(400).json({message : "Invalid credentials"});
    }

    const token = jwt.sign({email : user.email , id : user._id, username : user.username} , process.env.JWT_SECRET , {expiresIn : "7d"});
    res.status(200).json({
        result : user , 
        token: token,
        message: "Login successful"
    });

}

const LogoutUser = (req, res) => {
    try {
      // Clear the 'token' cookie
      res.clearCookie('token');
  
      res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
      res.status(500).json({ message: 'Error during logout' });
    }
};

module.exports = {
    loginUser,
    LogoutUser
};