import {useAuthContext} from "../../context/AuthContext.jsx";
import useConversation from "../../zustand/useConversation.js";

const Message = ({message}) => {
    const {user} = useAuthContext()
    const {selectedConversation} = useConversation()

    const fromMe = message.senderId === user._id;
    const chatClassName = fromMe ? "chat-end" : "chat-start";
    const profilePic = fromMe ? user.profile_picture : selectedConversation?.profile_picture;
    // console.log(user)

    return (
        <div className={`chat ${chatClassName}`}>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img alt='Tailwind CSS chat bubble component' src={profilePic}/>
                </div>
            </div>
            <div className="chat-bubble" style={{maxWidth: "70%", wordWrap: "break-word"}}>
                <p style={{overflowWrap: "break-word", wordWrap: "break-word" }}>{message.message}</p>
            </div>
        </div>
    );
};

export default Message;