import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // ✅ For redirecting after logout

  useEffect(() => {
    let isMounted = true;

    const savedToken = localStorage.getItem("token");

    if (savedToken) {
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

        const fetchUser = async () => {
          try {
            const res = await fetch("http://localhost:5000/api/auth/me", {
              headers: {
                Authorization: `Bearer ${savedToken}`,
              },
            });

            if (!res.ok) throw new Error("Failed to fetch user");

            const data = await res.json();
            if (isMounted) setUser(data);
          } catch (err) {
            console.error("Error fetching user:", err);
            if (isMounted) logout();
          } finally {
            if (isMounted) setLoading(false);
          }
        };

        fetchUser();
      } catch (err) {
        console.error("Invalid token:", err);
        logout();
        if (isMounted) setLoading(false);
      }
    } else {
      if (isMounted) setLoading(false);
    }

    return () => {
      isMounted = false;
    };
  }, []);

  const login = (token, userData) => {
    localStorage.setItem("token", token);
    setToken(token);
    setUser(userData);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setIsAuthenticated(false);
    setUser(null);
    navigate("/"); // ✅ Redirect to home page after logout
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
