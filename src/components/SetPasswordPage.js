import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axiosInstance";
import { useAuth } from "../components/AuthContext";

const SetPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(
        "/users/set-password",
        { password },
        { withCredentials: true }
      );

      setUser(res.data); // update user context
      navigate("/dashboard"); // ⬅️ this should work now
    } catch (err) {
      console.error("❌ Failed to set password:", err.response?.data || err.message);
      alert("Something went wrong while setting the password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 shadow rounded bg-white">
      <h2 className="text-xl font-semibold mb-4">Hi {user?.name}, set your password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          className="w-full border px-3 py-2 rounded mb-4"
          placeholder="Choose a secure password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          {loading ? "Setting..." : "Set Password & Continue"}
        </button>
      </form>
    </div>
  );
};

export default SetPasswordPage;