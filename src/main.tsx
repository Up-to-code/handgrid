import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./routes-e";
import "./styles.css";
import "./styles2.css";
import "./styles3.css";
import "./styles4.css";
import "./styles5.css";
import "./styles6.css";
import "./styles7.css";

const rootEl = document.getElementById("root");
if (rootEl) {
  createRoot(rootEl).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  );
}
