// src/pages/PaymentFailed.js
import React from "react";
import { Link } from "react-router-dom";

const PaymentFailed = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Payment Failed</h1>
      <p className="text-gray-700 mb-6">Something went wrong. Your payment could not be verified.</p>
      <Link
        to="/checkout"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
      >
        Try Again
      </Link>
    </div>
  );
};

export default PaymentFailed;