const express = require('express');
const router = express.Router();

const LoginController = require('../../controllers/auth/loginController.js');

router.post('/loginUser', LoginController.loginUser);

router.post('/logoutUser', LoginController.LogoutUser);

module.exports = router;
