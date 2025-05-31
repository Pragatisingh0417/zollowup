import React, { useState } from "react";
import UserLogin from "../components/UserLogin";
import UserSignup from "../components/UserSignup";

const UserAuthPage = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <>
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
    </>
  );
};

export default UserAuthPage;
