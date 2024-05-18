const { StatusCodes } = require('http-status-codes');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const register = async (req, res) => {
    try{
        const {email, username} = req.body;
        const findUser = await User.findOne({email})

        if(findUser){
            return res.status(400).json({error: 'user already exist'});
        }

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`

        const userData = {
            ...req.body,
            profile_picture:boyProfilePic // Include boyProfilePic in userData
        };

        console.log(userData)

        const user = await User.create(userData);
        const token = user.createJWT();

        res.status(StatusCodes.CREATED).json({user: {name: user.name, profile_picture: user.profile_picture}, token});
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error:'Register failed. Please try again'});
    }
}

const login = async (req, res) => {
    try{
        const { email, password } = req.body;
        if(!email || !password){
            return res.status(StatusCodes.BAD_REQUEST).json({ error: 'Please provide email and password' });
        }

        const user = await User.findOne({email});
        if(!user){
            return res.status(StatusCodes.UNAUTHORIZED).json({ error: 'Invalid credentials' });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if(!isPasswordCorrect){
            return res.status(StatusCodes.UNAUTHORIZED).json({ error: 'Invalid credentials' });
        }

        const token = user.createJWT();
        const {name, username, profile_picture} = user
        res.status(StatusCodes.CREATED).json({user:{name,username, email: user.email, profile_picture}, token});
    } catch(error){
        console.error('Error logging in user:', error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Login failed. Please try again later.' });
    }
}

const getUser = async (req, res) => {
    try{
        const user = await User.findOne({ _id:req.user.userId });

        if(!user){
            throw new Error('User not found');
        }

        const {name, email, profile_picture} = user

        res.status(200).json({user: {name, email, profile_picture}});
    } catch(error){
        console.error('Error getting user data:', error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
    }
}

const logout = async (req, res) => {
    try{
        res.cookie("jwt", "", { maxAge: 0});
        res.status(200).json({message: 'Logged out'});
    } catch (error){
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    register,
    login,
    logout,
    getUser
}