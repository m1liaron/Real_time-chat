const mongoose = require('mongoose');

const ConversationSchema = new mongoose.Schema({
        participants:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        messages:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Message',
                default: []
            }
        ]
})

const Message = mongoose.model('Conversation', ConversationSchema)

module.exports = Message;