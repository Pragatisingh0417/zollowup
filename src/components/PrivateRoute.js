// PrivateRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, isAuthenticated, loading } = useAuth();

  if (loading) return <div>Loading...</div>; // or spinner

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
