import { useState } from "react";
import { X } from "lucide-react";
import LoginModal from "./LoginModal";
import { registerUser } from "../api";

export default function SignupModal({ onClose }) {
  const [showLogin, setShowLogin] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",  
    password: "",
    position: "",
    userId: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  if (showLogin) {
    return <LoginModal onClose={onClose} />;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      await registerUser(formData);
      setMessage({ type: "success", text: "Signup successful! Redirecting..." });
      setTimeout(() => setShowLogin(true), 1500);
    } catch (error) {
      setMessage({ type: "error", text: "Signup failed. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 p-4 z-50">
      <div className="bg-white w-full max-w-md max-h-[90vh] overflow-y-auto rounded-2xl shadow-lg p-4 sm:p-6 relative">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          onClick={onClose}
        >
          <X size={24} />
        </button>

        <h1 className="text-2xl font-bold text-gray-900  mb-4 text-center">Zollowup</h1>
        <p className="text-gray-600 text-center mb-3">
          To send a message, you’ll need a Zollowup account.
        </p>
      
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
            type="text"
            name="position"
            placeholder="Position"
            value={formData.position}
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
            type="text"
            name="userId"
            placeholder="UserID"
            value={formData.userId}
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

          {message && (
            <p className={`text-sm text-center ${message.type === "error" ? "text-red-500" : "text-green-500"}`}>
              {message.text}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-full py-3 font-medium hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? "Logingin..." : "Submit"}
          </button>
        </form>

        <p className="text-xs text-gray-500 text-center mt-4">
          By creating an account, you agree to our
          <a href="#" className="text-blue-600"> Terms of Service</a>,
          <a href="#" className="text-blue-600"> Privacy Policy</a>, and
          <a href="#" className="text-blue-600"> Notification Settings</a>.
        </p>

        
      </div>
    </div>
  );
}
