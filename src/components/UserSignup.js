import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import UserLogin from './UserLogin';
import { registerUser } from "../api";

const UserSignup = ({ onClose }) => {
  const [showLogin, setShowLogin] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  if (showLogin) {
    return <UserLogin onClose={onClose} />;
  }

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('https://zollowupdemoapi.vercel.app/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        alert('User signup successful!');
        setFormData({ name: '', email: '', password: '' });
        onClose(); // Close the form after success
      } else {
        alert(result.message || 'Signup failed.');
      }
    } catch (error) {
      console.error(error);
      alert('Error occurred during signup.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-start z-50 pt-10 px-4">
      <div className="relative bg-white p-6 rounded shadow-xl w-full max-w-md animate-slide-down">
        <button onClick={onClose} className="absolute top-5 right-5 text-gray-500 hover:text-red-500">
          <X size={22} />
        </button>
        <h2 className="text-xl font-semibold mb-4 text-center">Create your account</h2>
        <p className="text-sm text-gray-700 text-center mb-3">
          Already have an account?{" "}
          <button onClick={() => setShowLogin(true)} className="text-blue-600 hover:underline">
            Log in here
          </button>
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Name"
            onChange={handleChange}
            required
            className="border p-2 w-full rounded"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleChange}
            required
            className="border p-2 w-full rounded"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="Password"
            onChange={handleChange}
            required
            className="border p-2 w-full rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full transition duration-200"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserSignup;
