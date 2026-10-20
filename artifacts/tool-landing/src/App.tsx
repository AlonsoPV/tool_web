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
import Vmkt from "@/pages/Vmkt";
import VmktValue from "@/pages/VmktValue";
import VmktTeam from "@/pages/VmktTeam";
import Plan from "@/pages/Plan";
import PlanValue from "@/pages/PlanValue";
import PlanTeam from "@/pages/PlanTeam";
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

const vmktCover = {
  kicker: 'PROPUESTA V-MKT · GAOZ · 21 SEMANAS',
  title: 'Marketing conectado a ventas — GAOZ',
  lead: 'Documento de trabajo para Dirección. Ingresa la clave para abrir la propuesta V-MKT.',
  meta: 'Solo para uso interno de GAOZ',
  pageTitle: 'TOOL · Propuesta V-MKT',
  pageDescription: 'Propuesta de 21 semanas para conectar marketing, ventas y cobranza en GAOZ.',
};

const planCover = {
  kicker: 'PLAN · GAOZ · 16 SEMANAS',
  title: 'Sistema de Gestión Comercial — Plan GAOZ',
  lead: 'Documento de trabajo para Dirección. Ingresa la clave para abrir el plan de cuatro meses.',
  meta: 'Solo para uso interno de GAOZ',
  pageTitle: 'TOOL · Plan GAOZ',
  pageDescription: 'Plan de 16 semanas para conectar marketing, ventas y cobranza en GAOZ.',
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

function VmktProposal() {
  return (
    <GaozGate storageKey="tool-vmkt-unlocked" cover={vmktCover}>
      <Vmkt />
    </GaozGate>
  );
}

function VmktValueProposal() {
  return (
    <GaozGate storageKey="tool-vmkt-unlocked" cover={vmktCover}>
      <VmktValue />
    </GaozGate>
  );
}

function VmktTeamProposal() {
  return (
    <GaozGate storageKey="tool-vmkt-unlocked" cover={vmktCover}>
      <VmktTeam />
    </GaozGate>
  );
}

function PlanProposal() {
  return (
    <GaozGate storageKey="tool-plan-unlocked" cover={planCover}>
      <Plan />
    </GaozGate>
  );
}

function PlanValueProposal() {
  return (
    <GaozGate storageKey="tool-plan-unlocked" cover={planCover}>
      <PlanValue />
    </GaozGate>
  );
}

function PlanTeamProposal() {
  return (
    <GaozGate storageKey="tool-plan-unlocked" cover={planCover}>
      <PlanTeam />
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
        <Route path="/v-mkt/valor" component={VmktValueProposal} />
        <Route path="/v-mkt/equipo" component={VmktTeamProposal} />
        <Route path="/v-mkt" component={VmktProposal} />
        <Route path="/plan/valor" component={PlanValueProposal} />
        <Route path="/plan/equipo" component={PlanTeamProposal} />
        <Route path="/plan" component={PlanProposal} />
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
