import { useAuthAdmin } from "../context/authAdmin";
import { useRouter } from "next/router";


export function useProtectedAdminLoginRoute() {
  const router = useRouter();
  const {decodedToken, logout} = useAuthAdmin()


  const checkAuthAndRedirect = async () => {
    try {
      const decoded = await decodedToken();
      if (decoded?.userType === 'admin') {
        router.push('/Admin/dashboard');
      } else {
        throw new Error("Unauthorized access.");
      }
    } catch (error) {
      console.error('Authentication check failed:', error);

      // Handle 401 errors specifically
      if (error.response?.status === 401 || error.message === "Unauthorized access.") {
        Swal.fire({
          title: 'Session Expired',
          text: 'Please log in again.',
          icon: 'warning',
        });
        logout(); // Clear session and redirect
      } else {
        router.push('/login');
      }
    }
  };

  useEffect(() => {
    checkAuthAndRedirect();
  }, [decodedToken, router, logout]);
}
