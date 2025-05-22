import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext"; // adjust if needed

const AddMaidForm = () => {
  const navigate = useNavigate();
  const { user } = useAuth(); // assuming you store user info here

  const [maid, setMaid] = useState({
    name: "",
    hours: "",
    experience: "",
    image: "",
    videoUrl: "",
    thumbnail: "",
    available: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setMaid((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    try {
      const res = await fetch("/api/maids", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(maid),
      });

      if (!res.ok) throw new Error("Failed to create maid");
      alert("✅ Maid created successfully!");
      navigate("/admin"); // or wherever
    } catch (err) {
      console.error(err);
      alert("❌ Error creating maid");
    }
  };

  if (!user?.isAdmin) {
    return <p className="text-red-500 text-center mt-10">🚫 Unauthorized</p>;
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Maid</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {["name", "hours", "experience", "image", "videoUrl", "thumbnail"].map((field) => (
          <div key={field}>
            <label className="block text-sm font-medium capitalize">{field}</label>
            <input
              type="text"
              name={field}
              value={maid[field]}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required={field === "name"}
            />
          </div>
        ))}

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="available"
            checked={maid.available}
            onChange={handleChange}
          />
          <label className="text-sm">Available</label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Add Maid
        </button>
      </form>
    </div>
  );
};

export default AddMaidForm;
