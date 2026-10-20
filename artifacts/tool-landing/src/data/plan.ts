import { BadgeCheck, PenLine, Search, type LucideIcon } from 'lucide-react';

export type PlanStage = {
  id: string;
  index: string;
  weeks: string;
  title: string;
  full: string;
  purpose: string;
  highlights: string[];
  activities: { title: string; copy: string }[];
  deliverable: string;
  gate: string;
  icon: LucideIcon;
  color: string;
  lit: string;
};

export const planDiagramTitle = 'De la campaña a un resultado que GAOZ puede repetir.';
export const planDiagramLead = 'Diagnosticar y activar en dos semanas, cocrear el método y dejar al equipo operando en cuatro meses.';

export const planStages: PlanStage[] = [
  {
    id: 'etapa-1',
    index: '01',
    weeks: 'Semanas 1–2',
    title: 'Diagnóstico acelerado y activación',
    full: 'Diagnóstico acelerado y activación',
    purpose: 'Identificar dónde se pierde valor y comenzar a recuperarlo desde la primera semana.',
    highlights: [
      'Marketing y seguimiento',
      'Activar mailing e inventario',
      'Entender cómo se vende',
      'Evaluar liderazgo y capacidades',
    ],
    activities: [
      { title: 'Marketing y seguimiento', copy: 'Revisar campañas, calidad de prospectos y atribución antes de ajustar presupuesto. Medir leads únicos, oportunidades y ventas. Confirmar la distribución de cuentas y territorios.' },
      { title: 'Activar mailing e inventario', copy: 'Usar el inventario actualizado y dar seguimiento al mailing del 5 de octubre. Convertir respuestas en cotizaciones, ventas y cobros, con siguiente acción y fecha. Conciliar la cartera por cliente y razón social.' },
      { title: 'Entender cómo se vende', copy: 'Revisar casos ganados y perdidos, observar al equipo y detectar las prácticas del mejor vendedor que sí pueden estandarizarse. Distinguir la relación personal del dueño del método comercial.' },
      { title: 'Evaluar liderazgo y capacidades', copy: 'Aplicar una matriz objetiva de competencias a gerencia y equipo. Investigar caídas de ventas con datos comparables y valorar disposición individual al cambio, sin usar la edad como criterio.' },
    ],
    deliverable: 'Diagnóstico ejecutivo, mapa de procesos y brechas, línea base de KPIs, prioridades de mercado y tres listas de ejecución activas.',
    gate: 'Diagnóstico y evaluación preliminar de capacidades al cierre de semana 2. Oportunidades y cobranza con seguimiento verificable.',
    icon: Search,
    color: '#0e2748',
    lit: '#16345c',
  },
  {
    id: 'etapa-2',
    index: '02',
    weeks: 'Semanas 3–8',
    title: 'Cocrear, diseñar y validar',
    full: 'Cocrear, diseñar y validar',
    purpose: 'Cocrear con el equipo un método comercial sencillo, medible y adaptable. Probarlo con casos reales antes de institucionalizarlo.',
    highlights: [
      'Modelo comercial y gobierno',
      'Proceso adaptable y políticas',
      'Flujo Marketing → Ventas',
      'Herramientas y Academia Scrumban',
    ],
    activities: [
      { title: 'Modelo comercial y gobierno', copy: 'Definir funciones, autoridad, reglas de escalamiento y participación del dueño en cartera clave. Separar autonomía operativa de dependencia económica de sus ventas. Definir meta de ventas y KPIs.' },
      { title: 'Proceso adaptable y políticas', copy: 'Cocrear etapas y criterios mínimos de avance, cotización, precios, descuentos, crédito y cobranza. Diseñar rutas de excepción para clientes, proveedores y productos distintos, con umbrales de margen, riesgo y autoridad.' },
      { title: 'Flujo Marketing → Ventas', copy: 'Formalizar criterios de lead calificado, traspaso, tiempos de respuesta y retroalimentación de cotizaciones y cierres. Convertir el seguimiento de campañas en un método repetible.' },
      { title: 'Herramientas y Academia Scrumban', copy: 'CRM con etapas y campos obligatorios, kit comercial y tablero de KPIs. Habilitar Academia Scrumban con materiales técnicos y comerciales por rol, y medir aplicación en casos reales.' },
    ],
    deliverable: 'Modelo cocreado, procesos adaptables, flujo Marketing–Ventas, kit comercial, CRM, Academia Scrumban inicial y piloto validado.',
    gate: 'Proceso aprobado y demostrado como utilizable por el equipo en casos reales.',
    icon: PenLine,
    color: '#14556e',
    lit: '#1a6a86',
  },
  {
    id: 'etapa-3',
    index: '03',
    weeks: 'Semanas 9–16',
    title: 'Implementar y consolidar',
    full: 'Implementar y consolidar',
    purpose: 'Dos meses intensivos de implementación, acompañamiento y transferencia de autonomía. La activación de ventas y cobranza no se detiene.',
    highlights: [
      'Sales Readiness aplicado',
      'Pipeline en CRM',
      'Piloto de campañas e inventario',
      'Autonomía y estrategia 2027',
    ],
    activities: [
      { title: 'Sales Readiness aplicado', copy: 'Practicar diagnóstico de necesidades, negociación, objeciones, cierre y seguimiento según brechas individuales. Validar aprendizaje con desempeño observable en la Academia Scrumban.' },
      { title: 'Pipeline en CRM', copy: 'Operar todo el pipeline en CRM: cada oportunidad con etapa, siguiente acción y fecha. Sin seguimiento, no hay visibilidad ni atribución de campaña.' },
      { title: 'Piloto de campañas e inventario', copy: 'Aplicar el proceso a oportunidades de campañas e inventario, equipos nuevos y reacondicionados, y cuentas por cobrar conciliadas. Corregir bloqueos antes de ampliar su uso.' },
      { title: 'Autonomía y estrategia 2027', copy: 'Institucionalizar reuniones, corregir desviaciones con datos y definir prioridades de mercado, productos y canales con base en los resultados del proyecto.' },
    ],
    deliverable: 'Operación comercial funcionando, tablero activo, Academia en uso, conexión Marketing–Ventas operativa y plan de continuidad de 90 días.',
    gate: 'Cuatro ciclos semanales consecutivos conducidos por GAOZ, con información actualizada, decisiones registradas y compromisos verificados.',
    icon: BadgeCheck,
    color: '#0b7358',
    lit: '#0d8a68',
  },
];

