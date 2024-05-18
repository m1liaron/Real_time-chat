import Message from "./Message.jsx";
import MessageInput from "./MessageInput.jsx";
import useGetMessages from "../../hooks/useGetMessages.js";

const MessageList = ({id}) => {
    const {data, loading, error} = useGetMessages(id)

    // console.log(data)

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