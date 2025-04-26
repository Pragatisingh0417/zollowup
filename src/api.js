import axios from "axios";

const API_URL = "http://localhost:5000/api/users"; 

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
    const res = await axios.post("http://localhost:5000/api/auth/register", userData);
    return res.data;
  } catch (error) {
    console.error("🛑 Register API Error:", error.response?.data || error.message);
    throw error.response?.data?.message || "Signup failed";
  }
};

export const submitContactForm = async (formData) => {
  try {
    const response = await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      throw new Error('Failed to submit contact form');
    }
    return await response.json();
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
};



  
