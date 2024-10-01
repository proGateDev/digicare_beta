import React, { useState } from 'react';
import { useRouter } from 'next/router';
import SignIn from '../../component/GoogleSignup';
import axios from 'axios';
import Swal from 'sweetalert2';
import { devURL } from '../../../contsants/endPoints';
import { useAuth } from '../../context/auth';
import { useProtectedLoginRoute } from '../../hooks/useProtectedLoginRoute';


const Login = () => {
    const router = useRouter();
    // useProtectedLoginRoute('user')
    useProtectedLoginRoute()
    //=-=========================
    //=-=========================
    const { login, loading } = useAuth()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState(''); // For Sign Up
    const [phone, setPhone] = useState(''); // For Sign Up
    //===================================
    let isLogin = true

    const handleSubmit = (e) => {
        const payload = { email, password, name, phone };
        e.preventDefault()
        console.log(payload, 'payload');

        login(
            payload.email,
            payload.password);
        // if (isLogin) {
        //     login(
        //         payload.email,
        //         payload.password); // Use the handleuserLogin function
        // } else {
        //     login(payload); // Use the handleuserSignup function
        // }
    };
    //=================================
    return (
        <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
        <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
            <div className="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
                <div className="my-3 text-4xl font-bold tracking-wider text-center">
                    <a href="#">Login</a>
                </div>
                <p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
                    Focus on functionaries for your digital products, while leaving the UI design on us!
                </p>
                <p className="mt-6 text-sm text-center text-gray-300">
                    Read our <a href="#" className="underline">terms</a> and <a href="#" className="underline">conditions</a>
                </p>
            </div>
            <div className="p-5 bg-white md:flex-1">
                <h3 className="my-4 text-2xl font-semibold text-gray-700">
                    {isLogin ? 'Account Login' : 'Create an Account'}
                </h3>
                <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
                    {/* Name input for Sign Up */}
                    {!isLogin && (
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="name" className="text-sm font-semibold text-gray-500">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="px-4 py-2 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                            />
                        </div>
                    )}

                    {/* Email input */}
                    <div className="flex flex-col space-y-1">
                        <label htmlFor="email" className="text-sm font-semibold text-gray-500">Email address</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="px-4 py-2 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                        />
                    </div>

                    {/* Phone input for Sign Up */}
                    {!isLogin && (
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="phone" className="text-sm font-semibold text-gray-500">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="px-4 py-2 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                            />
                        </div>
                    )}

                    {/* Password input */}
                    <div className="flex flex-col space-y-1">
                        <label htmlFor="password" className="text-sm font-semibold text-gray-500">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="px-4 py-2 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                        />
                    </div>

                    {/* Submit button */}
                    <div>
                        <input
                            type="submit"
                            value={loading ? 'Processing...' : isLogin ? 'Login' : 'Sign Up'}
                            disabled={loading}
                            className="w-full px-4 py-2 text-lg font-semibold text-white bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                        />
                    </div>
                </form>

                {/* Toggle between login and sign-up */}
                <div className="flex justify-center mt-4">
                    {isLogin ? (
                        <p>
                            Don't have an account?{' '}
                            <button type="button" onClick={() => setIsLogin(false)} className="text-blue-600">Sign Up</button>
                        </p>
                    ) : (
                        <p>
                            Already have an account?{' '}
                            <button type="button" onClick={() => setIsLogin(true)} className="text-blue-600">Login</button>
                        </p>
                    )}
                </div>
            </div>
        </div>
    </div>
    );
};

export default Login;
