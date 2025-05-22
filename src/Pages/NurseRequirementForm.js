import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NurseRequirementForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nurseType: "",
    shift: "",
    address: "",
    phone: "",
    date: "",
    notes: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Submit form data to backend
      await fetch("/api/bookings/nurse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      // Navigate to confirmation page with form data
      navigate("/confirmation", {
        state: {
          service: {
            type: "nurse",
            ...form,
          },
        },
      });
    } catch (error) {
      console.error("Error submitting nurse request:", error);
      alert("❌ Failed to submit request. Please try again.");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Request a Nurse</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Type of Nurse</label>
          <select
            name="nurseType"
            className="w-full border p-2 rounded"
            value={form.nurseType}
            onChange={handleChange}
            required
          >
            <option value="">-- Select --</option>
            <option value="Elder Care">Elder Care</option>
            <option value="ICU Trained">ICU Trained</option>
            <option value="Post-Surgery Care">Post-Surgery Care</option>
            <option value="Baby Care">Baby Care</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Preferred Shift</label>
          <select
            name="shift"
            className="w-full border p-2 rounded"
            value={form.shift}
            onChange={handleChange}
            required
          >
            <option value="">-- Select --</option>
            <option value="Day">Day</option>
            <option value="Night">Night</option>
            <option value="Live-in">Live-in</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Address</label>
          <input
            type="text"
            name="address"
            className="w-full border p-2 rounded"
            value={form.address}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Phone</label>
          <input
            type="tel"
            name="phone"
            className="w-full border p-2 rounded"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Date & Time Needed</label>
          <input
            type="datetime-local"
            name="date"
            className="w-full border p-2 rounded"
            value={form.date}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Additional Notes</label>
          <textarea
            name="notes"
            className="w-full border p-2 rounded"
            value={form.notes}
            onChange={handleChange}
            placeholder="Any specific health concerns, preferences, etc."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default NurseRequirementForm;
