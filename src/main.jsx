import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Paradidatico from "./pages/Paradidatico/index.jsx";
import About from "./pages/About/index.jsx";
import Experiencia from "./pages/Xprofissional/index.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/paradidatico",
    element: <Paradidatico />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/experiencia",
    element: <Experiencia />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
