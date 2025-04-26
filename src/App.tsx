
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { register as registerServiceWorker } from "./serviceWorkerRegistration";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AIAssistant from "@/components/ui/AIAssistant";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import RoomsPage from "./pages/RoomsPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Register service worker for PWA capabilities
    registerServiceWorker();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navbar />
          <main className="pt-16"> {/* Add padding top to account for fixed navbar */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/rooms" element={<RoomsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <AIAssistant />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
