import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';

const UserLogin = ({ onClose = () => {}, setShowLogin = () => {}, setShowSignup = () => {} }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [verifiedStatus, setVerifiedStatus] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const { login } = useAuth();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const verified = params.get('verified');
    if (verified) setVerifiedStatus(verified);

    // ✅ Remove the URL param after handling
    if (verified) {
      const newURL = new URL(window.location.href);
      newURL.searchParams.delete('verified');
      window.history.replaceState({}, '', newURL.toString());
    }
  }, [location.search]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await login(email, password); // ✅ updates AuthContext
      setEmail('');
      setPassword('');
      onClose(); // ✅ close modal
      navigate('/dashboard'); // ✅ redirect to dashboard
    } catch (err) {
      console.error(err);
      setError(err?.response?.data?.message || 'Login failed');
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
            onClick={() => {
              setShowLogin(false);
              setShowSignup(true);
            }}
            className="text-blue-600 hover:underline"
          >
            Sign up here
          </button>
        </p>

        {verifiedStatus === 'true' && (
          <p className="text-green-600 text-sm mb-3 text-center">
            ✅ Email verified successfully. Please log in.
          </p>
        )}
        {verifiedStatus === 'expired' && (
          <p className="text-red-600 text-sm mb-3 text-center">
            ❌ Verification link expired or invalid.
          </p>
        )}
        {verifiedStatus === 'already' && (
          <p className="text-yellow-600 text-sm mb-3 text-center">
            ℹ️ Email already verified. Please log in.
          </p>
        )}

        {error && <p className="text-red-500 text-sm mb-3 text-center">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-3">
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border p-2 w-full rounded"
          />
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border p-2 w-full rounded"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full transition"
          >
            {loading ? 'Logging in...' : 'Log In'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
