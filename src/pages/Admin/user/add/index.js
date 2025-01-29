import DefaultLayout from '../../../../component/Layouts/DefaultLayout';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import axios from 'axios';
import { devURL } from '../../../../../contsants/endPoints';

function AddUsers() {
    const router = useRouter();
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const createUser = async (e) => {
        e.preventDefault();
        setLoading(true);

        const token = sessionStorage.getItem('token');
        if (!token) {
            Swal.fire('Error', 'Authentication token missing. Please log in again.', 'error');
            setLoading(false);
            return;
        }

        const userData = { name, mobile, email, password };

        try {
            const response = await axios.post(`${devURL}/auth/signup`, userData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            const jwtToken = response?.data?.token;
            console.log('jwtToken:', jwtToken);

            if (jwtToken) {
                sessionStorage.setItem('token', jwtToken);
                Swal.fire('Success', 'User added successfully', 'success').then(() => {
                    router.push('/admin/user/add'); // Redirect after success
                });
            } else {
                throw new Error('Invalid response from server');
            }
        } catch (error) {
            Swal.fire('Error', error.response?.data?.message || 'Something went wrong', 'error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <DefaultLayout>
            <div className="mx-auto max-w-270">
                <div className="grid grid-cols-5 gap-8">
                    <div className="col-span-5 xl:col-span-3">
                        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-7">
                            <h3 className="font-medium text-black dark:text-white mb-4">Add User</h3>
                            <form onSubmit={createUser}>
                                <div className="mb-5">
                                    <label className="block text-sm font-medium text-black dark:text-white">Full Name</label>
                                    <input
                                        className="w-full p-3 border rounded"
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Enter Full Name"
                                        required
                                    />
                                </div>

                                <div className="mb-5">
                                    <label className="block text-sm font-medium text-black dark:text-white">Mobile</label>
                                    <input
                                        className="w-full p-3 border rounded"
                                        type="text"
                                        value={mobile}
                                        onChange={(e) => setMobile(e.target.value)}
                                        placeholder="Enter Mobile Number"
                                        required
                                    />
                                </div>

                                <div className="mb-5">
                                    <label className="block text-sm font-medium text-black dark:text-white">Email Address</label>
                                    <input
                                        className="w-full p-3 border rounded"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter Email Address"
                                        required
                                    />
                                </div>

                                <div className="mb-5">
                                    <label className="block text-sm font-medium text-black dark:text-white">Password</label>
                                    <input
                                        className="w-full p-3 border rounded"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter Password"
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 disabled:bg-gray-400"
                                    disabled={loading}
                                >
                                    {loading ? 'Adding...' : 'Add User'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}

export default AddUsers;
