const express = require('express');
const router = express.Router();

const UserController = require('../../controllers/users/userController.js');
const verifyToken = require('../../middleware/auth/verifyToken.js');

router.get('/getUsers', UserController.getAllUsers);

router.get('/users/:id', UserController.getUserById);

router.post('/createUsers', UserController.addUser);

router.get('/notes/:id', verifyToken, UserController.getUserNotes);

router.delete('/users/:id', UserController.deleteUser);


module.exports = router;

