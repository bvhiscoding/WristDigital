import React from "react";
// import { Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectCurrentUser } from "../features/auth/authSlice";

/**
 * AdminRoute — placeholder (triển khai sau)
 *
 * Khi sẵn sàng, bật comment bên dưới để bảo vệ các trang admin:
 * - Kiểm tra isAuthenticated
 * - Kiểm tra user.role === "admin"
 * - Nếu không đủ quyền → redirect về trang 403 hoặc trang chủ
 *
 * @example
 * <Route path="/admin/*" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
 */
const AdminRoute = ({ children }) => {
  // TODO: uncomment khi đã sẵn sàng triển khai admin
  // const user = useSelector(selectCurrentUser);
  // if (!user) return <Navigate to="/login" replace />;
  // if (user.role !== "admin") return <Navigate to="/" replace />;

  return children;
};

export default AdminRoute;
