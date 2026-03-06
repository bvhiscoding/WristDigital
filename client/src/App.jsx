import { Routes, Route } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./pages/HomePage/Home.jsx";
import ProductsPage from "./pages/ProductsPage/ProductsPage.jsx";
import SalePage from "./pages/SalePage/SalePage.jsx";

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
          <Route path="/sale" element={<SalePage />} />
        </Routes>
      </Layout>
    </main>
  );
}
