import { useState } from "react";

const AccountDetails = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    altMobile: "",
    altHint: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error on change
  };

  const validate = () => {
    const newErrors = {};
    if (!form.fullName) newErrors.fullName = "Full name is required.";
    if (!form.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email.";
    }
    if (form.altMobile && !/^\d{10}$/.test(form.altMobile)) {
      newErrors.altMobile = "Alternate mobile must be 10 digits.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      setSuccessMessage("");
    } else {
      setErrors({});
      setSuccessMessage("Details saved successfully!");
      // Submit logic here, e.g., API call
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Manage Your Account</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Full Name</label>
          <input
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
        </div>

        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <h3 className="mt-6 font-semibold">Alternate mobile number details</h3>

        <div>
          <label className="block font-medium mb-1">Alternate Mobile</label>
          <div className="flex gap-2">
            <span className="p-2 bg-gray-100 border border-gray-300 rounded">+91</span>
            <input
              name="altMobile"
              value={form.altMobile}
              onChange={handleChange}
              type="tel"
              className="flex-1 p-2 border border-gray-300 rounded"
            />
          </div>
          {errors.altMobile && <p className="text-red-500 text-sm">{errors.altMobile}</p>}
          <p className="text-xs text-gray-500 mt-1">This will help recover your account if needed</p>
        </div>

        <div>
          <label className="block font-medium mb-1">Hint Name</label>
          <input
            name="altHint"
            value={form.altHint}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Add a name that helps you identify alternate number"
          />
        </div>

        {successMessage && <p className="text-green-600 font-medium">{successMessage}</p>}

        <button
          type="submit"
          className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600 transition"
        >
          Save Details
        </button>

        <button
          type="button"
          className="w-full text-red-600 font-medium mt-4"
          onClick={() => alert("Are you sure you want to delete the account?")}
        >
          Delete Account
        </button>
      </form>
    </div>
  );
};

export default AccountDetails;
