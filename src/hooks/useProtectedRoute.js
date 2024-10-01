import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/auth';

export function useProtectedRoute() {
  const { user, loading, decodedToken } = useAuth();
  const router = useRouter();

  const protectRoute = async () => {
    const decoded = await decodedToken();

    console.log('Decoded token:', decoded);

    if (!decoded || !decoded.userType) {
      // If the token is invalid or the userType is undefined, redirect to login
      router.push(`/auth/login`);
    } else {
      // Redirect to the correct dashboard based on userType
      router.push(`/${decoded.userType}/dashboard`);
    }
  };
  useEffect(() => {

    protectRoute();
  // }, [decodedToken, router]);  // Dependency array to avoid unnecessary re-renders
}, []);  // Dependency array to avoid unnecessary re-renders

  console.log('useProtectedRoute called');
}
