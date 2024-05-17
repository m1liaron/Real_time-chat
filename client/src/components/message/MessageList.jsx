import React from 'react';
import Message from "./Message.jsx";
import MessageInput from "./MessageInput.jsx";

const MessageList = () => {
    return (
        <div>
            <Message/>
            <div className="mt-auto"> {/* Ensures MessageInput sticks to the bottom */}
                <MessageInput/>
            </div>
        </div>
    );
};

export default MessageList;