import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { devURL } from '../../contsants/endPoints';
import axios from 'axios';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  // const [token, setToken] = useState('');
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Simulate fetching user info (e.g., from local storage or an API)
    const token = sessionStorage.getItem('token');

    if (token) {
      // Example: Decode token or validate session
      setUser({ token });
    }
    setLoading(false);
  }, []);

  let jwtToken = ''
  const login = async (email, password) => {
    try {
      const response = await axios.post(`${devURL}/user/auth/login`, {
        email: email,
        password: password
      });

      jwtToken = response?.data?.token
      console.log('========= AuthProvider response --->', response?.data?.token)
      sessionStorage.setItem('token', jwtToken);
      router.push('/user/dashboard');
    } catch (error) {
      console.error('Login failed', error);
      Swal.fire({
        title: "Error",
        text: error.response?.data?.message,
        icon: "error"
      });
    } finally {
      setLoading(false);
    }

    sessionStorage.setItem('token', jwtToken);
    setUser({ jwtToken });
    router.push('/user/dashboard');
  };







  const logout = () => {
    sessionStorage.removeItem('token');
    setUser(null);
    router.push('/user/auth/login');
  };










let decodedJWT = ''
  const decodedToken =  () => {
    const token = sessionStorage.getItem('token');
    const response =  axios.get(`${devURL}/jwt/decrypt`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    // console.log('decodedToken  response=====',response?.data?.id);
    if (response ) {
      decodedJWT = response?.data?.id
      return decodedJWT

    }

  };



  return (
    <AuthContext.Provider value={{
      user,
      loading,
      login,
      logout,
      decodedToken
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
