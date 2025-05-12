import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const VerifyEmail = () => {
  const { token } = useParams();
  const [message, setMessage] = useState("Verifying...");
  const navigate = useNavigate();

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/auth/verify-email/${token}`);
        setMessage("Email verified successfully! You can now log in.");
        // Optional: Redirect to login after a delay
        setTimeout(() => navigate("/login"), 3000);
      } catch (err) {
        setMessage("Invalid or expired token.");
      }
    };

    verifyEmail();
  }, [token, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow text-center">
        <h2 className="text-xl font-bold">{message}</h2>
      </div>
    </div>
  );
};

export default VerifyEmail;
