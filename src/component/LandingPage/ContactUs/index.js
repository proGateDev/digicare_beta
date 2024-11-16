import { useRouter } from "next/router";
import { useState } from "react";
import Swal from "sweetalert2";

export default function QueryForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    interest: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const prodURL = 'https://digicarebe.onrender.com'
    const localURL = 'http://192.168.0.109:8000'; // Change this to your actual backend URL
    try {
      const response = await fetch(`${prodURL}/contact-us`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        Swal.fire({
          title: "Success!",
          text: data.message || "Your query has been submitted successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
        router.push('/');
      } else {
        Swal.fire({
          title: "Error!",
          text: data.error || "Something went wrong. Please try again.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      Swal.fire({
        title: "Error!",
        text: error,
        icon: "error",
        confirmButtonText: "OK",
      });
    } finally {
      setIsSubmitting(false);

    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">Get in Touch with DigiCare4u</h2>
      <p className="text-center text-gray-600 mb-6 text-[#28282B]">
        We'd love to hear from you! Fill out the form below and our team will reach out to you shortly.
      </p>
      <form onSubmit={handleSubmit} className="text-[#28282B]">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
            Phone Number
          </label>
          <input
            type="number"
            id="phone"
            maxLength="10"  // Limit to 10 digits
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Let us know your needs or questions"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          ></textarea>
        </div>
        <div className="mb-6">
          <label htmlFor="interest" className="block text-gray-700 font-semibold mb-2">
            Interest
          </label>
          <select
            id="interest"
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            <option value="">Select an option</option>
            <option value="tracking">Real-Time Tracking</option>
            <option value="analytics">Analytics & Insights</option>
            <option value="geofencing">Geofencing Solutions</option>
            <option value="custom">Custom Features</option>
          </select>
        </div>
        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            {isSubmitting ? "Submitting..." : "Submit Query"}
          </button>
        </div>
      </form>
    </div>
  );
}
