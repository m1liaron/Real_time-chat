import {Outlet} from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar.jsx";

function App() {
    return (
        <div className="flex h-screen">
            <Sidebar className="w-52 bg-gray-800 text-white"/>
            <div className="flex-grow">
                <Outlet/>
            </div>
        </div>
    );
}

export default App;