import type { CalculatorContent } from "@/types";

export const interesCompuestoContent: CalculatorContent = {
  intro:
    "El interés compuesto es el mecanismo por el que los intereses que genera un capital se suman a ese capital y, a partir de ese momento, también generan intereses. Es la diferencia entre un crecimiento lineal y uno exponencial, y explica por qué el tiempo importa más que la cantidad que inviertes.",
  sections: [
    {
      heading: "La fórmula",
      paragraphs: [
        "Para un capital inicial sin aportaciones: Cf = C0 × (1 + i)ⁿ, donde C0 es el capital inicial, i el tipo de interés por periodo y n el número de periodos.",
        "Si además haces aportaciones periódicas constantes, se suma el valor futuro de esas aportaciones: A × [((1 + i)ⁿ − 1) ÷ i].",
      ],
    },
    {
      heading: "Interés simple frente a compuesto",
      paragraphs: [
        "Con interés simple, los intereses se calculan siempre sobre el capital inicial. Con interés compuesto, se calculan sobre el capital acumulado. En plazos cortos la diferencia es pequeña; en plazos largos es abismal.",
        "Comparación con 10.000 € al 7 % anual:",
      ],
      table: {
        headers: ["Años", "Interés simple", "Interés compuesto", "Diferencia"],
        rows: [
          ["5", "13.500 €", "14.026 €", "526 €"],
          ["10", "17.000 €", "19.672 €", "2.672 €"],
          ["20", "24.000 €", "38.697 €", "14.697 €"],
          ["30", "31.000 €", "76.123 €", "45.123 €"],
        ],
      },
    },
    {
      heading: "El tiempo pesa más que el importe",
      paragraphs: [
        "Esta es la consecuencia práctica más importante y la más contraintuitiva. Empezar pronto con poco suele superar a empezar tarde con mucho.",
        "Una persona que invierte 200 € al mes durante 10 años y luego no aporta nada más, dejando crecer lo acumulado otros 25 años, termina con más dinero que otra que empieza 10 años más tarde y aporta 200 € al mes durante 25 años seguidos. La primera aporta bastante menos dinero, pero sus primeras aportaciones tienen 35 años para componerse.",
        "Por eso la variable que más deberías proteger no es la rentabilidad, sino el tiempo durante el que el dinero permanece invertido.",
      ],
    },
    {
      heading: "La regla del 72",
      paragraphs: [
        "Es un atajo mental para estimar cuánto tarda un capital en duplicarse: divide 72 entre el tipo de interés anual en porcentaje.",
        "Al 6 % anual, un capital se duplica en unos 12 años (72 ÷ 6). Al 9 %, en unos 8 años. Al 3 %, en unos 24 años. La aproximación es buena para tipos de entre el 4 % y el 12 %.",
      ],
    },
    {
      heading: "Lo que la fórmula no incluye",
      paragraphs: [
        "Una proyección de interés compuesto asume una rentabilidad constante, y eso no existe en los mercados reales. Conviene tener presentes tres factores que la fórmula ignora:",
      ],
      list: [
        "La inflación: una rentabilidad del 6 % con una inflación del 3 % supone un 3 % de poder adquisitivo real, no un 6 %.",
        "Las comisiones: un 1 % anual de comisión de gestión puede reducir el resultado final a 30 años en torno a una cuarta parte.",
        "La fiscalidad: en España las ganancias del ahorro tributan al rescatar, lo que reduce el capital final disponible.",
        "La volatilidad: la rentabilidad real no llega de forma constante, sino con años buenos y años malos. Una caída fuerte al principio afecta de forma distinta que una al final.",
      ],
    },
  ],
  faq: [
    {
      q: "¿Cada cuánto se capitalizan los intereses?",
      a: "Depende del producto. Puede ser anual, trimestral, mensual o diaria. A igualdad de tipo nominal, cuanto más frecuente es la capitalización, mayor es el resultado final, aunque la diferencia entre capitalización mensual y diaria suele ser pequeña.",
    },
    {
      q: "¿Qué es la regla del 72?",
      a: "Un atajo para estimar cuántos años tarda un capital en duplicarse: divide 72 entre el tipo de interés anual. Al 8 % anual, unos 9 años.",
    },
    {
      q: "¿El interés compuesto también funciona en contra?",
      a: "Sí, y es exactamente el mecanismo de las tarjetas revolving y de los descubiertos. Los intereses no pagados se incorporan a la deuda y empiezan a generar sus propios intereses, de modo que la deuda crece de forma acelerada.",
    },
    {
      q: "¿Qué rentabilidad debería usar en la simulación?",
      a: "No existe una cifra correcta, porque la rentabilidad futura es desconocida. Muchas simulaciones usan valores conservadores para no generar expectativas irreales. Lo más útil es probar varios escenarios, incluyendo uno claramente pesimista.",
    },
  ],
  related: ["inflacion", "amortizacion", "hipoteca", "beneficio"],
  sources: [
    {
      label: "CNMV — Portal del Inversor: el interés compuesto",
      url: "https://www.cnmv.es/portal/inversor/Rincon-Inversor.aspx",
    },
    {
      label: "Banco de España — Portal del Cliente Bancario: ahorro e inversión",
      url: "https://clientebancario.bde.es/pcb/es/menu-horizontal/productosservici/",
    },
  ],
  disclaimer:
    "Esta calculadora es una herramienta de simulación con fines divulgativos y no constituye asesoramiento de inversión ni una previsión de rentabilidad. Rentabilidades pasadas no garantizan rentabilidades futuras, y toda inversión conlleva riesgo de pérdida.",
};