export const planOutcomes = [
  {
    id: 'ventas',
    index: '01',
    title: 'Más ventas',
    short: 'Ventas',
    purpose: 'Que las campañas y el equipo conviertan oportunidades calificadas en ventas.',
    indicators: ['Leads únicos calificados', 'Oportunidades de campaña', 'Ventas del equipo', 'Conversión por etapa', 'Ciclo comercial'],
  },
  {
    id: 'rentabilidad',
    index: '02',
    title: 'Más rentabilidad',
    short: 'Rentabilidad',
    purpose: 'Que el ticket, el margen y la mezcla sostengan el resultado.',
    indicators: ['Ticket promedio y mediana', 'Margen', 'Mezcla por producto y tipo de equipo'],
  },
  {
    id: 'liquidez',
    index: '03',
    title: 'Más liquidez',
    short: 'Liquidez',
    purpose: 'Que el efectivo vuelva al negocio y baje el capital detenido.',
    indicators: ['Efectivo recuperado sobre cartera vencida conciliada', 'Nuevos atrasos', 'Reducción de inventario detenido'],
  },
  {
    id: 'disciplina',
    index: '04',
    title: 'Más disciplina',
    short: 'Disciplina',
    purpose: 'Que el seguimiento de campañas y ventas termine en una acción verificable.',
    indicators: ['Oportunidades con siguiente paso', 'Seguimiento oportuno', 'Cumplimiento verificable de compromisos'],
  },
  {
    id: 'autonomia',
    index: '05',
    title: 'Más autonomía',
    short: 'Autonomía',
    purpose: 'Que vender y decidir no dependa de la intervención cotidiana del dueño.',
    indicators: ['Ventas sin intervención del dueño', 'Decisiones autónomas', 'Proporción de ventas vinculadas a su cartera'],
  },
];
