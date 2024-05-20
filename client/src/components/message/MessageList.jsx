import Message from "./Message.jsx";
import useGetMessages from "../../hooks/useGetMessages.js";
import {useEffect, useRef} from "react";
import useListenMessages from "../../hooks/useListenMessages.js";

const MessageList = () => {
    const {messages, loading} = useGetMessages()
    useListenMessages()
    const lastMessageRef = useRef();

    useEffect(() => {
        if (messages.length) {
            lastMessageRef.current?.scrollIntoView();
        }
    }, [messages]);

    return (
        <div
            className='w-full h-full overflow-auto bg-cover bg-center'
        >
            {loading ? (
                <span className='loading loading-spinner mx-auto'></span>
            ) : messages.length ? (
                <div className='p-5'>
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
                <div className='flex justify-center text-cyan-300'>No messages available</div>
            )}
        </div>
    );
};

export default MessageList;