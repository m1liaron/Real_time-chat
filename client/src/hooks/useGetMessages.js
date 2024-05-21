import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import axios from "axios";
import toast from "react-hot-toast";

const useGetMessages = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();

    const token = localStorage.getItem("token");

    useEffect(() => {
        const getMessages = async () => {
            setLoading(true);
            try {
                const res = await axios.get(`https://real-time-chat-jolxz2tjp-vlads-projects-d23fb6e2.vercel.app/api/messages/${selectedConversation._id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setMessages(res.data);
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        };

        if (selectedConversation?._id) getMessages();
    }, [selectedConversation?._id, setMessages]);

    return { messages, loading };
};
export default useGetMessages;