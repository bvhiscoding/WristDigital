import { Routes, Route } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./pages/HomePage/Home.jsx";
import ProductsPage from "./pages/ProductsPage/ProductsPage.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import SalePage from "./pages/SalePage/SalePage.jsx";
import AccessoriesPage from "./pages/AccessoriesPage/AccessoriesPage.jsx";
import BlogsPage from "./pages/BlogsPage/BlogsPage.jsx";
import CartPage from "./pages/CartPage/CartPage.jsx";
import MyOrdersPage from "./pages/MyOrdersPage/MyOrdersPage.jsx";

export default function App() {
  return (
    <main
      className="w-full overflow-x-hidden bg-neutral-200 min-h-screen"
      aria-label="WristDigital mockup page"
      style={{ "--figma-scale": "min(1, calc(100vw / 1440))" }}
    >
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
        </Routes>
      </Layout>
    </main>
  );
}
