const express = require('express');
const router = express.Router();
const authorization = require('../middleware/authentication');

const {sendMessage, getMessages} = require('../controllers/message');

router.get('/:id', authorization, getMessages)
router.post('/send/:id', authorization, sendMessage)

module.exports = router;