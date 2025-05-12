import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function EmployeeLogin({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Clear previous error message

    try {
const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });
      const { token, employee } = res.data;

      localStorage.setItem("employeeToken", token);
      setEmail("");
      setPassword("");
      setError(""); // Clear any previous error message
      alert(`Welcome, ${employee.name}`);

      navigate("/employee/dashboard");

      if (onClose) onClose();
    } catch (err) {
      setError(err.response?.data?.msg || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 z-50 fixed inset-0">
      <div className="max-w-md w-full bg-white shadow-lg p-8 rounded-2xl relative">
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-2 right-3 text-gray-500 hover:text-black text-2xl font-bold"
          >
            &times;
          </button>
        )}
        <h2 className="text-2xl font-semibold text-center mb-6">Employee Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="username"
              disabled={loading} // Disable while loading
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Password</label>
            <input
              type="password"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              disabled={loading} // Disable while loading
            />
          </div>
          {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
