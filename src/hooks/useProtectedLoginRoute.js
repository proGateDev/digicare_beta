import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/auth';

export function useProtectedLoginRoute(userType) {
  const { user, loading } = useAuth();
  const router = useRouter();
console.log('user== useProtectedLoginRoute ============',user);

  useEffect(() => {
  
    if (user) {
      router.push(`/${userType}/dashboard`);  // Redirect to login if not authenticated
    }
  }, [user, loading, router]);
  console.log('leaking ---d--------');
  
}
