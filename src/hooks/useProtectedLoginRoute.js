import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/auth';

export function useProtectedLoginRoute() {
  const { decodedToken } = useAuth();
  const router = useRouter();

  const checkAuthAndRedirect = async () => {
    const decoded = await decodedToken();

    // console.log('useProtectedLoginRoute -> Decoded token:', decoded);

    if (decoded?.userType) {
      // If user is already authenticated, redirect them to their dashboard
      router.push(`/${decoded.userType}/dashboard`);
    }
  };
  useEffect(() => {

    checkAuthAndRedirect();
  }, []);
// }, [decodedToken, router]);

  console.log('useProtectedLoginRoute executed');
}
