import Layout from "./Layout.jsx";

import Home from "./pages/HomePage/Home.jsx";

export default function App() {
  return (
    <main
      className="w-full overflow-x-hidden bg-neutral-200"
      aria-label="WristDigital mockup page"
      style={{ "--figma-scale": "min(1, calc(100vw / 1440))" }}
    >
      <Layout>
        <Home />
      </Layout>
    </main>
  );
}
