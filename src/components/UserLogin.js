import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import GoogleLoginButton from './GoogleLoginButton';
import { loginUser } from '../api';

const UserLogin = ({ onClose, setShowLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const result = await loginUser({ email, password });
      localStorage.setItem('userToken', result.token);
      localStorage.setItem('user', JSON.stringify(result.user));

      setEmail('');
      setPassword('');
      navigate('/dashboard');
      onClose();
    } catch (err) {
      console.error(err);
      setError(err?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-start z-50 pt-10 px-4">
      <div className="relative bg-white p-6 rounded shadow-xl w-full max-w-md animate-slide-down">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-500 hover:text-red-500"
        >
          <X size={22} />
        </button>
        <h2 className="text-xl font-semibold mb-4 text-center">Log In to Your Account</h2>

        <p className="text-sm text-gray-700 text-center mb-3">
          Don't have an account?{' '}
          <button
            onClick={() => setShowLogin(false)}
            className="text-blue-600 hover:underline"
          >
            Sign up here
          </button>
        </p>

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-3">
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border p-2 w-full rounded"
          />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border p-2 w-full rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full transition duration-200"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Log In'}
          </button>
        </form>

        <div className="my-4">
          <GoogleLoginButton />
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
