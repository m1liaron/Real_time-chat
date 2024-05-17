import axios from "axios";
import {useState} from "react";

const RegisterForm = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onRegister = () => {
        const data = {
            name,
            username,
            email,
            password
        }
        axios.post('http://localhost:3000/api/register', data).then(response => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">

            {/*<div role="alert" className="alert alert-error">*/}
            {/*    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none"*/}
            {/*         viewBox="0 0 24 24">*/}
            {/*        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
            {/*              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>*/}
            {/*    </svg>*/}
            {/*    <span>Error! Task failed successfully.</span>*/}
            {/*</div>*/}

            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">Register</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6">Name</label>
                        <div className="mt-2">
                            <input id="name" name="name" type="text" autoComplete="name" required
                                   onChange={(e) => setName(e.target.value)}
                                   className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="username" className="block text-sm font-medium leading-6">Username</label>
                        <div className="mt-2">
                            <input id="username" name="username" type="text" autoComplete="username" required
                                   onChange={(e) => setUsername(e.target.value)}
                                   className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6">Email
                            address</label>
                        <div className="mt-2">
                            <input id="email" name="email" type="email" autoComplete="email" required
                                   onChange={(e) => setEmail(e.target.value)}
                                   className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password"
                                   className="block text-sm font-medium leading-6">Password</label>
                            {/*<div className="text-sm">*/}
                            {/*    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot*/}
                            {/*        password?</a>*/}
                            {/*</div>*/}
                        </div>
                        <div className="mt-2">
                            <input id="password" name="password" type="password" autoComplete="current-password"
                                   required
                                   onChange={(e) => setPassword(e.target.value)}
                                   className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>

                    <div>
                        <button type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
                            in
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Have an account?
                </p>
            </div>
        </div>
    );
};

export default RegisterForm;