// ============================================================
// Generador de calculadoras
// Uso: node scripts/generate-calculators.js
// Lee calculadoras.json + knowledge/ para generar archivos
// No contiene reglas específicas por calculadora.
// ============================================================

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const CONFIG_PATH = path.join(ROOT, "calculadoras.json");
const REGISTRY_PATH = path.join(ROOT, "lib", "calculators", "index.ts");
const SITEMAP_PATH = path.join(ROOT, "app", "sitemap.ts");
const INFER = require("./infer");

// ============================================================
// ICONS
// ============================================================

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
// UTILIDADES
// ============================================================

function toPascalCase(str) {
  if (str === "imc") return "IMC";
  if (str === "iva") return "IVA";
  if (str === "tmb") return "TMB";
  if (str === "bmr") return "BMR";
  if (str === "ibw") return "IBW";
  if (str === "fcm") return "FCM";
  return str.replace(/(^\w|[-_\s]+\w)/g, (c) => c.replace(/[-_\s]+/g, "").toUpperCase());
}

function escapeHtml(str) {
  if (!str) return str;
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/≥/g, "&ge;").replace(/≤/g, "&le;");
}

function escapeBackticks(str) {
  return str.replace(/`/g, "\\`").replace(/\${/g, "\\${");
}

// ============================================================
// GENERADORES DE ARCHIVOS
// ============================================================

function generateLogic(knowledge) {
  const id = knowledge.id;
  const IdPascal = toPascalCase(id);
  const funcName = "calcular" + IdPascal;
  const hasClassification = knowledge.logic && knowledge.logic.classification;
  const hasSelectors = knowledge.selectors && knowledge.selectors.length > 0;
  const isIvaType = knowledge.logic && knowledge.logic.type === "iva";
  const isDateType = knowledge.logic && knowledge.logic.type === "date";

  let lines = [];
  lines.push(`import type { CalculatorResult } from "@/types";`);
  lines.push("");

  lines.push(`export interface ${IdPascal}Input {`);
  for (const field of knowledge.fields) {
    lines.push(`  ${field.id}: number;`);
  }
  if (hasSelectors) {
    for (const sel of knowledge.selectors) {
      if (sel.options.length > 2) {
        lines.push(`  ${sel.id}: number;`);
      } else {
        lines.push(`  ${sel.id}: "${sel.options[0].value}" | "${sel.options[1].value}";`);
      }
    }
  }
  lines.push(`}`);
  lines.push("");

  lines.push(`export interface ${IdPascal}Result {`);
  if (hasClassification) {
    lines.push(`  ${id.replace(/-/g, "_")}: number;`);
    lines.push(`  clasificacion: string;`);
    lines.push(`  color: string;`);
  } else if (!isIvaType && !isDateType) {
    lines.push(`  ${id.replace(/-/g, "_")}: number;`);
  }
  if (isIvaType) {
    lines.push(`  sinIVA: number;`);
    lines.push(`  conIVA: number;`);
    lines.push(`  iva: number;`);
    lines.push(`  tipoIVA: number;`);
  }
  lines.push(`  resultados: CalculatorResult[];`);
  lines.push(`}`);
  lines.push("");

  if (hasClassification) {
    lines.push(`function clasificar${IdPascal}(valor: number): { clasificacion: string; color: string } {`);
    for (const range of knowledge.logic.classification.ranges) {
      const max = range.max === "Infinity" ? "Infinity" : range.max;
      lines.push(`  if (valor < ${max}) return { clasificacion: "${range.label}", color: "${range.color}" };`);
    }
    lines.push(`  return { clasificacion: "Desconocido", color: "oklch(50% 0 0)" };`);
    lines.push(`}`);
    lines.push("");
  }

  if (hasSelectors) {
    for (const sel of knowledge.selectors) {
      if (sel.options.length > 2) {
        const constName = `${id.toUpperCase().replace(/-/g, "_")}_${sel.id.toUpperCase()}`;
        lines.push(`export const ${constName} = [`);
        for (const opt of sel.options) {
          const val = typeof opt.value === "number" ? opt.value : `"${opt.value}"`;
          lines.push(`  { value: ${val}, label: "${opt.label}" },`);
        }
        lines.push(`];`);
        lines.push("");
      }
    }
  }

  lines.push(`export function ${funcName}(input: ${IdPascal}Input): ${IdPascal}Result {`);

  if (isIvaType) {
    lines.push(`  const { cantidad, tipoIVA, modo } = input;`);
    lines.push(`  const tipo = tipoIVA / 100;`);
    lines.push(`  if (modo === "anadir") {`);
    lines.push(`    const iva = cantidad * tipo;`);
    lines.push(`    const conIVA = cantidad + iva;`);
    lines.push(`    return { sinIVA: cantidad, conIVA, iva, tipoIVA,`);
    lines.push(`      resultados: [`);
    lines.push(`        { label: "Importe sin IVA", value: cantidad.toFixed(2) + " €" },`);
    lines.push(`        { label: "IVA (" + tipoIVA + "%)", value: iva.toFixed(2) + " €" },`);
    lines.push(`        { label: "Importe con IVA", value: conIVA.toFixed(2) + " €" },`);
    lines.push(`      ],};`);
    lines.push(`  }`);
    lines.push(`  const sinIVA = cantidad / (1 + tipo);`);
    lines.push(`  const iva = cantidad - sinIVA;`);
    lines.push(`  return { sinIVA, conIVA: cantidad, iva, tipoIVA,`);
    lines.push(`    resultados: [`);
    lines.push(`      { label: "Importe sin IVA", value: sinIVA.toFixed(2) + " €" },`);
    lines.push(`      { label: "IVA (" + tipoIVA + "%)", value: iva.toFixed(2) + " €" },`);
    lines.push(`      { label: "Importe con IVA", value: cantidad.toFixed(2) + " €" },`);
    lines.push(`    ],};`);
  } else if (isDateType) {
    lines.push(`  const hoy = new Date();`);
    lines.push(`  const nacimiento = new Date(input.año, input.mes - 1, input.dia);`);
    lines.push(`  let edad = hoy.getFullYear() - nacimiento.getFullYear();`);
    lines.push(`  const mesDiff = hoy.getMonth() - nacimiento.getMonth();`);
    lines.push(`  if (mesDiff < 0 || (mesDiff === 0 && hoy.getDate() < nacimiento.getDate())) edad--;`);
    lines.push(`  return { resultados: [{ label: "Edad", value: edad.toString() + " años" }],};`);
  } else {
    const fieldNames = knowledge.fields.map((f) => f.id);
    lines.push(`  const { ${fieldNames.join(", ")} } = input;`);

    if (hasClassification) {
      const formula = knowledge.logic.formula;
      const roundTo = knowledge.logic.roundTo || 2;
      const factor = Math.pow(10, roundTo);
      lines.push(`  const resultado = ${formula};`);
      lines.push(`  const redondeado = Math.round(resultado * ${factor}) / ${factor};`);
      lines.push(`  const { clasificacion, color } = clasificar${IdPascal}(redondeado);`);
      lines.push(`  const resultados: CalculatorResult[] = [`);
      lines.push(`    { label: "Tu ${IdPascal}", value: redondeado.toString()${knowledge.logic.unit ? ` + "${knowledge.logic.unit}"` : ""} },`);
      lines.push(`    { label: "Clasificación", value: clasificacion },`);
      if (knowledge.logic.extraResults) {
        for (const extra of knowledge.logic.extraResults) {
          lines.push(`    { label: "${extra.label}", value: Math.round((${extra.value}) * 10) / 10 + "${extra.unit || ""}" },`);
        }
      }
      lines.push(`  ];`);
      lines.push(`  return { ${id.replace(/-/g, "_")}: redondeado, clasificacion, color, resultados };`);
    } else {
      const formula = knowledge.logic.formula;
      const roundTo = knowledge.logic.roundTo || 2;
      const factor = Math.pow(10, roundTo);
      lines.push(`  const resultado = ${formula};`);
      lines.push(`  const redondeado = Math.round(resultado * ${factor}) / ${factor};`);
      lines.push(`  const resultados: CalculatorResult[] = [`);
      lines.push(`    { label: "Resultado", value: redondeado.toString()${knowledge.logic.unit ? ` + "${knowledge.logic.unit}"` : ""} },`);
      if (knowledge.logic.extraResults) {
        for (const extra of knowledge.logic.extraResults) {
          lines.push(`    { label: "${extra.label}", value: Math.round((${extra.value}) * 10) / 10 + "${extra.unit || ""}" },`);
        }
      }
      lines.push(`  ];`);
      lines.push(`  return { ${id.replace(/-/g, "_")}: redondeado, resultados };`);
    }
  }

  lines.push(`}`);
  return lines.join("\n");
}

function generateForm(knowledge) {
  const id = knowledge.id;
  const IdPascal = toPascalCase(id);
  const funcName = "calcular" + IdPascal;
  const hasSelectors = knowledge.selectors && knowledge.selectors.length > 0;

  let lines = [];
  lines.push(`"use client";`);
  lines.push(`import { useState } from "react";`);
  lines.push(`import { ${funcName} } from "@/lib/calculators";`);
  if (hasSelectors) {
    for (const sel of knowledge.selectors) {
      if (sel.options.length > 2) {
        lines.push(`import { ${id.toUpperCase().replace(/-/g, "_")}_${sel.id.toUpperCase()} } from "@/lib/calculators";`);
      }
    }
  }
  lines.push(`import type { ${IdPascal}Result } from "@/lib/calculators";`);
  lines.push("");

  lines.push(`export default function ${IdPascal}Form() {`);
  for (const field of knowledge.fields) {
    lines.push(`  const [${field.id}, set${toPascalCase(field.id)}] = useState("");`);
  }
  if (hasSelectors) {
    for (const sel of knowledge.selectors) {
      const isMulti = sel.options.length > 2;
      if (isMulti) {
        const defaultVal = typeof sel.default === "number" ? sel.default : `"${sel.default}"`;
        lines.push(`  const [${sel.id}, set${toPascalCase(sel.id)}] = useState(${defaultVal});`);
      } else {
        const types = sel.options.map((o) => `"${o.value}"`).join(" | ");
        lines.push(`  const [${sel.id}, set${toPascalCase(sel.id)}] = useState<${types}>("${sel.default}");`);
      }
    }
  }
  lines.push(`  const [resultado, setResultado] = useState<${IdPascal}Result | null>(null);`);
  lines.push(`  const [error, setError] = useState("");`);
  lines.push(`  const [isSubmitting, setIsSubmitting] = useState(false);`);
  lines.push("");

  lines.push(`  function handleSubmit(e: React.FormEvent) {`);
  lines.push(`    e.preventDefault();`);
  lines.push(`    if (isSubmitting) return;`);
  lines.push(`    setError("");`);
  lines.push(`    setIsSubmitting(true);`);
  for (const field of knowledge.fields) {
    const FieldPascal = toPascalCase(field.id);
    lines.push(`    const raw${FieldPascal} = ${field.id}.trim();`);
    lines.push(`    if (!raw${FieldPascal} || raw${FieldPascal}.length > 20) {`);
    lines.push(`      setError("Introduce un ${field.label.toLowerCase().replace(/\([^)]*\)/, "").trim()} v\u00e1lido");`);
    lines.push(`      setIsSubmitting(false);`);
    lines.push(`      return;`);
    lines.push(`    }`);
    lines.push(`    const ${field.id}Num = parseFloat(raw${FieldPascal});`);
    lines.push(`    if (isNaN(${field.id}Num) || !isFinite(${field.id}Num)) {`);
    lines.push(`      setError("Introduce un n\u00famero v\u00e1lido para ${field.label.toLowerCase().replace(/\([^)]*\)/, "").trim()}");`);
    lines.push(`      setIsSubmitting(false);`);
    lines.push(`      return;`);
    lines.push(`    }`);
  }
  lines.push("");
  for (const field of knowledge.fields) {
    lines.push(`    if (${field.id}Num <= 0 || ${field.id}Num > ${field.max}) {`);
    lines.push(`      setError("Introduce un ${field.label.toLowerCase().replace(/\([^)]*\)/, "").trim()} v\u00e1lido (${field.min}-${field.max} ${field.unit || ""})");`);
    lines.push(`      setIsSubmitting(false);`);
    lines.push(`      return;`);
    lines.push(`    }`);
  }
  lines.push("");
  const args = knowledge.fields.map((f) => `${f.id}: ${f.id}Num`).join(", ");
  const selectorArgs = hasSelectors ? ", " + knowledge.selectors.map((s) => `${s.id}: ${s.id}`).join(", ") : "";
  lines.push(`    if (!navigator.onLine) {`);
  lines.push(`      setError("Sin conexi\u00f3n a Internet. Comprueba tu conexi\u00f3n y vuelve a intentarlo.");`);
  lines.push(`      setIsSubmitting(false);`);
  lines.push(`      return;`);
  lines.push(`    }`);
  lines.push(`    try {`);
  lines.push(`      const res = ${funcName}({ ${args}${selectorArgs} });`);
  lines.push(`      setResultado(res);`);
  lines.push(`    } catch (e) {`);
  lines.push(`      setError("Ocurri\u00f3 un error al calcular. Int\u00e9ntalo de nuevo.");`);
  lines.push(`    }`);
  lines.push(`    setIsSubmitting(false);`);
  lines.push(`  }`);
  lines.push("");

  lines.push(`  function handleReset() {`);
  for (const field of knowledge.fields) {
    lines.push(`    set${toPascalCase(field.id)}("");`);
  }
  lines.push(`    setResultado(null);`);
  lines.push(`    setError("");`);
  lines.push(`    setIsSubmitting(false);`);
  lines.push(`  }`);
  lines.push("");

lines.push(`  return (`);
  lines.push(`    <div>`);
  lines.push(`      <form onSubmit={handleSubmit} className="card p-6 space-y-5">`);
  if (knowledge.fields.length > 1) {
    lines.push(`        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">`);
  }
  for (const field of knowledge.fields) {
    const FieldPascal = toPascalCase(field.id);
    lines.push(`          <div>`);
    lines.push(`            <label htmlFor="${field.id}" className="block text-sm font-medium text-fg mb-1.5">${field.label}</label>`);
    lines.push(`            <input id="${field.id}" type="number" step="${field.step}" min="${field.min}" max="${field.max}"`);
    lines.push(`              value={${field.id}} onChange={(e) => set${FieldPascal}(e.target.value)}`);
    lines.push(`              placeholder="${field.placeholder}"`);
    lines.push(`              className="w-full px-3 py-2.5 rounded-lg border border-border bg-bg text-fg placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm" />`);
    lines.push(`          </div>`);
  }
  if (knowledge.fields.length > 1) {
    lines.push(`        </div>`);
  }

  if (hasSelectors) {
    for (const sel of knowledge.selectors) {
      const SelPascal = toPascalCase(sel.id);
      const isMulti = sel.options.length > 2;
      lines.push(`        <div>`);
      lines.push(`          <label className="block text-sm font-medium text-fg mb-2">${sel.label}</label>`);
      lines.push(`          <div className="${isMulti ? "flex flex-wrap gap-2" : "flex gap-2"}">`);
      for (const opt of sel.options) {
        const val = typeof opt.value === "number" ? opt.value : `"${opt.value}"`;
        if (isMulti) {
          lines.push(`            <button type="button" onClick={() => set${SelPascal}(${val})}`);
          lines.push(`              className={"px-4 py-2 rounded-lg text-sm font-medium border transition-all " + (${sel.id} === ${val} ? "bg-accent text-white border-accent" : "bg-bg text-muted border-border hover:text-fg hover:border-accent/30")}>${opt.label}</button>`);
        } else {
          lines.push(`            <button type="button" onClick={() => set${SelPascal}("${opt.value}")}`);
          lines.push(`              className={"px-4 py-2 rounded-lg text-sm font-medium border transition-all flex-1 " + (${sel.id} === "${opt.value}" ? "bg-accent text-white border-accent" : "bg-bg text-muted border-border hover:text-fg")}>${opt.label}</button>`);
        }
      }
      lines.push(`          </div>`);
      lines.push(`        </div>`);
    }
  }

  lines.push(`        {error && (<p className="text-sm" style={{ color: "oklch(55% 0.22 25)" }}>{error}</p>)}`);
  lines.push(`        <div className="flex gap-3">`);
  lines.push(`          <button type="submit" disabled={isSubmitting} className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed">`);
  lines.push(`            {isSubmitting ? "Calculando..." : "${knowledge.formulaLabel}"}`);
  lines.push(`          </button>`);
  lines.push(`          {resultado && (<button type="button" onClick={handleReset} className="btn-secondary">${knowledge.resetLabel}</button>)}`);
  lines.push(`        </div>`);
  lines.push(`      </form>`);

  lines.push(`      {resultado && (`);
  lines.push(`        <div className="mt-6 card p-6 animate-slide-up">`);
  if (knowledge.logic && knowledge.logic.classification) {
    lines.push(`          <div className="text-center mb-5">`);
    lines.push(`            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full text-2xl font-bold text-white" style={{ backgroundColor: resultado.color }}>{resultado.${id.replace(/-/g, "_")}}</div>`);
    lines.push(`            <p className="mt-2 font-display font-semibold text-fg">{resultado.clasificacion}</p>`);
    lines.push(`          </div>`);
  }
  lines.push(`          <div className="space-y-2">`);
  lines.push(`            {resultado.resultados.map((r, i) => (`);
  lines.push(`              <div key={i} className={"flex items-center justify-between py-3 px-4 rounded-lg " + (i === resultado.resultados.length - 1 ? "bg-accent/10 border border-accent/20" : "bg-bg")}>`);
  lines.push(`                <span className="text-sm text-muted">{r.label}</span>`);
  lines.push(`                <span className="font-display font-semibold text-fg">{r.value}</span>`);
  lines.push(`              </div>`);
  lines.push(`            ))}`);
  lines.push(`          </div>`);
  lines.push(`        </div>`);
  lines.push(`      )}`);
  lines.push(`    </div>`);
  lines.push(`  );`);
  lines.push(`}`);

  return lines.join("\n");
}

function generatePage(knowledge, title) {
  const id = knowledge.id;
  const IdPascal = toPascalCase(id);

  let lines = [];
lines.push(`import type { Metadata } from "next";`);
  lines.push(`import ${IdPascal}Form from "./${IdPascal}Form";`);
  lines.push("");
  lines.push(`export const metadata: Metadata = {`);
  lines.push(`  title: "${knowledge.seo.title}",`);
  lines.push(`  description: "${escapeHtml(knowledge.seo.description)}",`);
  lines.push(`  openGraph: { title: "${knowledge.seo.ogTitle}", description: "${escapeHtml(knowledge.seo.ogDescription)}" },`);
  lines.push(`};`);
  lines.push("");
  lines.push(`export default function ${IdPascal}Page() {`);
  lines.push(`  return (`);
  lines.push(`    <div className="max-w-content mx-auto px-4 sm:px-6 py-8 sm:py-12">`);
  lines.push(`      <div className="max-w-2xl mx-auto">`);
  lines.push(`        <div className="mb-8">`);
  lines.push(`          <h1 className="font-display font-bold text-2xl sm:text-3xl text-fg tracking-tight" data-od-id="${id}-heading">${title}</h1>`);
  lines.push(`          <p className="mt-2 text-muted text-sm sm:text-base leading-relaxed">${escapeHtml(knowledge.pageIntro)}</p>`);
  lines.push(`        </div>`);
  lines.push(`        <${IdPascal}Form />`);
  if (knowledge.editorial && knowledge.editorial.length > 0) {
    lines.push(`        <article className="mt-12 prose prose-sm max-w-none">`);
    for (const section of knowledge.editorial) {
      lines.push(`          <h2 className="font-display font-semibold text-lg text-fg">${escapeHtml(section.heading)}</h2>`);
      for (const para of section.paragraphs) {
        lines.push(`          <p className="text-muted text-sm leading-relaxed mt-2">${escapeHtml(para)}</p>`);
      }
    }
    lines.push(`        </article>`);
  }
  lines.push(`      </div>`);
  lines.push(`    </div>`);
  lines.push(`  );`);
  lines.push(`}`);
  return lines.join("\n");
}

function generateRegistry(calculators) {
  let lines = [];
  lines.push(`import type { CalculatorMeta } from "@/types";`);
  lines.push("");
  lines.push(`export const CALCULATOR_REGISTRY: CalculatorMeta[] = [`);
  for (const calc of calculators) {
    const iconPath = path.join(INFER.KNOWLEDGE_DIR, `${calc.id}.json`);
    const knowledge = JSON.parse(fs.readFileSync(iconPath, "utf-8"));
    const iconSvg = ICONS[knowledge.icon] || ICONS.calculator;
    lines.push(`  { id: "${calc.id}", title: "${calc.title}", description: "${knowledge.description}", slug: "${calc.slug}", icon: \`${escapeBackticks(iconSvg)}\`, category: "${calc.category}" },`);
  }
  lines.push(`];`);
  lines.push("");
  lines.push(`export function getCalculatorBySlug(slug: string): CalculatorMeta | undefined {`);
  lines.push(`  return CALCULATOR_REGISTRY.find((c) => c.slug === "/" + slug || c.slug === slug);`);
  lines.push(`}`);
  lines.push(`export function getCalculatorsByCategory(category: string): CalculatorMeta[] {`);
  lines.push(`  return CALCULATOR_REGISTRY.filter((c) => c.category === category);`);
  lines.push(`}`);
  lines.push("");
  for (const calc of calculators) {
    const IdPascal = toPascalCase(calc.id);
    const funcName = "calcular" + IdPascal;
    const knowledge = JSON.parse(fs.readFileSync(path.join(INFER.KNOWLEDGE_DIR, `${calc.id}.json`), "utf-8"));
    const hasSelectors = knowledge.selectors && knowledge.selectors.length > 0;
    lines.push(`export { ${funcName} } from "./${calc.id}";`);
    lines.push(`export type { ${IdPascal}Input, ${IdPascal}Result } from "./${calc.id}";`);
    if (hasSelectors) {
      for (const sel of knowledge.selectors) {
        if (sel.options.length > 2) {
          lines.push(`export { ${calc.id.toUpperCase().replace(/-/g, "_")}_${sel.id.toUpperCase()} } from "./${calc.id}";`);
        }
      }
    }
  }
  return lines.join("\n");
}

function generateSitemap(config, calculators) {
  let lines = [];
  lines.push(`import type { MetadataRoute } from "next";`);
  lines.push(`export default function sitemap(): MetadataRoute.Sitemap {`);
  lines.push(`  const baseUrl = "${config.baseUrl}";`);
  lines.push(`  const staticPages = [`);
  lines.push(`    { path: "", lastModified: new Date(), priority: 1.0 },`);
  for (const calc of calculators) {
    lines.push(`    { path: "${calc.slug}", lastModified: new Date(), priority: 0.9 },`);
  }
  lines.push(`    { path: "/blog", lastModified: new Date(), priority: 0.7 },`);
  if (config.blogPosts) {
    for (const post of config.blogPosts) {
      lines.push(`    { path: "${post.slug}", lastModified: new Date(), priority: 0.6 },`);
    }
  }
  lines.push(`  ];`);
  lines.push(`  return staticPages.map((page) => ({ url: baseUrl + page.path, lastModified: page.lastModified, changeFrequency: "daily" as const, priority: page.priority }));`);
  lines.push(`}`);
  return lines.join("\n");
}

// ============================================================
// MAIN
// ============================================================

function main() {
  console.log("🤖 Generador de calculadoras");
  console.log("");

  if (!fs.existsSync(CONFIG_PATH)) {
    console.error("❌ No se encuentra calculadoras.json");
    process.exit(1);
  }

  const config = JSON.parse(fs.readFileSync(CONFIG_PATH, "utf-8"));
  const rawCalculators = config.calculadoras;
  console.log(`📋 ${rawCalculators.length} calculadora(s) configuradas`);

  // 1. Asegurar conocimiento para cada calculadora
  const calculators = rawCalculators.map((calc) => {
    const knowledge = INFER.ensureKnowledge(calc);
    return { ...calc, ...knowledge };
  });

  // 2. Crear directorios
  const libDir = path.join(ROOT, "lib", "calculators");
  if (!fs.existsSync(libDir)) fs.mkdirSync(libDir, { recursive: true });

  for (const calc of calculators) {
    const appDir = path.join(ROOT, "app", calc.id);
    if (!fs.existsSync(appDir)) fs.mkdirSync(appDir, { recursive: true });
  }

  // 3. Leer conocimiento desde knowledge/ (asegura que use el archivo, no el objeto inferido)
  const loadedCalculators = calculators.map((calc) => {
    const knowledgePath = path.join(INFER.KNOWLEDGE_DIR, `${calc.id}.json`);
    return JSON.parse(fs.readFileSync(knowledgePath, "utf-8"));
  });

  // 4. Generar archivos
  for (const knowledge of loadedCalculators) {
    const id = knowledge.id;
    const IdPascal = toPascalCase(id);
    const original = rawCalculators.find((c) => c.id === id);

    const logicPath = path.join(libDir, `${id}.ts`);
    fs.writeFileSync(logicPath, generateLogic(knowledge), "utf-8");
    console.log(`  ✅ lib/calculators/${id}.ts`);

    const formPath = path.join(ROOT, "app", id, `${IdPascal}Form.tsx`);
    fs.writeFileSync(formPath, generateForm(knowledge), "utf-8");
    console.log(`  ✅ app/${id}/${IdPascal}Form.tsx`);

    const pagePath = path.join(ROOT, "app", id, "page.tsx");
    fs.writeFileSync(pagePath, generatePage(knowledge, original.title), "utf-8");
    console.log(`  ✅ app/${id}/page.tsx`);
  }

  // 5. Generar registro y sitemap
  fs.writeFileSync(REGISTRY_PATH, generateRegistry(rawCalculators), "utf-8");
  console.log(`  ✅ lib/calculators/index.ts`);

  fs.writeFileSync(SITEMAP_PATH, generateSitemap(config, rawCalculators), "utf-8");
  console.log(`  ✅ app/sitemap.ts`);

  console.log("");
  console.log("🎯 Generación completada");
}

main();