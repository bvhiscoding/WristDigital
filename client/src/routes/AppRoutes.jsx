import React from "react";
import { Routes, Route } from "react-router-dom";

// Layout
import Layout from "../Layout";

// Auth pages (public only — redirect to / if already logged in)
import LoginPage from "../pages/Auth/LoginPage";
import RegisterPage from "../pages/Auth/RegisterPage";

// Public pages
import Home from "../pages/HomePage/Home";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import AccessoriesPage from "../pages/AccessoriesPage/AccessoriesPage";
import SalePage from "../pages/SalePage/SalePage";
import BlogsPage from "../pages/BlogsPage/BlogsPage";
import SupportPage from "../pages/SupportPage/SupportPage";

// Private pages (require login)
import CartPage from "../pages/CartPage/CartPage";
import MyOrdersPage from "../pages/MyOrdersPage/MyOrdersPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import WishlistPage from "../pages/WishlistPage/WishlistPage";
import SettingsPage from "../pages/SettingsPage/SettingsPage";
import AdminPage from "../pages/AdminPage/AdminPage";

// Route guards
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";

// Floating UI
import FloatingChat from "../components/FloatingChat";

/**
 * AppRoutes — Tập trung toàn bộ định nghĩa routes của ứng dụng.
 *
 * Phân loại:
 *  • Public Auth  — /login, /register (không cần đăng nhập)
 *  • Public       — /, /products, /accessories, /sale, /blogs, /help, /product-details
 *  • Private      — /cart, /my-orders, /profile, /wishlist, /settings (cần đăng nhập)
 *  • Admin        — /admin/* (placeholder, triển khai sau)
 */
const AppRoutes = () => {
  return (
    <Routes>
      {/* ─── Auth pages (no layout) ─────────────────────────────── */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* ─── Admin pages (Standalone Layout) ────────────────────── */}
      <Route
        path="/admin/*"
        element={
          <AdminRoute>
            <AdminPage />
          </AdminRoute>
        }
      />

      {/* ─── All other pages (with Layout) ──────────────────────── */}
      <Route
        path="*"
        element={
          <>
            <Layout>
              <Routes>
                {/* Public routes */}
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/product-details" element={<ProductDetails />} />
                <Route path="/accessories" element={<AccessoriesPage />} />
                <Route path="/sale" element={<SalePage />} />
                <Route path="/blogs" element={<BlogsPage />} />
                <Route path="/help" element={<SupportPage />} />

                {/* Private routes — require authentication */}
                <Route
                  path="/cart"
                  element={
                    <PrivateRoute>
                      <CartPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/my-orders"
                  element={
                    <PrivateRoute>
                      <MyOrdersPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <PrivateRoute>
                      <ProfilePage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/wishlist"
                  element={
                    <PrivateRoute>
                      <WishlistPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/settings"
                  element={
                    <PrivateRoute>
                      <SettingsPage />
                    </PrivateRoute>
                  }
                />
              </Routes>
            </Layout>
            <FloatingChat />
          </>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
