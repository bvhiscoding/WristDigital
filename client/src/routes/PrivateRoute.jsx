import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../features/auth/authSlice";

/**
 * PrivateRoute
 * Bảo vệ các route yêu cầu đăng nhập.
 * Nếu chưa đăng nhập → redirect về /login và lưu lại URL hiện tại (state.from)
 * để sau khi đăng nhập có thể quay lại trang đó.
 */
const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
