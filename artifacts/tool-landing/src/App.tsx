import { useEffect } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Gaoz from "@/pages/Gaoz";
import GaozV6 from "@/pages/GaozV6";
import GaozV6Value from "@/pages/GaozV6Value";
import GaozV6Team from "@/pages/GaozV6Team";
import GaozDiagnosis from "@/pages/GaozDiagnosis";
import GaozGate from "@/components/GaozGate";
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

const gaozV6Cover = {
  kicker: 'PROPUESTA COMERCIAL · GAOZ · 21 SEMANAS',
  title: 'Diseño y Ejecución de Ecosistema Comercial - GAOZ',
  lead: 'Documento de trabajo para Dirección. Ingresa la clave para abrir la propuesta.',
  meta: 'Solo para uso interno de GAOZ',
  pageTitle: 'Diseño y Ejecución de Ecosistema Comercial - GAOZ',
  pageDescription: 'Propuesta de 21 semanas para diseñar y ejecutar un ecosistema comercial para GAOZ.',
};

function GaozProposal() {
  return (
    <GaozGate>
      <Gaoz />
    </GaozGate>
  );
}

function GaozV6Proposal() {
  return (
    <GaozGate storageKey="tool-gaoz-v6-unlocked" cover={gaozV6Cover}>
      <GaozV6 />
    </GaozGate>
  );
}

function GaozV6ValueProposal() {
  return (
    <GaozGate storageKey="tool-gaoz-v6-unlocked" cover={gaozV6Cover}>
      <GaozV6Value />
    </GaozGate>
  );
}

function GaozV6TeamProposal() {
  return (
    <GaozGate storageKey="tool-gaoz-v6-unlocked" cover={gaozV6Cover}>
      <GaozV6Team />
    </GaozGate>
  );
}

function GaozDiagnosisProtected() {
  return (
    <GaozGate>
      <GaozDiagnosis />
    </GaozGate>
  );
}

function Router() {
  return (
    <>
      <RouteScrollManager />
      <Switch>
        <Route path="/gaoz/diagnostico" component={GaozDiagnosisProtected} />
        <Route path="/gaoz-v6/valor" component={GaozV6ValueProposal} />
        <Route path="/gaoz-v6/equipo" component={GaozV6TeamProposal} />
        <Route path="/gaoz-v6" component={GaozV6Proposal} />
        <Route path="/gaoz" component={GaozProposal} />
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
