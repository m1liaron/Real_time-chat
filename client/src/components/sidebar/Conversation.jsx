import {useSocketContext} from "../../context/SocketContext.jsx";
import useConversation from "../../zustand/useConversation.js";
import {useEffect} from "react";
import {NavLink} from "react-router-dom";

const Conversation = ({conversation}) => {
    const { selectedConversation, setSelectedConversation } = useConversation();
    const {onlineUsers} = useSocketContext();
    const isOnline = onlineUsers.includes(conversation._id)
    const isSelected = selectedConversation?._id === conversation._id;

    return (
        <>
            <NavLink
                className={`flex gap-2 items-center hover:bg-sky-600 rounded p-2 py-1 cursor-pointer
				${isSelected ? "bg-sky-500" : ""}
			`}
                onClick={() => setSelectedConversation(conversation)}
            >
                <div className={`avatar ${isOnline ? "online" : ""}`}>
                    <div className='w-12 rounded-full'>
                        <img src={conversation.profile_picture} alt='user avatar' />
                    </div>
                </div>

                <div className='flex flex-col flex-1'>
                    <div className='flex gap-3 justify-between'>
                        <p className='font-bold text-gray-200'>{conversation.username}</p>
                    </div>
                </div>
            </NavLink>

        </>
    );
};

export default Conversation;