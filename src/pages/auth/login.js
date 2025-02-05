import { useState } from 'react';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import axios from 'axios';
import { devURL } from '../../../contsants/endPoints';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const login = async (email, password) => {
    try {
      setLoading(true);
      const response = await axios.post(`${devURL}/admin/auth/login`, {
        email,
        password,
      });

      const jwtToken = response?.data?.token;
      console.log('jwtToken:', jwtToken);

      if (jwtToken) {
        sessionStorage.setItem('token', jwtToken);
        router.push('/dashboard');
      } else {
        throw new Error('Invalid login response');
      }
    } catch (error) {
      console.error('Login Failed:', error);
      Swal.fire({
        title: 'Error',
        text: error.response?.data?.message || 'Invalid email or password.',
        icon: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    await login(email, password);
  };

  return (
    <div className="bg-gray-100 flex justify-center">
      <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden mt-10">
        <div className="w-1/2 hidden md:block">
          <img
            src="/images/logo.jpg"
            alt="Admin Panel Illustration"
            className="h-full object-cover h-50 mt-20 ml-40"
          />
           <h5 className="text-3xl font-bold text-blue-800 mb-6 text-center ml-10">Admin Login</h5>
        </div>
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Admin Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
