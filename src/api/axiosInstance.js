// src/api/axiosInstance.js
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api", // update if your backend is hosted elsewhere
  withCredentials: true, // for cookies/JWT
});

export default instance;
