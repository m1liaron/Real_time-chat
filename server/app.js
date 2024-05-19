require('dotenv').config()
const express = require('express');
const {app, server} = require('./socket/socket');
const cors = require('cors');
const cookieParser = require('cookie-parser');
// routes import
const authRouter = require('./routes/authRouter');
const messageRouter = require('./routes/messageRouter');
const userRouter = require('./routes/userRoutes');

const connectDB = require('./db/connect')
const port = 5000;

app.use(express.json());
app.use(cookieParser())
app.use(cors());

// Routes
app.use('/api/auth', authRouter)
app.use('/api/messages', messageRouter)
app.use('/api/users', userRouter)

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