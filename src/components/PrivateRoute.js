// PrivateRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const PrivateRoute = ({ children, path }) => {
  const { user, isAuthenticated, loading } = useAuth();

  if (loading) return <div>Loading...</div>; // or spinner

  // If the route is /dashboard, skip authentication check
  if (path === "/dashboard") {
    return children;
  }

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
