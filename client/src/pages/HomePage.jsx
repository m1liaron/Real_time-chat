import Sidebar from "../components/sidebar/Sidebar.jsx";
import MessageContainer from "../components/message/MessageContainer.jsx";

const HomePage = () => {
    return (
        <div
            className='flex h-screen rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <Sidebar/>
            <MessageContainer/>
        </div>
    );
};

export default HomePage;