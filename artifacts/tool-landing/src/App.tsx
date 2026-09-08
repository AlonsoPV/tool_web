import { useEffect } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Gaoz from "@/pages/Gaoz";
import WhatWeDo from "@/pages/WhatWeDo";
import About from "@/pages/About";
import Contact from "@/pages/Contact";

const queryClient = new QueryClient();

function RouteScrollManager() {
  const [location] = useLocation();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    const timer = window.setTimeout(() => {
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);

    return () => window.clearTimeout(timer);
  }, [location]);

  return null;
}

function Router() {
  return (
    <>
      <RouteScrollManager />
      <Switch>
        <Route path="/gaoz" component={Gaoz} />
        <Route path="/" component={Home} />
        <Route path="/que-hacemos" component={WhatWeDo} />
        <Route path="/quienes-somos" component={About} />
        <Route path="/contacto" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
