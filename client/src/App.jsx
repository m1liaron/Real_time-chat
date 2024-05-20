import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import {useAuthContext} from "./context/AuthContext.jsx";

const HomePoint = () => {
    const { user } = useAuthContext();

    return user ? <HomePage /> : <LoginPage />;
}

const router = createBrowserRouter([
    {
        path:'/',
        element: <HomePoint/>,
    },
    {
        path:'/login',
        element:<LoginPage/>
    },
    {
        path:'/register',
        element:<RegisterPage/>
    }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App
