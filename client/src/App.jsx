import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <main
      className="w-full overflow-x-hidden bg-neutral-200 min-h-screen"
      aria-label="WristDigital mockup page"
      style={{ "--figma-scale": "min(1, calc(100vw / 1440))" }}
    >
      <AppRoutes />
    </main>
  );
}
