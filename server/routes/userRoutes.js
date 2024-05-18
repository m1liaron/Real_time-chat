const express = require('express');
const router = express.Router();
const authorization = require('../middleware/authentication');

const {getUsers} = require("../controllers/users");

router.get('/', authorization, getUsers)

module.exports = router;