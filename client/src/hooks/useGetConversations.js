import {useEffect, useState} from "react";

const useGetConversations = () => {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        const getConversations = async () => {
            setLoading(true);
            try {
                const res = await fetch("http://localhost:3000/api/users");
                const data = await res.json();
                if (data.error) {
                    throw new Error(data.error);
                }
                setConversations(data);
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