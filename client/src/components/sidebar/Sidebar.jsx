import Conversations from "./Conversations.jsx";
import {useAuthContext} from "../../context/AuthContext.jsx";
import SearchInput from "./SearchInput.jsx";

const Sidebar = () => {
    const { setUser } = useAuthContext();

    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('chat-user')
        setUser(null)
    }

    return (
        <div className='p-9'>
            <SearchInput/>
            <Conversations/>
            <button onClick={logout}>
                log out
            </button>
        </div>
    );
};

export default Sidebar;