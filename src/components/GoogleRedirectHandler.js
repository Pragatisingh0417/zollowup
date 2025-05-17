import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext"; // Adjust path if needed

const GoogleRedirectHandler = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      try {
        login(token); // Let AuthContext handle fetch + decoding
        const decoded = JSON.parse(atob(token.split('.')[1]));

        if (decoded.justCreated) {
          navigate("/user/set-password");
        } else {
          navigate("/user/dashboard");
        }
      } catch (err) {
        console.error("Error decoding token:", err);
        navigate("/user-login?error=invalid_token");
      }
    } else {
      navigate("/user-login?error=missing_token");
    }
  }, [navigate, login]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <p className="text-gray-600 text-lg">Logging you in...</p>
    </div>
  );
};

export default GoogleRedirectHandler;
