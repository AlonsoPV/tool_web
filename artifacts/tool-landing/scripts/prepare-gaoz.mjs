import { cp, mkdir, readFile, writeFile } from 'node:fs/promises';
// Preserve the main site; emit a dedicated HTML entry with crawler-readable metadata.
await cp('dist/public', 'out', { recursive: true });
await mkdir('out/gaoz', { recursive: true });
let html = await readFile('dist/public/index.html', 'utf8');
const title = 'TOOL Sales Lab · GAOZ | Sistema comercial en 5 semanas';
const description = 'Convierte 27 años de experiencia de GAOZ en un sistema comercial enfocado, medible y repetible. 5 semanas, 10 sesiones y oportunidades reales desde el inicio.';
html = html.replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
  .replace(/(<meta (?:name|property)="(?:description|og:description|twitter:description)" content=")[^"]*/g, `$1${description}`)
  .replace(/(<meta (?:name|property)="(?:og:title|twitter:title)" content=")[^"]*/g, `$1${title}`)
  .replace('</head>', '<link rel="canonical" href="https://tool-sales-lab-gaoz.alpeva.chatgpt.site/gaoz/" />\n<meta property="og:locale" content="es_MX" />\n</head>');
await writeFile('out/gaoz/index.html', html);
await mkdir('out/gaoz/diagnostico', { recursive: true });
const diagnosticTitle = 'Diagnóstico comercial GAOZ | TOOL';
const diagnosticDescription = 'Situación actual, prioridades y primeras acciones del diagnóstico comercial de GAOZ. Una ruta visual hacia un sistema de ventas medible.';
const diagnosticHtml = html.replaceAll(title, diagnosticTitle).replaceAll(description, diagnosticDescription).replace('https://tool-sales-lab-gaoz.alpeva.chatgpt.site/gaoz/', 'https://tool-sales-lab-gaoz.alpeva.chatgpt.site/gaoz/diagnostico/');
await writeFile('out/gaoz/diagnostico/index.html', diagnosticHtml);

