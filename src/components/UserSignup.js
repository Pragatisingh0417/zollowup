import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import UserLogin from './UserLogin';

const UserSignup = ({ onClose }) => {
  const [showLogin, setShowLogin] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null); // Error handling state
  const navigate = useNavigate();

  if (showLogin) {
    return <UserLogin onClose={onClose} setShowLogin={setShowLogin} />;
  }

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError(null);
  setMessage(null);
  try {
    const res = await fetch('http://localhost:5000/api/auth/user/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const result = await res.json();

    if (res.ok) {
      setMessage('Signup successful! Please check your email to verify your account.');
      setFormData({ name: '', email: '', password: '' });
      // Don't navigate or close the form until email is verified
    } else {
      setError(result.msg || 'Signup failed.');
    }
  } catch (error) {
    console.error(error);
    setError('Error occurred during signup.');
  } finally {
    setLoading(false);
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

        {message && <p className="text-green-500 text-sm mb-3">{message}</p>}
        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

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
            disabled={loading} // Disable button when loading
          >
            {loading ? 'Signing up...' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserSignup;
