// ============================================================
// Motor de inferencia — genera conocimiento para calculadoras
// usando plantillas basadas en datos (knowledge/templates.json).
// No contiene reglas específicas por calculadora.
// ============================================================

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const KNOWLEDGE_DIR = path.join(ROOT, "knowledge");
const TEMPLATES_PATH = path.join(KNOWLEDGE_DIR, "templates.json");

const ICONS = {
  chart: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 16l4-8 4 4 4-6"/></svg>`,
  bar: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>`,
  calculator: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 2h16v20H4z"/><path d="M8 6h8"/><path d="M8 10h8"/><path d="M8 14h4"/></svg>`,
  percent: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19 5L5 19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>`,
  heart: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.5-1.5 2.5-3.5 2.5-5.5 0-3-2.5-5.5-5.5-5.5-1.5 0-3 .6-4 1.5-1-.9-2.5-1.5-4-1.5C4.5 3 2 5.5 2 8.5 2 10.5 3 12.5 4.5 14L12 22l7-8z"/></svg>`,
  dollar: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 000 4h4a2 2 0 010 4H8"/><path d="M12 18V6"/></svg>`,
  clock: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>`,
  scale: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>`,
};

// ============================================================
// Cargar plantillas desde datos
// ============================================================

let templates = [];
try {
  if (fs.existsSync(TEMPLATES_PATH)) {
    const data = JSON.parse(fs.readFileSync(TEMPLATES_PATH, "utf-8"));
    templates = data.templates || [];
  }
} catch (e) {
  console.warn("  ⚠ No se pudieron cargar las plantillas:", e.message);
}

// ============================================================
// Buscar plantilla por nombre
// ============================================================

function findTemplate(name, category) {
  const lower = name.toLowerCase();

  // Buscar por palabras clave en el nombre
  for (const tpl of templates) {
    for (const kw of tpl.keywords) {
      if (lower.includes(kw)) {
        return tpl;
      }
    }
  }

  // Fallback por categoría
  const categoryFallback = templates.find(t => t.category === category);
  if (categoryFallback) {
    return categoryFallback;
  }

  // Fallback genérico
  return null;
}

// ============================================================
// Aplicar plantilla — sustituye {name} por el nombre corto
// ============================================================

function applyTemplate(tpl, calc) {
  const shortName = calc.title.replace(/^Calculadora\s+(de\s+)?/i, "").trim();
  const lower = shortName.toLowerCase();

  function fill(str) {
    if (!str) return str;
    return str.replace(/\{name\}/g, lower).replace(/\{Name\}/g, shortName);
  }

  function fillDeep(obj) {
    if (typeof obj === "string") return fill(obj);
    if (Array.isArray(obj)) return obj.map(fillDeep);
    if (obj && typeof obj === "object") {
      const result = {};
      for (const [k, v] of Object.entries(obj)) {
        result[k] = fillDeep(v);
      }
      return result;
    }
    return obj;
  }

  const knowledge = {
    id: calc.id,
    icon: tpl.icon,
    description: fill(tpl.description),
    fields: fillDeep(tpl.fields),
    formulaLabel: `Calcular ${shortName}`,
    resetLabel: "Reiniciar",
    pageIntro: fill(tpl.pageIntro),
    logic: {
      type: tpl.formula === "iva" ? "iva" : tpl.formula === "date" ? "date" : "formula",
      fields: tpl.fields.map(f => f.id),
      formula: tpl.formula,
      roundTo: tpl.roundTo,
      unit: tpl.unit,
    },
    seo: {
      title: calc.title,
      description: fill(tpl.seo.description),
      ogTitle: `${calc.title} - Calculadoras Online`,
      ogDescription: fill(tpl.seo.ogDescription),
    },
    editorial: fillDeep(tpl.editorial || []),
  };

  if (tpl.selectors) {
    knowledge.selectors = fillDeep(tpl.selectors);
    knowledge.logic.selectors = tpl.selectors.map(s => s.id);
  }
  if (tpl.classification) {
    knowledge.logic.classification = fillDeep(tpl.classification);
  }
  if (tpl.extraResults) {
    knowledge.logic.extraResults = fillDeep(tpl.extraResults);
  }

  return knowledge;
}

// ============================================================
// Generar plantilla genérica por categoría (fallback)
// ============================================================

