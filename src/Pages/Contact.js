import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { submitContactForm } from "../api"; // adjust path if needed

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg("");
  
    try {
      const res = await submitContactForm(formData);
      console.log(res);  // Log the response from the API
      if (res && res.message) {
        setResponseMsg(res.message);  // Set the success message
      } else {
        setResponseMsg("Message sent successfully!");
      }
      setFormData({ fullName: "", email: "", phone: "", message: "" });
    } catch (err) {
      // Log and handle the error
      console.error("Error submitting contact form:", err);
      setResponseMsg("Failed to submit contact form");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-gray-100 p-6">
      {/* Left Side Content */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-1/2">
        <h2 className="text-3xl font-bold mb-4 text-blue-900 font-poppins">Contact Us</h2>
        <p className="text-gray-600 mb-6 font-roboto">
          Have questions or need assistance? We're here to help! Reach out to us for any inquiries, and
          our team will get back to you as soon as possible.
        </p>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <FaPhoneAlt className="text-blue-900" />
            <span className="text-gray-700 font-medium font-roboto">+91 9876543210</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-blue-900" />
            <span className="text-gray-700 font-medium font-roboto">sales@zollowup.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className="text-blue-900" />
            <span className="text-gray-700 font-medium font-roboto">
              U-134B, 3rd Floor Shakarpur, Laxmi Nagar, Delhi-110092, Near Laxmi Nagar Metro station gate No.- 4
            </span>
          </div>
        </div>
      </div>

      {/* Right Side Form */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-1/2 mt-6 md:mt-0 md:ml-6">
        <h2 className="text-2xl font-bold mb-6 font-poppins">Get in Touch</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 font-medium font-roboto">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="Enter full name"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-900"
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-gray-700 font-medium font-roboto">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email address"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-900"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-gray-700 font-medium font-roboto">Enter Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Phone Number"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-900"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-medium font-roboto">Enter Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Enter message"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-900"
              rows="4"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-900 font-roboto text-white p-3 rounded-lg font-bold hover:bg-blue-800"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit"}
          </button>

          {/* Response Message */}
          {responseMsg && (
            <p className="text-center mt-4 font-semibold text-green-700">{responseMsg}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
