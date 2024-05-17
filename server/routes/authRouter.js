const express = require('express');
const authenticationUser = require('../middleware/authentication');
const router = express.Router();

const {register, login, logout, getUser} = require('../controllers/auth');

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/', authenticationUser,  getUser)

module.exports = router;