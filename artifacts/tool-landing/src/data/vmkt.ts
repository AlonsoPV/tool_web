import { BadgeCheck, PenLine, Search, type LucideIcon } from 'lucide-react';

export type VmktStage = {
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

export const vmktDiagramTitle = 'De la campaña a un resultado que GAOZ puede repetir.';
export const vmktDiagramLead = 'Marketing califica y traspasa. Ventas da seguimiento. Cobranza recupera capital. El equipo opera sin que TOOL tenga que estar en la sala.';

export const vmktStages: VmktStage[] = [
  {
    id: 'etapa-1',
    index: '01',
    weeks: 'Semanas 1–4',
    title: 'Diagnosticar y activar',
    full: 'Diagnosticar y activar',
    purpose: 'Identificar dónde se pierde valor en campañas, seguimiento y cartera, y comenzar a recuperarlo.',
    highlights: [
      'Marketing y seguimiento',
      'Activar mailing e inventario',
      'Entender cómo se vende',
      'Mapear el ciclo completo',
    ],
    activities: [
      { title: 'Marketing y seguimiento', copy: 'Revisar campañas, calidad de prospectos y atribución antes de ajustar presupuesto. Medir leads únicos, oportunidades y ventas. Confirmar la distribución de cuentas y territorios.' },
      { title: 'Activar mailing e inventario', copy: 'Usar el inventario actualizado y dar seguimiento al mailing del 5 de octubre. Convertir respuestas en cotizaciones, ventas y cobros, con siguiente acción y fecha. Conciliar la cartera por cliente y razón social.' },
      { title: 'Entender cómo se vende', copy: 'Revisar casos ganados y perdidos, observar al equipo y detectar las prácticas del mejor vendedor que sí pueden estandarizarse. Distinguir la relación personal del dueño del método comercial.' },
      { title: 'Mapear el ciclo completo', copy: 'Prospección, calificación, cotización, cierre, entrega, cobranza, postventa y recompra. Detectar fricciones entre Marketing, Ventas, áreas y razones sociales.' },
    ],
    deliverable: 'Diagnóstico ejecutivo, mapa de procesos y brechas, línea base de KPIs, prioridades de mercado y tres listas de ejecución activas.',
    gate: 'Prioridades y metas calibradas al cierre de semana 4. Campañas, oportunidades y cobranza con seguimiento verificable.',
    icon: Search,
    color: '#0e2748',
    lit: '#16345c',
  },
  {
    id: 'etapa-2',
    index: '02',
    weeks: 'Semanas 5–8',
    title: 'Diseñar y validar',
    full: 'Diseñar y validar',
    purpose: 'Convertir campañas, calificación y venta en un método sencillo, medible y replicable.',
    highlights: [
      'Modelo comercial y gobierno',
      'Método de campañas repetible',
      'Proceso y políticas',
      'Flujo Marketing → Ventas',
    ],
    activities: [
      { title: 'Modelo comercial y gobierno', copy: 'Definir funciones, autoridad, reglas de escalamiento y participación del dueño en cartera clave. Separar autonomía operativa de dependencia económica de sus ventas. Definir meta de ventas y KPIs.' },
      { title: 'Método de campañas repetible', copy: 'Convertir la activación de semanas 1 y 2 en un método: ajustar listas y seguimiento de campañas con lo aprendido. Cada caso con potencial, factibilidad, responsable, siguiente acción y fecha.' },
      { title: 'Proceso y políticas', copy: 'Estandarizar etapas y criterios de avance, cotización, precios, descuentos, crédito, cobranza, garantías, entrega y recompra. Contemplar razones sociales y traspasos entre áreas.' },
      { title: 'Flujo Marketing → Ventas', copy: 'Formalizar criterios de lead calificado, traspaso, tiempos de respuesta, seguimiento y retroalimentación de cotizaciones y cierres. CRM con tipo de cliente, vistas, fechas y tareas.' },
    ],
    deliverable: 'Modelo objetivo, procesos y políticas, kit comercial, diseño de CRM y tablero, plan de capacidades y piloto de campañas validado.',
    gate: 'Proceso aprobado y demostrado como utilizable por el equipo en casos reales, incluido el traspaso Marketing → Ventas.',
    icon: PenLine,
    color: '#14556e',
    lit: '#1a6a86',
  },
  {
    id: 'etapa-3',
    index: '03',
    weeks: 'Semanas 9–21',
    title: 'Implementar y consolidar',
    full: 'Implementar y consolidar',
    purpose: 'Convertir el modelo en ejecución constante: campañas con seguimiento, venta y autonomía.',
    highlights: [
      'Activar resultados',
      'Sales Readiness',
      'Pipeline en CRM',
      'Piloto de campañas e inventario',
    ],
    activities: [
      { title: 'Activar resultados', copy: 'Construir listas accionables de campañas, inventario, productos validados y cartera vencida. Priorizar cada caso por potencial, factibilidad, siguiente acción y fecha.' },
      { title: 'Sales Readiness', copy: 'Practicar diagnóstico de necesidades, negociación, manejo de objeciones, cierre y seguimiento según las brechas del equipo.' },
      { title: 'Pipeline en CRM', copy: 'Operar todo el pipeline en CRM: cada oportunidad con etapa, siguiente acción y fecha. Sin seguimiento, no hay visibilidad ni atribución de campaña.' },
      { title: 'Piloto de campañas e inventario', copy: 'Aplicar el proceso a oportunidades de campañas e inventario, equipos nuevos y reacondicionados, y cuentas por cobrar conciliadas. Corregir bloqueos antes de ampliar su uso.' },
    ],
    deliverable: 'Academia Comercial de GAOZ, plan estratégico 2027 y mapa de trazabilidad de factores de éxito, con flujo Marketing → Ventas en operación.',
    gate: 'Cuatro ciclos semanales consecutivos conducidos por GAOZ, con información actualizada, decisiones registradas y compromisos verificados.',
    icon: BadgeCheck,
    color: '#0b7358',
    lit: '#0d8a68',
  },
];

export const vmktOutcomes = [
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
