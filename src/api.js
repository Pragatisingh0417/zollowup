import axios from "axios";

// Use environment variable for base URL
const BASE_URL = process.env.REACT_APP_API_URL;
const API_URL = `${BASE_URL}/api/users`;

// Fetch all users (Admin only)
export const fetchUsers = async (token) => {
  try {
    const response = await axios.get(API_URL, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

// Fetch single user by ID
export const fetchUserById = async (userId, token) => {
  try {
    const response = await axios.get(`${API_URL}/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};

// Register user
export const registerUser = async (userData) => {
  try {
    const res = await axios.post(`${BASE_URL}/api/auth/register`, userData);
    return res.data;
  } catch (error) {
    console.error("🛑 Register API Error:", error.response?.data || error.message);
    throw error.response?.data?.message || "Signup failed";
  }
};
