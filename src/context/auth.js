import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { devURL } from '../../contsants/endPoints';
import axios from 'axios';
import Swal from 'sweetalert2';

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
  let userType = ''
  const login = async (email, password) => {
    try {
      const response = await axios.post(`${devURL}/auth/login`, {
        email: email,
        password: password
      });

      jwtToken = response?.data?.token
      userType = response?.data?.type
      sessionStorage.setItem('token', jwtToken);
      router.push(`/${userType}/dashboard`);
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
    router.push(`/${userType}/dashboard`);
  };







  const logout = () => {
    sessionStorage.removeItem('token');
    setUser(null);
    router.push('/auth/login');
  };










  const decodedToken = async () => {
    const token = sessionStorage.getItem('token');
  
    // Check if token exists
    if (!token) {
      console.warn("No token found");
      return null; // Handle no token case
    }
  
    try {
      // Make API call to decode the token
      const response = await axios.get(`${devURL}/jwt/decrypt`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
  
      // If the response is successful, return the decoded token data
      if (response) {
        const decodedJWT = await response.data;
        return decodedJWT;
      }
    } catch (error) {
      // Handle 401 or other errors
      if (error.response?.status === 401) {
        console.error("Invalid token or session expired", error);
        Swal.fire({
          title: "Session Expired",
          text: "Please log in again.",
          icon: "warning"
        });
        logout(); // Log the user out if token is invalid
      } else {
        console.error("Error decoding token", error);
      }
      return null; // Return null in case of error
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
