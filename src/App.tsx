import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import WhatsAppButton from "@/components/WhatsAppButton";
import Index from "./pages/Index.tsx";
import Contact from "./pages/Contact.tsx";

import Services from "./pages/Services.tsx";
import About from "./pages/About.tsx";
import Gallery from "./pages/Gallery.tsx";
import Impact from "./pages/Impact.tsx";
import Tabasamu from "./pages/Tabasamu.tsx";
import Newsletters from "./pages/Newsletters.tsx";
import Donate from "./pages/Donate.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/tabasamu" element={<Tabasamu />} />
          <Route path="/newsletters" element={<Newsletters />} />
          <Route path="/donate" element={<Donate />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
