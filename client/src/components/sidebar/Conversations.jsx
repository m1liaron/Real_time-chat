import useGetConversations from "../../hooks/useGetConversations.js";
import {NavLink} from "react-router-dom";
import useConversation from "../../zustand/useConversation.js";

const Conversations = () => {
    const {loading, conversations} = useGetConversations();

    const { setSelectedConversation} = useConversation();

    return (
        <div className='py-2 flex flex-col overflow-auto'>
            {loading && <span className='loading loading-spinner mx-auto'></span>}
            {conversations.map((conversation) => (
                <NavLink to={`conversation/${conversation._id}`} key={conversation._id} onClick={() => setSelectedConversation(conversation)}>
                    <div key={conversation._id} className="flex items-center space-x-4 py-2 px-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden">
                            <img src={conversation.profile_picture} alt={conversation.name}
                                 className="w-full h-full object-cover"/>
                        </div>
                        <div className="flex-grow">
                            <h1 className="text-lg font-semibold">{conversation.name}</h1>
                            {/* Add additional details here if needed */}
                        </div>
                    </div>
                </NavLink>
            ))}
        </div>
    );
};

export default Conversations;