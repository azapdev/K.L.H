import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./hooks/AuthContext";
import "./i18n";
import "./index.css";
import Index from "./layout/Index";
import { Preloader } from "./Pages";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Preloader />
    <AuthProvider>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Index />
        </QueryClientProvider>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
);
