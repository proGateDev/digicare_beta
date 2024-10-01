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
    const { login } = useAuth()
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
        <>
            <div className="container">
                <div className="login-box">
                    <div className="login-name">
                        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
                        <div className="underline-name"></div>
                    </div>

                    <form onSubmit={handleSubmit}>
                        {/* Name input for Sign Up */}
                        {!isLogin && (
                            <div className="input-box">
                                <div className="inputs">
                                    <input
                                        type="text"
                                        placeholder="Enter your Full Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required={!isLogin} // Required only on Sign Up
                                    />
                                    <div className="underline-input"></div>
                                </div>
                            </div>
                        )}

                        {/* Email input */}
                        <div className="input-box">
                            <div className="inputs">
                                <input
                                    type="email"
                                    placeholder="Enter your Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <div className="underline-input"></div>
                            </div>
                        </div>

                        {/* Phone input for Sign Up */}
                        {!isLogin && (
                            <div className="input-box">
                                <div className="inputs">
                                    <input
                                        type="tel"
                                        placeholder="Enter your Phone Number"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        required={!isLogin} // Required only on Sign Up
                                    />
                                    <div className="underline-input"></div>
                                </div>
                            </div>
                        )}

                        {/* Password input */}
                        <div className="input-box">
                            <div className="inputs">
                                <input
                                    type="password"
                                    placeholder="Enter your Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <div className="underline-input"></div>
                            </div>
                        </div>

                        {/* Submit button */}
                        <div className="submit-button">
                            <input
                                type="submit"
                                // value={loading ? 'Processing...' : isLogin ? 'Login' : 'Sign Up'}
                                value={'Login'}
                            // disabled={loading}
                            />
                        </div>
                    </form>

                    {/* Toggle between login and sign-up */}
                    <div className="toggle-auth">
                        {isLogin ? (
                            <p>
                                Do nott have an account?{' '}
                                <button type="button" onClick={() => setIsLogin(false)}>
                                    Sign Up
                                </button>
                            </p>
                        ) : (
                            <p>
                                Already have an account?{' '}
                                <button type="button" onClick={() => setIsLogin(true)}>
                                    Login
                                </button>
                            </p>
                        )}
                    </div>

                    {/* Google Sign-in */}
                    <SignIn />
                </div>
            </div>
        </>
    );
};

export default Login;
