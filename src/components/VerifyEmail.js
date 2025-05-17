import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/users/verify-email/${token}`);
        const data = await res.json();

        if (res.ok) {
          setStatus("success");
          // ✅ Redirect to login modal with query param
          setTimeout(() => {
            navigate("/?verified=true");
          }, 2000);
        } else {
          setStatus("expired");
          setTimeout(() => {
            navigate("/?verified=expired");
          }, 2000);
        }
      } catch (err) {
        setStatus("error");
        setTimeout(() => {
          navigate("/?verified=expired");
        }, 2000);
      }
    };

    verifyEmail();
  }, [token, navigate]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-6 rounded shadow text-center">
        {status === "loading" && <h2 className="text-xl">Verifying Email...</h2>}
        {status === "success" && <h2 className="text-green-600 text-xl">✅ Email Verified!</h2>}
        {status === "expired" && <h2 className="text-red-600 text-xl">❌ Expired or invalid link.</h2>}
        {status === "error" && <h2 className="text-red-600 text-xl">Something went wrong.</h2>}
        <p className="text-gray-600">Redirecting to login...</p>
      </div>
    </div>
  );
};

export default VerifyEmail;
