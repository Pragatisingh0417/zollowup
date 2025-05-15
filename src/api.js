import axios from "axios";

// Base URLs
const USER_API_URL = "http://localhost:5000/api/users";
const EMPLOYEE_API_URL = "http://localhost:5000/api/employees";

// Fetch all users (Admin only)
export const fetchUsers = async (token) => {
  try {
    const response = await axios.get(USER_API_URL, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error.response?.data?.message || "Failed to fetch users";
  }
};

// Fetch single user by ID
export const fetchUserById = async (userId, token) => {
  try {
    const response = await axios.get(`${USER_API_URL}/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error.response?.data?.message || "Failed to fetch user";
  }
};

// Register user
export const registerUser = async (userData) => {
  try {
    const res = await axios.post(`${USER_API_URL}/register`, userData);
    return res.data;
  } catch (error) {
    console.error("🛑 Register API Error:", error.response?.data || error.message);
    throw error.response?.data?.message || "Signup failed";
  }
};

// Login user
export const loginUser = async (credentials) => {
  try {
    const res = await axios.post(`${USER_API_URL}/login`, credentials);
    return res.data;
  } catch (error) {
    console.error("🛑 Login API Error:", error.response?.data || error.message);
    throw error.response?.data?.message || "Login failed";
  }
};

// Submit contact form
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

// Employee Login
export const loginEmployee = async ({ email, password }) => {
  try {
    const res = await axios.post(`${EMPLOYEE_API_URL}/login`, { email, password });
    return res.data;
  } catch (error) {
    console.error("🛑 Employee Login API Error:", error.response?.data || error.message);
    throw error.response?.data?.msg || "Employee login failed";
  }
};

// Employee Register (optional)
export const registerEmployee = async (employeeData) => {
  try {
    const res = await axios.post(`${EMPLOYEE_API_URL}/register`, employeeData);
    return res.data;
  } catch (error) {
    console.error("🛑 Employee Register API Error:", error.response?.data || error.message);
    throw error.response?.data?.msg || "Employee signup failed";
  }
};
