import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { QueryClientProvider,QueryClient } from "@tanstack/react-query";


const querylient= new QueryClient()

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={querylient}>

      <App />
    </QueryClientProvider>
  </StrictMode>,
);
