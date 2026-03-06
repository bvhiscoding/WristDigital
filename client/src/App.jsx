import { Routes, Route } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./pages/HomePage/Home.jsx";

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
          {/* Add future routes here, e.g. <Route path="/products" element={<Products />} /> */}
        </Routes>
      </Layout>
    </main>
  );
}
