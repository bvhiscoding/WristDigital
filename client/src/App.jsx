import { Routes, Route } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./pages/HomePage/Home.jsx";
import ProductsPage from "./pages/ProductsPage/ProductsPage.jsx";
import ProductDetails from "./pages/ProductDetails/ProductDetails.jsx";
import SalePage from "./pages/SalePage/SalePage.jsx";
import AccessoriesPage from "./pages/AccessoriesPage/AccessoriesPage.jsx";
import BlogsPage from "./pages/BlogsPage/BlogsPage.jsx";
import CartPage from "./pages/CartPage/CartPage.jsx";
import MyOrdersPage from "./pages/MyOrdersPage/MyOrdersPage.jsx";
import ProfilePage from "./pages/ProfilePage/ProfilePage.jsx";
import WishlistPage from "./pages/WishlistPage/WishlistPage.jsx";
import SupportPage from "./pages/SupportPage/SupportPage.jsx";
import SettingsPage from "./pages/SettingsPage/SettingsPage.jsx";
import FloatingChat from "./components/FloatingChat.jsx";
import LoginPage from "./pages/Auth/LoginPage.jsx";
import RegisterPage from "./pages/Auth/RegisterPage.jsx";

export default function App() {
  return (
    <main
      className="w-full overflow-x-hidden bg-neutral-200 min-h-screen"
      aria-label="WristDigital mockup page"
      style={{ "--figma-scale": "min(1, calc(100vw / 1440))" }}
    >
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="*"
          element={
            <>
              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/products" element={<ProductsPage />} />
                  <Route path="/product-details" element={<ProductDetails />} />
                  <Route path="/accessories" element={<AccessoriesPage />} />
                  <Route path="/sale" element={<SalePage />} />
                  <Route path="/blogs" element={<BlogsPage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/my-orders" element={<MyOrdersPage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/wishlist" element={<WishlistPage />} />
                  <Route path="/help" element={<SupportPage />} />
                  <Route path="/settings" element={<SettingsPage />} />
                </Routes>
              </Layout>
              <FloatingChat />
            </>
          }
        />
      </Routes>
    </main>
  );
}
