import type { CalculatorContent } from "@/types";

export const prestamoContent: CalculatorContent = {
  intro:
    "Un préstamo personal se devuelve normalmente en cuotas mensuales constantes mediante el sistema de amortización francés. Esta calculadora estima tu cuota a partir del capital, el tipo de interés y el plazo, y te muestra cuánto pagarás en intereses durante toda la operación.",
  sections: [
    {
      heading: "Cómo se calcula la cuota",
      paragraphs: [
        "La fórmula del sistema francés es: cuota = C × i ÷ (1 − (1 + i)⁻ⁿ), donde C es el capital, i el tipo mensual (el anual dividido entre 12) y n el número de mensualidades.",
        "La cuota se mantiene igual todos los meses, pero su composición cambia: las primeras cuotas son mayoritariamente intereses y las últimas mayoritariamente capital.",
      ],
    },
    {
      heading: "El plazo es lo que más encarece un préstamo",
      paragraphs: [
        "Alargar el plazo baja la cuota mensual, y por eso resulta tentador. Pero el coste total se dispara, porque pagas intereses durante más tiempo sobre un capital que tardas más en reducir.",
        "Con 10.000 € al 8 % de interés nominal anual, el efecto es este:",
      ],
      table: {
        headers: ["Plazo", "Cuota aproximada", "Intereses totales aproximados"],
        rows: [
          ["3 años", "313 €", "1.281 €"],
          ["5 años", "203 €", "2.166 €"],
          ["8 años", "141 €", "3.578 €"],
          ["10 años", "121 €", "4.559 €"],
        ],
      },
    },
    {
      heading: "TIN, TAE y comisiones",
      paragraphs: [
        "El TIN es el interés puro. La TAE incluye además la comisión de apertura, la de estudio y cualquier otro gasto obligatorio, y expresa el coste real anualizado. Para comparar ofertas, la TAE es el único dato fiable.",
        "Cuidado con los productos vinculados: un préstamo con un TIN bajo que te obliga a contratar un seguro de protección de pagos puede salir bastante más caro que otro sin vinculaciones.",
      ],
      list: [
        "Comisión de apertura: porcentaje sobre el capital, se cobra al inicio.",
        "Comisión por amortización anticipada: limitada por ley en los préstamos al consumo.",
        "Seguro de protección de pagos: si es obligatorio, debe computar en la TAE.",
      ],
    },
    {
      heading: "Préstamo personal frente a tarjeta revolving",
      paragraphs: [
        "No son lo mismo y la diferencia de coste es enorme. Un préstamo personal tiene un capital, un plazo y un cuadro de amortización cerrados desde el principio: sabes exactamente cuándo terminarás de pagar.",
        "Una tarjeta revolving funciona como un crédito que se recompone: pagas una cuota fija baja, el capital pendiente apenas se reduce y la deuda puede prolongarse durante años. Sus tipos son muy superiores a los de un préstamo personal y han generado abundante litigiosidad por usura en los tribunales españoles.",
        "Si estás comparando financiación, un préstamo personal con cuadro de amortización cerrado es casi siempre preferible a una línea revolving.",
      ],
    },
  ],
  faq: [
    {
      q: "¿Qué diferencia hay entre TIN y TAE?",
      a: "El TIN es el interés nominal, sin gastos. La TAE incorpora comisiones y gastos obligatorios y refleja el coste real anual. Dos préstamos con el mismo TIN pueden tener TAE muy distintas si uno cobra comisión de apertura y el otro no.",
    },
    {
      q: "¿Puedo cancelar un préstamo antes de tiempo?",
      a: "Sí. En los préstamos al consumo la comisión por amortización anticipada está limitada por ley y depende del plazo restante y del importe. Cancelar anticipadamente siempre reduce los intereses que acabarás pagando.",
    },
    {
      q: "¿Cuánto dinero me pueden prestar?",
      a: "Depende de tus ingresos y de tu endeudamiento actual. Como referencia, las entidades suelen aceptar que la suma de todas tus cuotas de deuda no supere el 35 % de tus ingresos netos mensuales.",
    },
    {
      q: "¿Qué pasa si dejo de pagar una cuota?",
      a: "Se generan intereses de demora, puedes acabar en un fichero de morosos y, si el impago persiste, la entidad puede declarar vencido anticipadamente todo el préstamo y reclamar la totalidad. Si prevés dificultades, contacta con la entidad antes del impago para negociar una carencia o una reestructuración.",
    },
  ],
  related: ["hipoteca", "amortizacion", "interes-compuesto"],
  sources: [
    {
      label: "Banco de España — Portal del Cliente Bancario",
      url: "https://clientebancario.bde.es/pcb/es/menu-horizontal/productosservici/financiacion/",
    },
  ],
  disclaimer:
    "Estimación orientativa, no es una oferta vinculante ni asesoramiento financiero. Las cifras de los ejemplos son aproximadas y están redondeadas. Consulta las condiciones reales con la entidad.",
};
