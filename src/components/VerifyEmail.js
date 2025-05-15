import { useEffect } from "react";
import { useParams } from "react-router-dom";

const VerifyEmail = () => {
  const { token } = useParams();

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/users/verify-email/${token}`);
        const data = await res.json();
        alert(data.msg || "Verification complete!");
      } catch (err) {
        alert("Verification failed. Invalid or expired token.");
      }
    };

    verifyEmail();
  }, [token]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-6 rounded shadow text-center">
        <h2 className="text-xl font-semibold mb-2">Verifying Email...</h2>
      </div>
    </div>
  );
};

export default VerifyEmail;
