import { createContext, useContext, useEffect, useState } from "react";

// Create AuthContext
const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null); // Optional: for user data
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
      setIsAuthenticated(true);
  
      // ✅ Fetch user info using the saved token
      const fetchUser = async () => {
        try {
          const res = await fetch("http://localhost:5000/api/auth/me", {
            headers: {
              Authorization: `Bearer ${savedToken}`,
            },
          });
          
          const data = await res.json();
          setUser(data); // 🧠 Set the user here
        } catch (err) {
          console.error("Failed to fetch user", err);
          logout(); // Optional: log out on failure
        }
      };
  
      fetchUser();
    }
  }, []);
  

  const login = (token, userData) => {
    localStorage.setItem("token", token);
    setToken(token);
    setUser(userData); // Save user info to context
    setIsAuthenticated(true);
  };
  

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, isAuthenticated, login, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);
