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
            const res  = axios.post(`http://localhost:3000/api/messages/send/${selectedConversation._id}`, {message}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
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