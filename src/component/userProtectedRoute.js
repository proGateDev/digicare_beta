import React from "react";
import { useAuth } from '../context/auth';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
console.log('ProtectedRoute user--',user);

  // const {isAuthenticated} = useProtectedRoute()
  if (!user) {
    return null; // or a loading spinner while the authentication status is being checked
  }

  return children; // Render the protected component if authenticated
};

export default ProtectedRoute;
