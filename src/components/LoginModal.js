import { useState } from "react";
import { X } from "lucide-react";
import axios from "axios";
import { useAuth } from "../components/AuthContext";
import { useNavigate } from "react-router-dom"; // For navigation

const LoginModal = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { login } = useAuth(); // Use context's login method
  const navigate = useNavigate(); // React Router navigation

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const apiUrl =
        process.env.NODE_ENV === "development"
          ? "http://localhost:5000/api/auth/login"
          : "/api/auth/login"; // Adjust API URL for production

      const response = await axios.post(apiUrl, {
        email,
        password,
      });

      const { token, user } = response.data;

      // Use context login function
      login(token, user);

      onClose(); // Close the modal
      navigate("/dashboard"); // Seamless React Router navigation
    } catch (err) {
      const errorMessage = err.response
        ? err.response.data?.message || "Login failed. Please try again."
        : "Network error. Please try again.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-red-600"
          onClick={onClose}
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 font-semibold rounded-full hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
