"use client";

// import "../../app/globals.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { jwtDecode } from "jwt-decode";
import Link from "next/link";
import Swal from "sweetalert2"; // Import SweetAlert2
import { devURL } from "../../contsants/endPoints";

const EmailVerification = () => {
  const [message, setMessage] = useState("");
  const [userData, setUserData] = useState("");
  const router = useRouter();
  const [token, setToken] = useState(null);

  console.log('message', message)

  useEffect(() => {
    if (router.query?.token) {
      setToken(router.query.token);
      console.log("Token from query:", router.query?.token);
    }
  }, [router.query]);

  const verifyEmail = async () => {
    try {
      const response = await axios.get(
        `${devURL}/member/auth/verify-email?token=${token}`
      );
      setMessage(response.data.message);

      // Show success alert
      Swal.fire({
        title: "Email Verified!",
        text: response.data.message,
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      const errorMessage =
        error.response?.data.message || "Verification failed. Please try again.";
      setMessage(errorMessage);

      // Show error alert
      Swal.fire({
        title: "Verification Failed",
        text: errorMessage,
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };

  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token);
        console.log("Decoded token:", decoded);
        setUserData(decoded);
      } catch (error) {
        console.error("Invalid token:", error);
      }
    }
  }, [token]);

  const handleResendEmail = () => {
    router.push("/resend-verification-email");
  };

  return (
    <div className="email-verification-container">
      <div className="email-verification-card">
        <div className="email-verification-header">
          <h1>DigiCare4u</h1>
          <p>Track and manage your devices effortlessly and securely</p>
        </div>

        <div className="email-verification-content">
          <h2>Congratulations🎊🎊🎊</h2>

          <h2>Welcome, {userData?.memberName || "User"}</h2>
          <h2>You're invited by {userData?.parentUserName || "DigiCare4u"}</h2>
          <p>
            Welcome to DigiCare4u! To access all features of our app, please
            verify your email address. Verifying your email ensures the security
            of your account and allows us to send you important updates about
            your tracked devices.
          </p>

          <div className="email-verification-info">
            <p>Why Verify Your Email?</p>
            <ul>
              <li>Ensure secure access to your account.</li>
              <li>
                Receive real-time updates and notifications about your devices.
              </li>
              <li>Unlock advanced tracking features.</li>
            </ul>
          </div>

          <div className="email-verification-actions">
            <button
              href="#"
              className="email-verification-button"
              onClick={() => verifyEmail()}
            >
              Verify Your Email
            </button>
          </div>

          <p>
            If you didn’t make this request,{" "}
            <Link href="#" className="link">
              click here
            </Link>{" "}
            to cancel.
          </p>
          <p>
            Didn’t receive the email?{" "}
            <Link href="#" className="link" onClick={handleResendEmail}>
              Resend verification email
            </Link>
            .
          </p>
        </div>

        <div className="email-verification-footer">
          <h3>Go to Our Website</h3>
          <img
            src="https://via.placeholder.com/150"
            alt="QR Code"
            className="qr-code"
          />
          <p>Scan this QR code using the DigiCare4u Website</p>
          <p>Or </p>
          <Link href="https://www.digicare4u.com/" className="link">
            open our website
          </Link>

          <div className="social-links">
            <Link href="https://www.facebook.com/DigiCare4u/">
              <img src="/images/facebook.png" alt="Facebook" />
            </Link>
            <Link href="https://www.instagram.com/digicare4u.pgt/">
              <img src="/images/insata.png" alt="Instagram" />
            </Link>
            <Link href="#">
              <img src="/images/linkedin.png" alt="LinkedIn" />
            </Link>
            <Link href="https://x.com/digicare4uPGT">
              <img src="/images/twitterx.png" alt="Twitter" />
            </Link>
          </div>

          <p>
            Terms & Conditions | Privacy Policy | Support
            <br />
            &copy; 2025 DigiCare4u. All rights reserved.
          </p>
          <div className="app-links">
            <Link href="#">
              <img src="/images/Google_play_Store.png" alt="Google Play" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
