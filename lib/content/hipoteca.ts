import type { CalculatorContent } from "@/types";

export const hipotecaContent: CalculatorContent = {
  intro:
    "La cuota de una hipoteca depende de tres variables: el capital que pides, el tipo de interés y el plazo. Esta calculadora aplica el sistema de amortización francés, que es el que utilizan prácticamente todas las entidades españolas, para estimar cuánto pagarás cada mes y cuánto acabarás pagando en intereses.",
  sections: [
    {
      heading: "Cómo se calcula la cuota mensual",
      paragraphs: [
        "El sistema francés se caracteriza por una cuota constante durante toda la vida del préstamo (si el tipo no varía). Lo que cambia es su composición: al principio pagas sobre todo intereses y amortizas muy poco capital; al final ocurre lo contrario.",
        "La fórmula es: cuota = C × i ÷ (1 − (1 + i)^−n), donde C es el capital prestado, i el tipo de interés mensual (el anual dividido entre 12) y n el número total de mensualidades.",
        "Este detalle tiene una consecuencia práctica importante: amortizar anticipadamente en los primeros años ahorra mucho más dinero que hacerlo al final, porque reduces capital cuando todavía queda mucho interés por generar.",
      ],
    },
    {
      heading: "TIN y TAE: no son lo mismo",
      paragraphs: [
        "El TIN (Tipo de Interés Nominal) es el interés puro del préstamo, sin más. Es el número que los bancos destacan en su publicidad.",
        "La TAE (Tasa Anual Equivalente) incorpora además las comisiones y otros gastos asociados, y refleja el coste real anual. Es el dato que permite comparar ofertas entre entidades de forma honesta.",
        "Una hipoteca con un TIN bajo pero con productos vinculados obligatorios (seguros de hogar, vida, planes de pensiones, domiciliación de nómina) puede tener una TAE bastante peor que otra con un TIN aparentemente más alto. Compara siempre por TAE.",
      ],
    },
    {
      heading: "Tipo fijo, variable y mixto",
      table: {
        headers: ["Modalidad", "Cómo funciona", "A quién le encaja"],
        rows: [
          ["Fijo", "El mismo interés durante toda la vida del préstamo. La cuota no cambia nunca.", "Quien prioriza previsibilidad y quiere saber exactamente qué pagará dentro de quince años."],
          ["Variable", "Se revisa periódicamente (normalmente cada 6 o 12 meses) según un índice de referencia, habitualmente el Euríbor, más un diferencial fijo.", "Quien puede asumir que la cuota suba y apuesta por que el índice baje."],
          ["Mixto", "Un periodo inicial a tipo fijo (por ejemplo, los primeros 5 o 10 años) y el resto a variable.", "Quien quiere estabilidad en los primeros años, que es cuando la cuota pesa más."],
        ],
      },
    },
    {
      heading: "El Euríbor y la revisión de la cuota",
      paragraphs: [
        "El Euríbor es el tipo al que los bancos europeos se prestan dinero entre sí, y es el índice de referencia habitual en las hipotecas variables españolas. En una hipoteca variable tu interés se expresa como «Euríbor + diferencial»: si el Euríbor está al 2,5 % y tu diferencial es del 0,9 %, pagas un 3,4 %.",
        "La revisión no es continua: se aplica en la fecha pactada (semestral o anual) tomando el valor del índice publicado en ese momento. Entre revisiones, tu cuota no se mueve aunque el Euríbor cambie a diario.",
      ],
    },
    {
      heading: "Gastos de constitución: quién paga qué",
      paragraphs: [
        "Desde la entrada en vigor de la Ley 5/2019 reguladora de los contratos de crédito inmobiliario, el reparto de gastos está regulado y ya no es negociable en perjuicio del consumidor.",
      ],
      table: {
        headers: ["Concepto", "Lo paga"],
        rows: [
          ["Notaría (escritura de préstamo)", "La entidad"],
          ["Registro de la Propiedad", "La entidad"],
          ["Gestoría", "La entidad"],
          ["Impuesto de Actos Jurídicos Documentados (IAJD)", "La entidad"],
          ["Tasación del inmueble", "El cliente"],
          ["Copias de la escritura que solicite el cliente", "El cliente"],
        ],
      },
    },
    {
      heading: "Cuánto te van a prestar realmente",
      paragraphs: [
        "Dos reglas orientativas que aplican la mayoría de entidades españolas, aunque cada banco tiene sus propios criterios:",
      ],
      list: [
        "Financiación máxima: en torno al 80 % del menor valor entre tasación y precio de compra. Necesitarás aportar el 20 % restante más los gastos de compraventa, que suelen rondar otro 10-12 %.",
        "Esfuerzo máximo: la suma de todas tus cuotas de deuda no debería superar el 30-35 % de tus ingresos netos mensuales. Incluye préstamos personales, coche y tarjetas revolving.",
      ],
    },
  ],
  faq: [
    {
      q: "¿Conviene amortizar anticipadamente?",
      a: "En el sistema francés, cuanto antes amortices, más intereses te ahorras, porque la parte de interés de la cuota es mucho mayor al principio. Al amortizar puedes elegir entre reducir la cuota o reducir el plazo: reducir plazo ahorra más intereses, reducir cuota alivia más el mes a mes.",
    },
    {
      q: "¿Qué pasa si sube el Euríbor?",
      a: "En una hipoteca variable, tu cuota se recalcula en la siguiente fecha de revisión con el nuevo valor del índice. Si el Euríbor ha subido, la cuota sube. En una hipoteca a tipo fijo no ocurre nada: tu cuota no cambia.",
    },
    {
      q: "¿Cuánto dinero necesito ahorrado para comprar una vivienda?",
      a: "Como referencia, en torno al 30-32 % del precio: un 20 % de entrada que el banco no financia, más un 10-12 % de gastos de compraventa (impuesto de transmisiones o IVA, notaría, registro y gestoría de la compra).",
    },
    {
      q: "¿Puedo deducirme la hipoteca en la declaración de la renta?",
      a: "La deducción estatal por inversión en vivienda habitual se suprimió para adquisiciones posteriores al 1 de enero de 2013. Quienes compraron antes y venían aplicándola pueden mantenerla mediante el régimen transitorio. Además, algunas comunidades autónomas tienen deducciones propias. Consúltalo con un asesor.",
    },
    {
      q: "¿Es obligatorio contratar los seguros que ofrece el banco?",
      a: "El seguro de daños del inmueble es legalmente exigible, pero no estás obligado a contratarlo con la entidad: puedes llevar uno de otra compañía con coberturas equivalentes. El seguro de vida no es obligatorio por ley, aunque el banco puede condicionar una bonificación del tipo a su contratación.",
    },
  ],
  related: ["prestamo", "amortizacion", "interes-compuesto", "inflacion"],
  sources: [
    {
      label: "Banco de España — Portal del Cliente Bancario: hipotecas",
      url: "https://clientebancario.bde.es/pcb/es/menu-horizontal/productosservici/financiacion/hipotecas/",
    },
    {
      label: "BOE — Ley 5/2019 reguladora de los contratos de crédito inmobiliario",
      url: "https://www.boe.es/buscar/act.php?id=BOE-A-2019-3814",
    },
  ],
  disclaimer:
    "Esta calculadora ofrece una estimación orientativa y no constituye una oferta vinculante ni asesoramiento financiero. Las condiciones reales dependen de cada entidad y de tu perfil. Pide siempre la Ficha Europea de Información Normalizada (FEIN) antes de firmar.",
};
