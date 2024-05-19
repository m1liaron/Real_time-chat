import Message from "./Message.jsx";
import useGetMessages from "../../hooks/useGetMessages.js";
import {useEffect, useRef} from "react";

const MessageList = () => {
    const {messages, loading} = useGetMessages()

    const lastMessageRef = useRef();

    useEffect(() => {
        if (messages.length) {
            lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    return (
        <div>
            {loading ? (
                <span className='loading loading-spinner mx-auto'></span>
            ) : messages.length ? (
                <div>
                    {messages.map((message, idx) => (
                        message && message._id ? (
                            <div key={message._id} ref={idx === messages.length - 1 ? lastMessageRef : null}>
                                <Message
                                    message={message}
                                />
                            </div>
                        ) : null
                    ))}
                </div>
            ) : (
                <div>No messages available</div>
            )}
        </div>
    );
};

export default MessageList;