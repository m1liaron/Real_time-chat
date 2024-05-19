import {useAuthContext} from "../../context/AuthContext.jsx";

const Message = ({message}) => {
    const {user} = useAuthContext()

    const fromMe = message.senderId === user._id;
    const chatClassName = fromMe ? "chat-end" : "chat-start";

    console.log(user)

    return (
            <div
                className={`chat ${chatClassName}`}
            >
                <div className="chat-image avatar">
                    {/*<div className="w-10 rounded-full">*/}
                    {/*    <img alt="Tailwind CSS chat bubble component"*/}
                    {/*         src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/>*/}
                    {/*</div>*/}
                </div>
                {/*<div className="chat-header">*/}
                {/*    Obi-Wan Kenobi*/}
                {/*    <time className="text-xs opacity-50">12:45</time>*/}
                {/*</div>*/}
                <div className="chat-bubble">{message.message}</div>
                {/*<div className="chat-footer opacity-50">*/}
                {/*    Delivered*/}
                {/*</div>*/}
            </div>
    );
};

export default Message;