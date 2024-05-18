import {useEffect, useState} from "react";
import axios from "axios";

const useGetUser = (id = '') => {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState([]);

    const token = localStorage.getItem("token");

    const getUser= async () => {
        setLoading(true);
        try {
            const res = await axios.get(`http://localhost:3000/api/auth/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setUser(res.data);
        } catch (error) {
            console.log(error.message)
            // toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        getUser();
    }, []);


    return {loading, user, fetchData: getUser}
};

export default useGetUser;