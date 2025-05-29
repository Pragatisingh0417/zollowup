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
    availableHours: "",
    pricePerHour: "",
    language: "",
    speciality: "",
    state: "",
    maritalStatus: "",
    image: null,
    video: null,
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

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setForm((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleAddMaid = async () => {
    const formData = new FormData();
    for (const key in form) {
      if (form[key]) formData.append(key, form[key]);
    }
    formData.append("userId", currentUser?._id);

    try {
      const res = await fetch("http://localhost:5000/api/maids", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Failed to create maid");
      const saved = await res.json();
      setMaids((prev) => [...prev, saved]);
      setForm({
        name: "",
        age: "",
        experience: "",
        religion: "",
        availableHours: "",
        pricePerHour: "",
        language: "",
        speciality: "",
        state: "",
        maritalStatus: "",
        image: null,
        video: null,
      });
    } catch (err) {
      console.error("❌ Error adding maid:", err.message);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Add New Maid</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} className="border p-2 rounded" required />
        <input type="number" name="age" placeholder="Age" value={form.age} onChange={handleChange} className="border p-2 rounded" required />
        <input type="text" name="experience" placeholder="Experience" value={form.experience} onChange={handleChange} className="border p-2 rounded" />
        <input type="text" name="religion" placeholder="Religion" value={form.religion} onChange={handleChange} className="border p-2 rounded" />
        <input type="number" name="pricePerHour" placeholder="Price per Hour" value={form.pricePerHour} onChange={handleChange} className="border p-2 rounded" />
        <select name="availableHours" value={form.availableHours} onChange={handleChange} className="border p-2 rounded">
          <option value="">Select Available Hours</option>
          <option value="2 Hours">2 Hours</option>
          <option value="4 Hours">4 Hours</option>
          <option value="8 Hours">8 Hours</option>
          <option value="10 Hours">10 Hours</option>
          <option value="12 Hours">12 Hours</option>
          <option value="24 Hours">24 Hours</option>
        </select>
        <input type="text" name="language" placeholder="Language" value={form.language} onChange={handleChange} className="border p-2 rounded" />
        <input type="text" name="speciality" placeholder="Speciality (veg/non-veg)" value={form.speciality} onChange={handleChange} className="border p-2 rounded" />
        <input type="text" name="state" placeholder="State" value={form.state} onChange={handleChange} className="border p-2 rounded" />
        <input type="text" name="maritalStatus" placeholder="Marital Status" value={form.maritalStatus} onChange={handleChange} className="border p-2 rounded" />
        <input type="file" name="image" accept="image/*" onChange={handleChange} className="border p-2 rounded" />
        <input type="file" name="video" accept="video/*" onChange={handleChange} className="border p-2 rounded" />
      </div>

      <button onClick={handleAddMaid} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Add Maid
      </button>

     
    </div>
  );
};

export default AdminMaids;
