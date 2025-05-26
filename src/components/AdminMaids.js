import React, { useState, useEffect } from "react";
import { useAuth } from "../components/AuthContext";

const AdminMaids = () => {
  const { user: currentUser } = useAuth();
  const [maids, setMaids] = useState([]);
  const [form, setForm] = useState({
    name: "",
    age: "",
    experience: "",
    religion: "",
    image: "",
    pricePerHour: "",
    availableHours: "",
    language: "",
    speciality: "",
    state: "",
    maritalStatus: "",
  });

  const fetchMaids = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/maids");
      const data = await res.json();
      setMaids(data);
    } catch (err) {
      console.error("❌ Failed to fetch maids:", err);
    }
  };

  useEffect(() => {
    fetchMaids();
  }, []);

  const handleAddMaid = async () => {
    const payload = {
      ...form,
      age: Number(form.age),
      pricePerHour: Number(form.pricePerHour),
      availableHours: [form.availableHours],
      userId: currentUser?._id,
    };

    try {
      const res = await fetch("http://localhost:5000/api/maids", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to create maid");

      const saved = await res.json();
      setMaids((prev) => [...prev, saved]);
      setForm({
        name: "",
        age: "",
        experience: "",
        religion: "",
        image: "",
        pricePerHour: "",
        availableHours: "",
        language: "",
        speciality: "",
        state: "",
        maritalStatus: "",
      });
    } catch (err) {
      console.error("❌ Error adding maid:", err.message);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Add New Maid</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {[
          { name: "name", placeholder: "Name" },
          { name: "age", type: "number", placeholder: "Age" },
          { name: "experience", placeholder: "Experience" },
          { name: "religion", placeholder: "Religion" },
          { name: "image", placeholder: "Image URL" },
          { name: "pricePerHour", type: "number", placeholder: "Price per Hour" },
          { name: "language", placeholder: "Language" },
          { name: "speciality", placeholder: "Speciality (veg/non-veg)" },
          { name: "state", placeholder: "State" },
          { name: "maritalStatus", placeholder: "Marital Status" },
        ].map(({ name, type = "text", placeholder }) => (
          <input
            key={name}
            type={type}
            name={name}
            placeholder={placeholder}
            value={form[name]}
            onChange={(e) => setForm({ ...form, [name]: e.target.value })}
            className="border p-2 rounded"
          />
        ))}

        <select
          value={form.availableHours}
          onChange={(e) => setForm({ ...form, availableHours: e.target.value })}
          className="border p-2 rounded col-span-2"
          required
        >
          <option value="">Select Available Hours</option>
          <option value="2 Hours">2 Hours</option>
          <option value="4 Hours">4 Hours</option>
          <option value="8 Hours">8 Hours</option>
          <option value="10 Hours">10 Hours</option>
          <option value="12 Hours">12 Hours</option>
          <option value="24 Hours">24 Hours</option>
        </select>
      </div>

      <button
        onClick={handleAddMaid}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Maid
      </button>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-2">All Maids</h3>
        {maids.map((maid) => (
          <div key={maid._id} className="border p-2 mb-2 bg-gray-50 shadow">
            <p>
              {maid.name} - {maid.experience} - {maid.availableHours?.join(", ")} - {maid.speciality || "-"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminMaids;
