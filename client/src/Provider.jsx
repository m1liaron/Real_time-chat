import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import ConversationPage from "./pages/ConversationPage.jsx";
import App from "./App.jsx";

function AppEntryPoint(){
    return (
        <App/>
    )
}

const router = createBrowserRouter([
    {
        path:'/',
        element: <AppEntryPoint/>,
        children:[
            {
                path:'/',
                element:<HomePage/>,
            },
            {
                path:'/conversation/:id',
                element:<ConversationPage/>
            },
        ]
    },
    {
        path:'/login',
        element:<LoginPage/>
    },
    {
        path:'/register',
        element:<RegisterPage/>
    },
])

function Provider() {
  return <RouterProvider router={router}/>
}

export default Provider
