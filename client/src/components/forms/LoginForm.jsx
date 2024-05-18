import axios from "axios";
import {useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";

const LoginForm = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigate()

    const onLogin = (e) => {
        e.preventDefault()

        const data = {
            name,
            username,
            email,
            password
        }
        axios.post('http://localhost:3000/api/auth/login', data).then(response => {
            localStorage.setItem("token", response.data.token)
            navigation('/')
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <div className="relative z-10 rounded w-2/6 justify-center px-6 py-12 lg:px-8 bg-white bg-opacity-75 backdrop-blur-md">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Login</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={onLogin}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email
                            address</label>
                        <div className="mt-2">
                            <input id="email" name="email" type="email" autoComplete="email" required
                                   onChange={(e) => setEmail(e.target.value)}
                                   className="block w-full rounded-md border-0 p-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password"
                                   className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            {/*<div className="text-sm">*/}
                            {/*    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot*/}
                            {/*        password?</a>*/}
                            {/*</div>*/}
                        </div>
                        <div className="mt-2">
                            <input id="password" name="password" type="password" autoComplete="current-password"
                                   required
                                   onChange={(e) => setPassword(e.target.value)}
                                   className="block w-full rounded-md border-0 p-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>

                    <button type="submit"
                            className="btn flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login
                    </button>
                </form>

                <NavLink to='/register'>
                    <p className="mt-10 text-center text-sm text-gray-500">
                        Don't have an account?
                    </p>
                </NavLink>
            </div>
        </div>
    );
};

export default LoginForm;