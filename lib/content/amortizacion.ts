import type { CalculatorContent } from "@/types";

export const amortizacionContent: CalculatorContent = {
  intro:
    "El cuadro de amortización muestra, cuota a cuota, qué parte de tu pago va a intereses y qué parte reduce realmente la deuda. Entenderlo cambia decisiones concretas: cuándo conviene amortizar anticipadamente, si merece la pena cambiar de plazo y cuánto te ahorras en cada caso.",
  sections: [
    {
      heading: "Qué es un cuadro de amortización",
      paragraphs: [
        "Es la tabla que desglosa cada cuota del préstamo en cuatro columnas: cuota total, intereses del periodo, capital amortizado y capital pendiente.",
        "En el sistema francés, que es el habitual en España, la cuota total es constante pero su reparto cambia. Los intereses se calculan siempre sobre el capital pendiente, que va bajando, de modo que cada mes pagas un poco menos de intereses y amortizas un poco más de capital.",
      ],
    },
    {
      heading: "Por qué al principio casi todo son intereses",
      paragraphs: [
        "En los primeros años el capital pendiente es casi el total prestado, así que los intereses del periodo son altos y dejan poco margen para amortizar.",
        "En una hipoteca de 150.000 € a 30 años al 3 %, la primera cuota ronda los 632 €, de los que unos 375 € son intereses y solo unos 257 € amortizan capital. Al cabo de 15 años la proporción se ha invertido.",
        "Esto explica algo que sorprende a mucha gente: después de cinco años pagando una hipoteca a 30 años, la deuda apenas ha bajado en torno a un 12 %.",
      ],
    },
    {
      heading: "Amortizar anticipadamente: reducir cuota o reducir plazo",
      paragraphs: [
        "Cuando aportas dinero extra, la entidad te deja elegir entre dos opciones, y no son equivalentes.",
      ],
      table: {
        headers: ["Opción", "Qué ocurre", "Cuándo conviene"],
        rows: [
          ["Reducir plazo", "La cuota se mantiene igual y terminas antes de pagar. Es la opción que más intereses ahorra.", "Si puedes seguir pagando la cuota actual sin apuros y tu objetivo es pagar lo mínimo posible en total."],
          ["Reducir cuota", "El plazo se mantiene y pagas menos cada mes. Ahorra menos intereses.", "Si necesitas aliviar el presupuesto mensual o tu situación de ingresos es inestable."],
        ],
      },
    },
    {
      heading: "Cuándo amortizar",
      paragraphs: [
        "Cuanto antes, mejor. Un euro amortizado el primer año evita todos los intereses que ese euro habría generado durante los 29 años restantes; el mismo euro amortizado en el año 25 apenas evita nada.",
        "Dicho esto, la decisión no es solo matemática. Antes de destinar ahorro a amortizar conviene tener un fondo de emergencia, porque el dinero que metes en la hipoteca deja de estar disponible. Y si el tipo de tu préstamo es muy bajo, puede tener más sentido destinar ese dinero a otro fin.",
      ],
    },
    {
      heading: "Sistema francés y sistema alemán",
      paragraphs: [
        "El sistema francés mantiene la cuota constante y varía el reparto. Es el que usan casi todas las entidades españolas.",
        "El sistema alemán amortiza siempre la misma cantidad de capital, de modo que la cuota empieza siendo muy alta y va bajando. Paga menos intereses en total, pero exige un esfuerzo inicial mucho mayor y es poco frecuente en el mercado español.",
      ],
    },
  ],
  faq: [
    {
      q: "¿Qué ahorra más: reducir plazo o reducir cuota?",
      a: "Reducir plazo. Al mantener la cuota, cada mes sigues destinando la misma cantidad a la deuda, pero sobre un capital menor, de modo que terminas antes y pagas menos intereses en total. Reducir cuota alivia el mes a mes pero ahorra menos.",
    },
    {
      q: "¿Tiene comisión amortizar anticipadamente?",
      a: "Puede tenerla, y está limitada por ley. En las hipotecas sujetas a la Ley 5/2019 los límites dependen de si el tipo es fijo o variable y del momento en que amortices. Revisa tu escritura y pregunta a la entidad antes de hacer la operación.",
    },
    {
      q: "¿Por qué después de años pagando debo casi lo mismo?",
      a: "Porque en el sistema francés los primeros años se destinan mayoritariamente a intereses. No es un error ni un abuso: es la consecuencia de calcular los intereses sobre el capital pendiente, que al principio es prácticamente el total.",
    },
    {
      q: "¿Puedo pedir el cuadro de amortización a mi banco?",
      a: "Sí. La entidad está obligada a facilitártelo, y también figura en la documentación precontractual que te entregan antes de firmar.",
    },
  ],
  related: ["hipoteca", "prestamo", "interes-compuesto"],
  sources: [
    {
      label: "Banco de España — Portal del Cliente Bancario: amortización anticipada",
      url: "https://clientebancario.bde.es/pcb/es/menu-horizontal/productosservici/financiacion/hipotecas/",
    },
  ],
  disclaimer:
    "Estimación orientativa con fines divulgativos. Las cifras de los ejemplos son aproximadas. Consulta tu cuadro de amortización real y las condiciones de tu contrato con la entidad.",
};
