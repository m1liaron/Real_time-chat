import { useState } from "react";
import useConversation from "../zustand/useConversation";
import axios from "axios";
import toast from "react-hot-toast";

const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();

    const token = localStorage.getItem("token");

    const sendMessage = async (message) => {
        setLoading(true);
        try {
            axios.post(`/api/messages/send/${selectedConversation._id}`, {message}, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                }
            }).then((response) => {
                console.log(response.data)
                setMessages([...messages, response.data]);
            })
        } catch (error) {
            toast.error(error.message);
            console.error("Error sending message:", error)
        } finally {
            setLoading(false);
        }
    };

    return {loading, sendMessage };
};
export default useSendMessage;

// http://localhost:3000