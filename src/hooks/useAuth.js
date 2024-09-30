import { useEffect } from 'react';
import Swal from 'sweetalert2';
import { getProfile } from '../controllers/user/profile'


const useAuth = () => {

  const tokenVilidity = (router, userType) => {
    if (typeof window !== 'undefined') {

      const token = sessionStorage.getItem('token');

      if (!token) {
        router?.push(`/${userType}/auth/login`);
      } else {
        router?.push(`/${userType}/dashboard`);
      }
    }
  }
  // useEffect(() => {
  //   tokenVilidity();
  // }, []);

  const logout = (router) => {

    sessionStorage.removeItem('token');
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Logout Successfully!",
      showConfirmButton: false,
      timer: 1500
    });
    router?.push('/login');
  };

  const tokenDecoded = (userType) => {
    try {
      
      const token = sessionStorage.getItem('token');
      // const profileData = getProfile(token, userType)
      if (!token) {
        throw new Error('No token found');
      }
      return token;
    } catch (error) {
      console.error('Error retrieving JWT token:', error);
      return null;
    }
  };

  return { logout, tokenVilidity, tokenDecoded };

};

export default useAuth;
