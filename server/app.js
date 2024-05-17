require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser())
app.use(cors());

const connectDB = require('./db/connect')

// Routes
const authRouter = require('./routes/authRouter');
const messageRouter = require('./routes/messageRouter');
const userRouter = require('./routes/userRoutes');
app.use('/api/auth', authRouter)
app.use('/api/messages', messageRouter)
app.use('/api/users', userRouter)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`);
        });
    } catch (error) {
        console.error('Error starting the server:', error);
    }
};

start();