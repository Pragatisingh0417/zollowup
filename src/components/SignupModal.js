import { useState } from "react";
import { X } from "lucide-react";
import LoginModal from "./LoginModal";
import { registerUser } from "../api"; 
export default function SignupModal({ onClose }) {
  const [showLogin, setShowLogin] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null); // Success/Error messages

  if (showLogin) {
    return <LoginModal onClose={onClose} />;
  }

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      await registerUser(formData);
      setMessage({ type: "success", text: "Signup successful! Redirecting..." });
      setTimeout(() => setShowLogin(true), 1500); // Redirect to login after success
    } catch (error) {
      setMessage({ type: "error", text: "Signup failed. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 p-4 z-50">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-6 relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          onClick={onClose}
        >
          <X size={24} />
        </button>

        <h1 className="text-2xl font-bold text-gray-900 mb-4 text-center">Zollowup</h1>
        <p className="text-gray-600 text-center mb-6">
          To send a message, you’ll need a Zollowup account.
        </p>

        {/* Google Sign-up Button */}
        <button className="flex items-center justify-center w-full bg-black text-white rounded-full py-3 font-medium mb-4">
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google Logo"
            className="h-5 w-5 mr-2"
          />
          Sign up with Google
        </button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Email Signup Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-full py-3 px-4"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-full py-3 px-4"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-full py-3 px-4"
            required
          />

          {/* Show Success/Error Messages */}
          {message && (
            <p className={`text-sm text-center ${message.type === "error" ? "text-red-500" : "text-green-500"}`}>
              {message.text}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-full py-3 font-medium hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? "Signing up..." : "Create Account"}
          </button>
        </form>

        {/* Terms and Login Info */}
        <p className="text-xs text-gray-500 text-center mt-4">
          By creating an account, you agree to our
          <a href="#" className="text-blue-600"> Terms of Service</a>,
          <a href="#" className="text-blue-600"> Privacy Policy</a>, and
          <a href="#" className="text-blue-600"> Notification Settings</a>.
        </p>

        <p className="text-sm text-gray-700 text-center mt-4">
          Already have an account?{" "}
          <button
            onClick={() => setShowLogin(true)}
            className="text-blue-600 hover:underline"
          >
            Log in
          </button>
        </p>
      </div>
    </div>
  );
}
