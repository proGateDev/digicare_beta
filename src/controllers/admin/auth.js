import { devURL } from "../../../constants/endPoints";
import axios from "axios";
import Swal from "sweetalert2";

export const login = async (payload, event, router) => {
  event.preventDefault(); // Prevent form submission from reloading the page

  try {
    console.log('Attempting login with:', payload.email);

    // Make the API request
    const response = await axios.post(`${devURL}/admin/auth/login`, payload);

    // Save the token to sessionStorage
    const token = response?.data?.token;
    if (token) {
      sessionStorage.setItem('userToken', token);

      // Show success message
      Swal.fire({
        title: "Login Successful!",
        text: response?.data?.message || "Welcome to the admin dashboard!",
        icon: "success",
      });

      router.push('/admin/dashboard');
    } else {
      throw new Error("Token is missing in the response.");
    }
  } catch (err) {
    console.error("Login error:", err);
    const errorMessage =
      err.response?.data?.message || 'Login failed. Please check your credentials.';
    Swal.fire({
      title: "Error",
      text: errorMessage,
      icon: "error",
    });
  }
};
