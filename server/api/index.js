require('dotenv').config()
const express = require('express');
const path = require('path');
const {app, server} = require('../socket/socket');
const cors = require('cors');
// routes import
const authRouter = require('../routes/authRouter');
const messageRouter = require('../routes/messageRouter');
const userRouter = require('../routes/userRoutes');

const connectDB = require('../db/connect')
const port = 5000;

app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRouter)
app.use('/api/messages', messageRouter)
app.use('/api/users', userRouter)

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        server.listen(port, () => {
            console.log(`Server is listening on port ${port}...`);
        });
    } catch (error) {
        console.error('Error starting the server:', error);
    }
};

start();
module.exports = app;