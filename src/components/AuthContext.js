import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axiosInstance"; // must include withCredentials: true

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // ✅ Logout: clear cookie and local state
  const logout = useCallback(async () => {
  try {
    await axios.post("/users/logout"); // 🔁 this will now clear the cookie
  } catch (err) {
    console.error("Logout error:", err);
  }

  localStorage.removeItem("user"); // just in case
  setUser(null);
  setIsAuthenticated(false);
  navigate("user-login");
}, [navigate]);


  // ✅ Auto-login using cookie on mount
  useEffect(() => {
 const fetchUser = async () => {
  try {
    const res = await axios.get("/users/me");
    setUser(res.data); // ✅ Make sure res.data includes isAdmin
    setIsAuthenticated(true);
  } catch (err) {
    setUser(null);
    setIsAuthenticated(false);
  } finally {
    setLoading(false);
  }
};


  fetchUser();
}, []);


  // ✅ Login by calling API directly (for email/password)
 const login = async (email, password) => {
  try {
    const res = await axios.post("/users/login", { email, password });
    setUser(res.data.user);
    setIsAuthenticated(true);
    return res;
  } catch (err) {
    // ✅ Re-throw error so it's caught in UserLogin
    throw err;
  }
};


  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, logout, loading, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
