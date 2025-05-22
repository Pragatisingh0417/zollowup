// src/pages/Nursing.js
import React from "react";
import NurseRequirementForm from "./NurseRequirementForm";

const Nursing = () => {
  return (
    <div className="p-10">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-green-500">Nursing</h1>
        <p className="text-gray-600 mt-4">We are a company committed to providing excellent service.</p>
      </div>
      <NurseRequirementForm />
    </div>
  );
};

export default Nursing;
