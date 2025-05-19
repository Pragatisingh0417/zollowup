import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const logout = useCallback(() => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
    navigate("/");
  }, [navigate]);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    let isMounted = true;

    const fetchUser = async () => {
      try {
        const decoded = jwtDecode(savedToken);
        const isExpired = decoded.exp * 1000 < Date.now();
        if (isExpired) {
          logout();
          if (isMounted) setLoading(false);
          return;
        }

        setToken(savedToken);
        setIsAuthenticated(true);

        const res = await fetch("http://localhost:5000/api/users/me", {
          headers: {
            Authorization: `Bearer ${savedToken}`,
          },
        });

        if (!res.ok) throw new Error("Failed to fetch user");
        const data = await res.json();
        if (isMounted) setUser(data);
      } catch (err) {
        console.error("Auth fetch error:", err);
        if (isMounted) logout();
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    if (savedToken) {
      fetchUser();
    } else {
      setLoading(false);
    }

    return () => {
      isMounted = false;
    };
  }, [logout]);

  const login = (token, userData) => {
    localStorage.setItem("token", token);
    setToken(token);
    setUser(userData);
    setIsAuthenticated(true);
  };

  return (
    <AuthContext.Provider
      value={{ token, user, isAuthenticated, login, logout, loading, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
