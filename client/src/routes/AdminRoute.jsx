import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectCurrentUser,
  selectIsAuthenticated,
} from "../features/auth/authSlice";

const AdminRoute = ({ children }) => {
  const user = useSelector(selectCurrentUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);

  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }

  // Temporarily commented out for testing
  // if (user.role !== "admin") {
  //   return <Navigate to="/" replace />;
  // }

  return children;
};

export default AdminRoute;
