import type { CalculatorResult } from "@/types";
import { numero } from "@/lib/formato";

export type SexoPeso = "hombre" | "mujer";

export interface PesoIdealInput {
  /** Altura en centímetros. */
  altura: number;
  sexo: SexoPeso;
}

export interface PesoIdealResult {
  devine: number;
  robinson: number;
  miller: number;
  hamwi: number;
  /** Rango de peso correspondiente a un IMC de 18,5 a 24,9. */
  rangoImc: { min: number; max: number };
  resultados: CalculatorResult[];
}

/** Centímetros por pulgada; las cuatro fórmulas se definieron en pulgadas. */
const CM_POR_PULGADA = 2.54;
/** Altura de referencia de las fórmulas: 5 pies = 152,4 cm. */
const BASE_CM = 152.4;

/**
 * Estima el peso ideal con las cuatro fórmulas clásicas y lo contrasta con
 * el rango de IMC saludable.
 *
 * Todas fueron desarrolladas originalmente para calcular dosis de fármacos,
 * no como objetivo estético o de salud, y ninguna tiene en cuenta la
 * complexión ni la composición corporal. Por eso se muestran juntas: la
 * dispersión entre ellas deja claro que no existe un único número correcto.
 */
export function calcularPesoIdeal(input: PesoIdealInput): PesoIdealResult {
  const { altura, sexo } = input;
  const pulgadasSobreBase = Math.max(0, (altura - BASE_CM) / CM_POR_PULGADA);
  const hombre = sexo === "hombre";

  const devine = (hombre ? 50 : 45.5) + 2.3 * pulgadasSobreBase;
  const robinson = (hombre ? 52 : 49) + (hombre ? 1.9 : 1.7) * pulgadasSobreBase;
  const miller = (hombre ? 56.2 : 53.1) + (hombre ? 1.41 : 1.36) * pulgadasSobreBase;
  const hamwi = (hombre ? 48 : 45.5) + (hombre ? 2.7 : 2.2) * pulgadasSobreBase;

  const alturaM = altura / 100;
  const rangoImc = { min: 18.5 * alturaM ** 2, max: 24.9 * alturaM ** 2 };

  return {
    devine,
    robinson,
    miller,
    hamwi,
    rangoImc,
    resultados: [
      { label: "Fórmula de Devine", value: numero(devine, 1) + " kg" },
      { label: "Fórmula de Robinson", value: numero(robinson, 1) + " kg" },
      { label: "Fórmula de Miller", value: numero(miller, 1) + " kg" },
      { label: "Fórmula de Hamwi", value: numero(hamwi, 1) + " kg" },
      {
        label: "Rango según IMC saludable (18,5 – 24,9)",
        value: `${numero(rangoImc.min, 1)} – ${numero(rangoImc.max, 1)} kg`,
      },
    ],
  };
}
