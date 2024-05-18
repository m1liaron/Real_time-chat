import {useParams} from "react-router-dom";
import useConversation from "../zustand/useConversation.js";
import MessageList from "../components/message/MessageList.jsx";

const ConversationPage = () => {
    const { id } = useParams();

    const {selectedConversation, setSelectedConversation} = useConversation();

    console.log(selectedConversation)

    return (
        <div className='p-20'>

            {selectedConversation && (
                <div className="flex items-center space-x-4 py-2 px-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                        <img src={selectedConversation.profile_picture} alt={selectedConversation.username}
                             className="w-full h-full object-cover"/>
                    </div>
                    <div className="flex-grow">
                        <h1 className="text-lg font-semibold">{selectedConversation.username}</h1>
                        {/* Add additional details here if needed */}
                    </div>
                </div>
            )}

             <MessageList id={id}/>
        </div>
    );
};

export default ConversationPage;