function generateFallback(calc) {
  const shortName = calc.title.replace(/^Calculadora\s+(de\s+)?/i, "").trim();
  const lower = shortName.toLowerCase();
  const category = calc.category || "general";

  const categoryConfigs = {
    salud: {
      icon: "heart",
      fields: [
        { id: "valor1", label: "Valor 1", placeholder: "Ej: 70", min: 1, max: 500, step: "0.1", unit: "" },
        { id: "valor2", label: "Valor 2", placeholder: "Ej: 175", min: 1, max: 300, step: "0.5", unit: "" },
      ],
      formula: "valor1 / ((valor2 / 100) ** 2)",
      unit: "",
      roundTo: 1,
      description: `Calcula tu ${lower} de forma rápida y precisa.`,
      pageIntro: `Esta calculadora de salud te permite obtener resultados precisos sobre tu ${lower}.`,
      seoDescription: `Calcula ${lower} gratis. Herramienta de salud online rápida y precisa.`,
      seoOgDescription: `Calcula ${lower} al instante.`,
      editorial: [
        { heading: `¿Qué es ${lower}?`, paragraphs: [`Esta calculadora de ${lower} te ayuda a evaluar tu estado físico actual. Introduce tus datos y obtén una estimación personalizada.`] },
        { heading: "Recomendaciones", paragraphs: ["Consulta siempre a un profesional de la salud para una evaluación completa de tu estado físico."] },
      ],
    },
    finanzas: {
      icon: "dollar",
      fields: [
        { id: "cantidad", label: "Cantidad (€)", placeholder: "Ej: 1000", min: 0.01, max: 999999999, step: "0.01", unit: "€" },
        { id: "porcentaje", label: "Porcentaje (%)", placeholder: "Ej: 10", min: 0, max: 100, step: "0.1", unit: "%" },
      ],
      formula: "cantidad * (1 + porcentaje / 100)",
      unit: " €",
      roundTo: 2,
      description: `Calcula ${lower} de forma rápida y precisa.`,
      pageIntro: `Esta calculadora financiera te ayuda a realizar cálculos sobre ${lower}.`,
      seoDescription: `Calcula ${lower} gratis. Herramienta financiera online rápida y precisa.`,
      seoOgDescription: `Calcula ${lower} al instante.`,
      editorial: [
        { heading: `¿Cómo calcular ${lower}?`, paragraphs: [`Introduce los valores solicitados y pulsa el botón de calcular. Obtendrás el resultado al instante.`] },
        { heading: "Consejos financieros", paragraphs: ["Realiza simulaciones con diferentes valores para encontrar la mejor opción para tu situación financiera."] },
      ],
    },
    educacion: {
      icon: "calculator",
      fields: [
        { id: "valor1", label: "Valor 1", placeholder: "Ej: 7", min: 0, max: 10, step: "0.1", unit: "" },
        { id: "valor2", label: "Valor 2", placeholder: "Ej: 8", min: 0, max: 10, step: "0.1", unit: "" },
      ],
      formula: "(valor1 + valor2) / 2",
      unit: "",
      roundTo: 1,
      description: `Realiza cálculos de ${lower} de forma rápida.`,
      pageIntro: `Esta calculadora educativa te ayuda con cálculos de ${lower}.`,
      seoDescription: `Calcula ${lower} gratis. Herramienta educativa online.`,
      seoOgDescription: `Calcula ${lower} al instante.`,
      editorial: [
        { heading: `¿Cómo funciona?`, paragraphs: [`Introduce los valores y obtén el resultado al instante. Esta herramienta está diseñada para ayudarte con tus estudios.`] },
        { heading: "Consejos", paragraphs: ["Practica con diferentes valores para entender mejor los conceptos subyacentes."] },
      ],
    },
    general: {
      icon: "calculator",
      fields: [
        { id: "valor1", label: "Valor 1", placeholder: "Ej: 100", min: 0, max: 999999, step: "0.01", unit: "" },
        { id: "valor2", label: "Valor 2", placeholder: "Ej: 50", min: 0, max: 999999, step: "0.01", unit: "" },
      ],
      formula: "valor1 * valor2 / 100",
      unit: "",
      roundTo: 2,
      description: `Calcula ${lower} de forma rápida y precisa.`,
      pageIntro: `Esta calculadora online te permite calcular ${lower} de forma rápida y sencilla.`,
      seoDescription: `Calcula ${lower} gratis. Herramienta online rápida y precisa.`,
      seoOgDescription: `Calcula ${lower} al instante.`,
      editorial: [
        { heading: `¿Cómo calcular ${lower}?`, paragraphs: [`Introduce los valores en los campos correspondientes y pulsa el botón de calcular. Obtendrás el resultado al instante.`] },
        { heading: "Herramienta gratuita", paragraphs: ["Esta calculadora es completamente gratuita. Úsala tantas veces como necesites."] },
      ],
    },
  };

  const cfg = categoryConfigs[category] || categoryConfigs.general;

  return {
    id: calc.id,
    icon: cfg.icon,
    description: cfg.description,
    fields: JSON.parse(JSON.stringify(cfg.fields)),
    formulaLabel: `Calcular ${shortName}`,
    resetLabel: "Reiniciar",
    pageIntro: cfg.pageIntro,
    logic: {
      type: "formula",
      fields: cfg.fields.map(f => f.id),
      formula: cfg.formula,
      roundTo: cfg.roundTo,
      unit: cfg.unit,
    },
    seo: {
      title: calc.title,
      description: cfg.seoDescription,
      ogTitle: `${calc.title} - Calculadoras Online`,
      ogDescription: cfg.seoOgDescription,
    },
    editorial: JSON.parse(JSON.stringify(cfg.editorial)),
  };
}

// ============================================================
// API pública
// ============================================================

function ensureKnowledge(calc) {
  const knowledgePath = path.join(KNOWLEDGE_DIR, `${calc.id}.json`);

  if (fs.existsSync(knowledgePath)) {
    return JSON.parse(fs.readFileSync(knowledgePath, "utf-8"));
  }

  const shortName = calc.title.replace(/^Calculadora\s+(de\s+)?/i, "").trim();
  console.log(`  🧠 Infiriendo: ${calc.title}...`);

  const tpl = findTemplate(shortName, calc.category);
  let knowledge;

  if (tpl) {
    knowledge = applyTemplate(tpl, calc);
  } else {
    knowledge = generateFallback(calc);
  }

  if (!fs.existsSync(KNOWLEDGE_DIR)) {
    fs.mkdirSync(KNOWLEDGE_DIR, { recursive: true });
  }
  fs.writeFileSync(knowledgePath, JSON.stringify(knowledge, null, 2), "utf-8");
  console.log(`  💾 knowledge/${calc.id}.json (generado automáticamente)`);

  return knowledge;
}

module.exports = { ensureKnowledge, KNOWLEDGE_DIR, ICONS };