import { useState } from "react";

const AddService = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token"); // Get JWT from local storage

    try {
      const response = await fetch("http://localhost:5000/api/services", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Pass JWT for protected route
        },
        body: JSON.stringify({ name, description, price }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Service added successfully!");
        setName("");
        setDescription("");
        setPrice("");
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      console.error("Error adding service:", error);
    }
  };

  return (
    <div>
      <h2>Add Service</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Service Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
        <button type="submit">Add Service</button>
      </form>
    </div>
  );
};

export default AddService;
