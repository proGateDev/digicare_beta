import DefaultLayout from "../../../component/Layouts/DefaultLayout";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import axios from "axios";
import { devURL } from "../../../../contsants/endPoints";

function AddUsers() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [mobileError, setMobileError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handlePasswordToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  const validatePassword = (password) => {
    return {
      hasUpperCase: /[A-Z]/.test(password),
      hasLowerCase: /[a-z]/.test(password),
      hasNumber: /\d/.test(password),
      hasSpecialChar: /[!@#$%^&*()]/.test(password),
    };
  };

  const passwordCriteria = validatePassword(password);

  const validateForm = () => {
    let isValid = true;

    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(mobile)) {
      setMobileError("Mobile number must be exactly 10 digits.");
      isValid = false;
    } else {
      setMobileError("");
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/;
    if (!emailRegex.test(email)) {
      setEmailError("Enter a valid email ending with .com.");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!Object.values(passwordCriteria).every(Boolean)) {
      setPasswordError("Password must include uppercase, lowercase, number, and special character.");
      isValid = false;
    } else {
      setPasswordError("");
    }

    return isValid;
  };

  const createUser = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    const token = sessionStorage.getItem("token");
    if (!token) {
      Swal.fire("Error", "Authentication token missing. Please log in again.", "error");
      setLoading(false);
      return;
    }

    const userData = { name, mobile, email, password };

    try {
      const response = await axios.post(`${devURL}/auth/signup`, userData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const jwtToken = response?.data?.token;
      if (jwtToken) {
        sessionStorage.setItem("token", jwtToken);
        Swal.fire("Success", "User added successfully", "success").then(() => {
          router.push("/user/list");
        });
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (error) {
      Swal.fire("Error", error.response?.data?.message || "Something went wrong", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <DefaultLayout>
      <div className="mx-auto max-w-270">
        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-5 xl:col-span-3">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-7">
              <h3 className="font-bold text-blue-500 dark:text-white mb-4">Add Company</h3>
              <form onSubmit={createUser}>
                <div className="mb-5">
                  <label className="block text-sm font-medium text-black dark:text-white">Full Name</label>
                  <input className="w-full p-3 border rounded" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Full Name" required />
                </div>

                <div className="mb-5">
                  <label className="block text-sm font-medium text-black dark:text-white">Mobile</label>
                  <input className="w-full p-3 border rounded" type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Enter Mobile Number" required />
                  {mobileError && <p className="text-rose-500 text-sm mt-1">{mobileError}</p>}
                </div>

                <div className="mb-5">
                  <label className="block text-sm font-medium text-black dark:text-white">Email Address</label>
                  <input className="w-full p-3 border rounded" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email Address" required />
                  {emailError && <p className="text-rose-500 text-sm mt-1">{emailError}</p>}
                </div>

                <div className="mb-5">
                  <label className="block text-sm font-medium text-black dark:text-white">Password</label>
                  <div className="relative">
                    <input className="w-full p-3 border rounded" type={passwordVisible ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" required />
                    <button type="button" onClick={handlePasswordToggle} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                      {passwordVisible ? "Hide" : "Show"}
                    </button>
                  </div>
                  <div className="text-sm mt-2">
                    <p className={passwordCriteria.hasUpperCase ? "text-green-500" : "text-gray-500"}>✔ Uppercase letter</p>
                    <p className={passwordCriteria.hasLowerCase ? "text-green-500" : "text-gray-500"}>✔ Lowercase letter</p>
                    <p className={passwordCriteria.hasNumber ? "text-green-500" : "text-gray-500"}>✔ Number</p>
                    <p className={passwordCriteria.hasSpecialChar ? "text-green-500" : "text-gray-500"}>✔ Special character</p>
                  </div>
                </div>

                <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 disabled:bg-gray-400" disabled={loading}>{loading ? "Adding..." : "Add Company"}</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default AddUsers;
