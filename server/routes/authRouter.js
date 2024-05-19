const express = require('express');
const authorization = require('../middleware/authentication');
const router = express.Router();

const {register, login, logout, getUser} = require('../controllers/auth');

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/:id', authorization,  getUser)

module.exports = router;