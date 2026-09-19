import type { CalculatorMeta } from "@/types";

export const CALCULATOR_REGISTRY: CalculatorMeta[] = [
  { id: "imc", title: "Calculadora de IMC", description: "Calcula tu IMC y descubre en qué rango de peso te sitúa la clasificación de la OMS.", slug: "/imc", icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>`, category: "salud" },
  { id: "iva", title: "Calculadora de IVA", description: "Calcula el IVA al 21 %, 10 % o 4 %. Añádelo a una base o extráelo de un precio final.", slug: "/iva", icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 16l4-8 4 4 4-6"/></svg>`, category: "finanzas" },
  { id: "hipoteca", title: "Calculadora de Hipoteca", description: "Calcula la cuota mensual de tu hipoteca y los intereses totales por el sistema francés.", slug: "/hipoteca", icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 000 4h4a2 2 0 010 4H8"/><path d="M12 18V6"/></svg>`, category: "finanzas" },
  { id: "interes-compuesto", title: "Calculadora de Interés Compuesto", description: "Calcula cuánto crece tu inversión con interés compuesto y aportaciones periódicas.", slug: "/interes-compuesto", icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 000 4h4a2 2 0 010 4H8"/><path d="M12 18V6"/></svg>`, category: "finanzas" },
  { id: "prestamo", title: "Calculadora de Préstamos", description: "Calcula la cuota mensual de tu préstamo personal y cuánto pagarás en intereses.", slug: "/prestamo", icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 000 4h4a2 2 0 010 4H8"/><path d="M12 18V6"/></svg>`, category: "finanzas" },
  { id: "amortizacion", title: "Calculadora de Amortización", description: "Genera el cuadro de amortización completo de tu préstamo, cuota a cuota.", slug: "/amortizacion", icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 16l4-8 4 4 4-6"/></svg>`, category: "finanzas" },
  { id: "descuento", title: "Calculadora de Descuentos", description: "Calcula el precio final tras uno o varios descuentos y el ahorro real que supone.", slug: "/descuento", icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19 5L5 19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>`, category: "finanzas" },
  { id: "porcentaje", title: "Calculadora de Porcentaje", description: "Calcula qué porcentaje representa un valor respecto a un total.", slug: "/porcentaje", icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19 5L5 19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>`, category: "general" },
  { id: "propina", title: "Calculadora de Propinas", description: "Calcula la propina y el total a pagar en el restaurante.", slug: "/propina", icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19 5L5 19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>`, category: "general" },
  { id: "edad", title: "Calculadora de Edad", description: "Calcula tu edad exacta en años, meses y días.", slug: "/edad", icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>`, category: "general" },
  { id: "dias-entre-fechas", title: "Calculadora de Días entre Fechas", description: "Calcula los días naturales, laborables y semanas que hay entre dos fechas.", slug: "/dias-entre-fechas", icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19 5L5 19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>`, category: "general" },
  { id: "calorias", title: "Calculadora de Calorías", description: "Calcula las calorías que quemas según tu peso y la duración de la actividad.", slug: "/calorias", icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.5-1.5 2.5-3.5 2.5-5.5 0-3-2.5-5.5-5.5-5.5-1.5 0-3 .6-4 1.5-1-.9-2.5-1.5-4-1.5C4.5 3 2 5.5 2 8.5 2 10.5 3 12.5 4.5 14L12 22l7-8z"/></svg>`, category: "salud" },
  { id: "peso-ideal", title: "Calculadora de Peso Ideal", description: "Calcula tu peso ideal a partir de tu altura con la fórmula de Devine.", slug: "/peso-ideal", icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>`, category: "salud" },
  { id: "tmb", title: "Calculadora de Tasa Metabólica Basal", description: "Calcula tu tasa metabólica basal y tu gasto calórico diario con Mifflin-St Jeor.", slug: "/tmb", icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>`, category: "salud" },
  { id: "fcm", title: "Calculadora de Frecuencia Cardíaca Máxima", description: "Calcula tu frecuencia cardíaca máxima y tus zonas de entrenamiento.", slug: "/fcm", icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.5-1.5 2.5-3.5 2.5-5.5 0-3-2.5-5.5-5.5-5.5-1.5 0-3 .6-4 1.5-1-.9-2.5-1.5-4-1.5C4.5 3 2 5.5 2 8.5 2 10.5 3 12.5 4.5 14L12 22l7-8z"/></svg>`, category: "salud" },
  { id: "iva-inverso", title: "Calculadora de IVA Inverso", description: "Extrae la base imponible y la cuota de IVA de un precio que ya lo incluye.", slug: "/iva-inverso", icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 16l4-8 4 4 4-6"/></svg>`, category: "finanzas" },
  { id: "inflacion", title: "Calculadora de Inflación", description: "Descubre cuánto poder adquisitivo pierde tu dinero con el paso del tiempo.", slug: "/inflacion", icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 16l4-8 4 4 4-6"/></svg>`, category: "finanzas" },
  { id: "consumo-combustible", title: "Calculadora de Consumo de Combustible", description: "Calcula el consumo real de tu coche en litros cada 100 km y su coste.", slug: "/consumo-combustible", icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19 5L5 19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>`, category: "general" },
  { id: "divisas", title: "Calculadora de Conversión de Divisas", description: "Convierte entre divisas y descubre cuánto te cuesta la comisión de tu banco.", slug: "/divisas", icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 16l4-8 4 4 4-6"/></svg>`, category: "finanzas" },
  { id: "margen-comercial", title: "Calculadora de Margen Comercial", description: "Calcula el margen sobre el precio de venta y el marcaje sobre el coste.", slug: "/margen-comercial", icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 16l4-8 4 4 4-6"/></svg>`, category: "finanzas" },
  { id: "beneficio", title: "Calculadora de Beneficio", description: "Calcula tu beneficio bruto, neto y el punto muerto de tu negocio.", slug: "/beneficio", icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 16l4-8 4 4 4-6"/></svg>`, category: "finanzas" },
];

export function getCalculatorBySlug(slug: string): CalculatorMeta | undefined {
  return CALCULATOR_REGISTRY.find((c) => c.slug === "/" + slug || c.slug === slug);
}
export function getCalculatorsByCategory(category: string): CalculatorMeta[] {
  return CALCULATOR_REGISTRY.filter((c) => c.category === category);
}

export { calcularIMC } from "./imc";
export type { IMCInput, IMCResult } from "./imc";
export { calcularIVA } from "./iva";
export type { IVAInput, IVAResult } from "./iva";
export { IVA_TIPOIVA } from "./iva";
export { calcularHipoteca } from "./hipoteca";
export type { HipotecaInput, HipotecaResult } from "./hipoteca";
export { calcularInteresCompuesto } from "./interes-compuesto";
export type { InteresCompuestoInput, InteresCompuestoResult } from "./interes-compuesto";
export { calcularPrestamo } from "./prestamo";
export type { PrestamoInput, PrestamoResult } from "./prestamo";
export { calcularAmortizacion } from "./amortizacion";
export type { AmortizacionInput, AmortizacionResult } from "./amortizacion";
export { calcularDescuento } from "./descuento";
export type { DescuentoInput, DescuentoResult } from "./descuento";
export { calcularPorcentaje } from "./porcentaje";
export type { PorcentajeInput, PorcentajeResult } from "./porcentaje";
export { calcularPropina } from "./propina";
export type { PropinaInput, PropinaResult } from "./propina";
export { calcularEdad } from "./edad";
export type { EdadInput, EdadResult } from "./edad";
export { calcularDiasEntreFechas } from "./dias-entre-fechas";
export type { DiasEntreFechasInput, DiasEntreFechasResult } from "./dias-entre-fechas";
export { calcularCalorias } from "./calorias";
export type { CaloriasInput, CaloriasResult } from "./calorias";
export { ACTIVIDADES } from "./calorias";
export { calcularPesoIdeal } from "./peso-ideal";
export type { PesoIdealInput, PesoIdealResult, SexoPeso } from "./peso-ideal";
export { calcularTMB } from "./tmb";
export type { TMBInput, TMBResult, Sexo } from "./tmb";
export { NIVELES_ACTIVIDAD, SEXOS } from "./tmb";
export { calcularFCM } from "./fcm";
export type { FCMInput, FCMResult, ZonaEntrenamiento } from "./fcm";
export { calcularIvaInverso } from "./iva-inverso";
export type { IvaInversoInput, IvaInversoResult } from "./iva-inverso";
export { IVA_INVERSO_TIPOIVA } from "./iva-inverso";
export { calcularInflacion } from "./inflacion";
export type { InflacionInput, InflacionResult } from "./inflacion";
export { calcularConsumoCombustible } from "./consumo-combustible";
export type { ConsumoCombustibleInput, ConsumoCombustibleResult } from "./consumo-combustible";
export { calcularDivisas } from "./divisas";
export type { DivisasInput, DivisasResult } from "./divisas";
export { calcularMargenComercial } from "./margen-comercial";
export type { MargenComercialInput, MargenComercialResult } from "./margen-comercial";
export { calcularBeneficio } from "./beneficio";
export type { BeneficioInput, BeneficioResult } from "./beneficio";
