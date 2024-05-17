import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import ConversationPage from "./pages/ConversationPage.jsx";

const router = createBrowserRouter([
    {
        path:'/',
        element:<HomePage/>,
    },
    {
        path:'/login',
        element:<LoginPage/>
    },
    {
        path:'/register',
        element:<RegisterPage/>
    },
    {
        path:'/conversation/:id',
        element:<ConversationPage/>
    },
])

function Provider() {
  return <RouterProvider router={router}/>
}

export default Provider
