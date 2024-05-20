import {useEffect, useState} from "react";
import axios from "axios";

const useGetConversations = () => {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const getConversations = async () => {
            setLoading(true);
            try {
                const res = await axios.get("https://real-time-chat-rlprhdgz9-vlads-projects-d23fb6e2.vercel.app/api/users", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setConversations(res.data);
            } catch (error) {
                console.log(error.message)
                // toast.error(error.message);
            } finally {
                setLoading(false);
            }
        };

        getConversations();
    }, []);


    return {loading, conversations}
};

export default useGetConversations;