import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axiosInstance";
import { useAuth } from "../components/AuthContext";

const GoogleRedirectHandler = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  useEffect(() => {
    const fetchGoogleUser = async () => {
      try {
        const res = await axios.get("/users/me"); // ✅ cookie will be sent automatically
        const user = res.data;
        setUser(user);

        if (user.passwordNotSet) {
          navigate("/set-password");
        } else {
          navigate("/dashboard");
        }
      } catch (error) {
        console.error("❌ Google login failed:", error);
        navigate("/user-login");
      }
    };

    fetchGoogleUser();
  }, [navigate, setUser]);

  return <div>Loading...</div>;
};

export default GoogleRedirectHandler;
