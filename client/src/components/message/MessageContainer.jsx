import useConversation from "../../zustand/useConversation.js";
import {useEffect} from "react";
import MessageList from "./MessageList.jsx";
import MessageInput from "./MessageInput.jsx";

const MessageContainer = () => {
    const { selectedConversation, setSelectedConversation} = useConversation()

    useEffect(() => {
        // cleanup function (unmounts)
        return () => setSelectedConversation(null);
    }, [setSelectedConversation]);

    return (
        <div className='flex-1 flex flex-col'>
            {!selectedConversation ? (
                <div
                    className="bg-cover bg-center w-full h-full flex-1"
                    style={{backgroundImage: 'url(https://i.pinimg.com/originals/71/95/2a/71952a761bae90c7b264c2ba27ba7ad9.jpg)'}}
                ></div>
            ) : (
                <>
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                        <img src={selectedConversation.profile_picture} alt={selectedConversation.name}
                             className="w-full h-full object-cover"/>
                    </div>
                    <div className="flex-grow">
                        <h1 className="text-lg font-semibold">{selectedConversation.name}</h1>
                        {/* Add additional details here if needed */}
                    </div>
                    <MessageList/>
                    <MessageInput/>
                </>
            )}
        </div>
    );
};

export default MessageContainer;