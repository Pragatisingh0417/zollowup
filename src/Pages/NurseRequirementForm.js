import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";

const NurseRequirementForm = ({ onClose, selectedService }) => {
  const navigate = useNavigate();
  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    nurseType: "",
    shift: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    date: "",
    notes: "",
  });

  // Prefill nurseType if selected from card
  useEffect(() => {
    if (selectedService?.title) {
      setForm((prev) => ({
        ...prev,
        nurseType: selectedService.title,
      }));
    }
  }, [selectedService]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/bookings/nurse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Submission failed");

      setSuccessMsg("✅ Nurse booking submitted successfully!");

      setTimeout(() => {
        setLoading(false);
        navigate("/confirmation", {
          state: {
            service: {
              type: "nurse",
              ...form,
            },
          },
        });
      }, 2000);
    } catch (err) {
      console.error("❌ Submission error:", err);
      setLoading(false);
      alert("❌ Booking failed. Please try again.");
    }
  };

  return (
    <div className="max-w-xl max-h-[90vh] overflow-y-auto relative mx-auto p-6 bg-white shadow-lg rounded-lg">
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-xl"
        >
          <X />
        </button>
      )}

      <h2 className="text-2xl font-bold mb-4 text-center">Request a Nurse</h2>

      {successMsg && (
        <div className="mb-4 text-green-700 bg-green-100 border border-green-300 rounded px-4 py-2 text-sm">
          {successMsg}
        </div>
      )}

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
            <option value="Elderly Care">Elderly Care</option>
            <option value="ICU Care at Home">ICU Care at Home</option>
            <option value="Post-Surgical Care">Post-Surgical Care</option>
            <option value="Baby & Mother Care">Baby & Mother Care</option>
            <option value="Injections & IV Drips">Injections & IV Drips</option>
            <option value="Palliative Care">Palliative Care</option>
            <option value="Bedridden Care">Bedridden Care</option>
            <option value="Night Nursing">Night Nursing</option>
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
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border p-2 rounded"
            value={form.email}
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
          <label className="block text-sm font-medium">Street Address</label>
          <input
            type="text"
            name="street"
            className="w-full border p-2 rounded"
            value={form.street}
            onChange={handleChange}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium">City</label>
            <input
              type="text"
              name="city"
              className="w-full border p-2 rounded"
              value={form.city}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">State</label>
            <input
              type="text"
              name="state"
              className="w-full border p-2 rounded"
              value={form.state}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Pincode</label>
            <input
              type="text"
              name="zip"
              className="w-full border p-2 rounded"
              value={form.zip}
              onChange={handleChange}
              required
            />
          </div>
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
          disabled={loading}
          className={`w-full flex justify-center items-center gap-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 ${
            loading ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {loading ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-white"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
              Submitting...
            </>
          ) : (
            "Submit Request"
          )}
        </button>
      </form>
    </div>
  );
};

export default NurseRequirementForm;
