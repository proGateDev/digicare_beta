import axios from 'axios';
import { useRouter } from 'next/router';
import { createContext, useContext, useEffect, useState } from 'react';
import { devURL } from '../../contsants/endPoints';
import Swal from 'sweetalert2';

const AuthAdminContext = createContext(); // Create the context

export function AuthAdminProvider({ children }) {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true); // Default to true while checking token
  const router = useRouter();

  useEffect(() => {
    const token = sessionStorage.getItem('token');

    console.log('token', token)

    if (token) {
      setAdmin({ token });
    }
    setLoading(false); 
  }, []);

  const login = async (email, password) => {
    try {
      setLoading(true);
      const response = await axios.post(`${devURL}/admin/auth/login`, {
        email,
        password,
      });

      const jwtToken = response?.data?.token;

console.log('jwtToken', jwtToken)

      sessionStorage.setItem('token', jwtToken);
      setAdmin({ token: jwtToken });
      router.push('/admin/dashboard');
    } catch (error) {
      console.error('Login Failed:', error);
      Swal.fire({
        title: 'Error',
        text: error.response?.data?.message || 'Something went wrong.',
        icon: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    sessionStorage.removeItem('token');
    setAdmin(null);
    router.push('/admin/auth/login');
  };

  const decodedToken = async () => {
    const token = sessionStorage.getItem('token'); // Corrected from setItem to getItem

    console.log('token', token)

    if (!token) {
      console.log('No token found');
      return null;
    }

    try {
      const response = await axios.get(`${devURL}/jwt/decrypt`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response) {
        const decodedJWT = response.data;
        return decodedJWT;
      }

      console.log('decodedJWT',decodedJWT)

    } catch (error) {
      if (error.response?.status === 401) {
        console.error('Invalid token or session expired:', error);
        Swal.fire({
          title: 'Session Expired',
          text: 'Please log in again.',
          icon: 'warning',
        });
        logout();
      } else {
        console.error('Error decoding token:', error);
      }
      return null;
    }

      console.log('decodedToken', decodedToken)
  };

  return (
    <AuthAdminContext.Provider
      value={{
        admin,
        loading,
        login,
        logout,
        decodedToken,
      }}
    >
      {children}
    </AuthAdminContext.Provider>
  );
}

export function useAuthAdmin() {
  return useContext(AuthAdminContext); // Use the context
}
