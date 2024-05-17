const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = (req, res, next) => {
    const {authorization} = req;

    if (!authorization) {
        return res.status(401).send({error: "you must be logged in"})
    }
    const token = authorization.split(' ')[1];
    jwt.verify(token, process.env.JWT_SECRET, async(err, payload) => {
        if (err) {
            return res.status(401).send({error:  "you must be logged in"});
        }
        const {userId} = payload;
        const user = await User.findById(userId);
        req.user = user;
        next()
    })
}