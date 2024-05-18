import { useState } from "react";
import useConversation from "../zustand/useConversation";
import axios from "axios";

const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();

    const token = localStorage.getItem("token");

    const sendMessage = async (message) => {
        setLoading(true);
        try {
            const res  = axios.post(`/api/messages/send/${selectedConversation._id}`, {message}, {
                header:token
            })
            setMessages([...messages, res.data]);
        } catch (error) {
            // toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { sendMessage, loading };
};
export default useSendMessage;