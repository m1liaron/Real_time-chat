import useGetConversations from "../../hooks/useGetConversations.js";
import Conversation from "./Conversation.jsx";

const Conversations = () => {
    const {loading, conversations} = useGetConversations();

    return (
        <div className='py-2 flex flex-col overflow-auto'>
            {loading && <span className='loading loading-spinner mx-auto'></span>}
            {conversations.map((conversation) => (
                <Conversation conversation={conversation} key={conversation._id}/>
            ))}
        </div>
    );
};

export default Conversations;