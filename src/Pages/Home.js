import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Herosection from "../components/Herosection";
import InfoSection from "../components/InfoSection";
import Cta from "../components/Cta";
import Introduction from "../components/Introduction";
import Reasons from "../components/Reasons";
import NewAndNoteworthySlider from "../components/NewAndNoteworthySlider";
import Testimonial from "../components/Testimonial";
import CountingNumber from "../components/CountingNumber";
import Cleaning from "../components/Cleaning";

// 🔁 Import your modal components
import UserLogin from "../components/UserLogin";
import UserSignup from "../components/UserSignup";

const Home = () => {
  const [data, setData] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const location = useLocation();

  // 🔁 Check URL for email verification status
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const verified = params.get("verified");

    if (verified === "true" || verified === "expired" || verified === "already") {
      setShowLogin(true);
    }
  }, [location]);

  // 📡 Fetch your homepage data
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/your-endpoint`)
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="overflow-x-hidden relative">
      {/* 👇 Show modals if needed */}
      {showLogin && (
        <UserLogin
          onClose={() => setShowLogin(false)}
          setShowLogin={setShowLogin}
          setShowSignup={setShowSignup}
        />
      )}
      {showSignup && (
        <UserSignup
          onClose={() => setShowSignup(false)}
          setShowLogin={setShowLogin}
        />
      )}

      {/* 👇 Page sections */}
      <Introduction />
      <Herosection />
      <InfoSection />
      <Reasons />
      <NewAndNoteworthySlider />
      <Cleaning />
      <CountingNumber />
      <Testimonial />
      <Cta />
    </div>
  );
};

export default Home;
