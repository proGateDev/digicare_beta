import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/auth';

export function useProtectedRoute(userType) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push(`/${userType}/auth/login`);  // Redirect to login if not authenticated
    }
  
  }, [user, loading, router]);
  console.log('leaking -----------');
  
}
