const express = require('express');
const protectRoute = require('../middleware/protectRoute')
const router = express.Router();

const requireToken = require('../middleware/requireToken');
const {sendMessage, getMessages} = require('../controllers/message');

router.get('/:id', protectRoute, getMessages)
router.post('/send/:id', protectRoute, sendMessage)

module.exports = router;