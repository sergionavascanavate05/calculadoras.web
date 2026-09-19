import type { CalculatorContent } from "@/types";

export const porcentajeContent: CalculatorContent = {
  intro:
    "Los porcentajes aparecen en todas partes y se calculan mal con una frecuencia sorprendente. La mayoría de los errores vienen de no tener claro cuál es el total de referencia, o de confundir una variación porcentual con una diferencia en puntos porcentuales.",
  sections: [
    {
      heading: "Los tres cálculos básicos",
      list: [
        "Qué porcentaje representa un valor:  valor ÷ total × 100. De 25 sobre 200 → 12,5 %.",
        "Cuánto es un porcentaje de un total:  total × porcentaje ÷ 100. El 15 % de 340 → 51.",
        "Variación porcentual entre dos valores:  (nuevo − antiguo) ÷ antiguo × 100. De 80 a 100 → +25 %.",
      ],
    },
    {
      heading: "Subir y bajar el mismo porcentaje no te devuelve al punto de partida",
      paragraphs: [
        "Es el error más frecuente y el más costoso. Si un precio sube un 20 % y después baja un 20 %, no vuelve al original: queda por debajo.",
        "Sobre 100 €: subir un 20 % da 120 €; bajar un 20 % de 120 € son 24 €, así que queda en 96 €. Se ha perdido un 4 %.",
        "El motivo es que cada porcentaje se aplica sobre una base distinta. La subida se calcula sobre 100 y la bajada sobre 120.",
      ],
      table: {
        headers: ["Sube", "Luego baja", "Resultado sobre 100"],
        rows: [
          ["10 %", "10 %", "99 €  (−1 %)"],
          ["20 %", "20 %", "96 €  (−4 %)"],
          ["50 %", "50 %", "75 €  (−25 %)"],
          ["100 %", "50 %", "100 €  (vuelve al origen)"],
        ],
      },
    },
    {
      heading: "Porcentaje frente a puntos porcentuales",
      paragraphs: [
        "Si un indicador pasa del 5 % al 7 %, ha subido dos puntos porcentuales, pero ha aumentado un 40 % en términos relativos.",
        "Las dos cifras son correctas y describen lo mismo desde ángulos distintos. Confundirlas, o elegir deliberadamente la más impactante, es un recurso habitual en titulares y en publicidad.",
        "La regla práctica: cuando compares dos porcentajes entre sí, la diferencia se expresa en puntos porcentuales. Cuando midas el crecimiento de una magnitud, se expresa en porcentaje.",
      ],
    },
    {
      heading: "Revertir un porcentaje ya aplicado",
      paragraphs: [
        "Para saber cuál era el valor original antes de aplicar un aumento, hay que dividir, no restar.",
        "Si un producto cuesta 145 € tras una subida del 16 %, el precio anterior era 145 ÷ 1,16 = 125 €. Restar el 16 % a 145 € daría 121,80 €, que es incorrecto.",
        "El mismo principio se aplica al extraer el IVA de un precio final o al deshacer cualquier incremento porcentual.",
      ],
    },
  ],
  faq: [
    {
      q: "¿Cómo se calcula el porcentaje de una cantidad?",
      a: "Multiplica la cantidad por el porcentaje y divide entre 100. El 15 % de 340 es 340 × 15 ÷ 100 = 51.",
    },
    {
      q: "¿Cómo calculo el aumento porcentual entre dos cifras?",
      a: "Resta el valor antiguo al nuevo, divide entre el antiguo y multiplica por 100. De 80 a 100: (100 − 80) ÷ 80 × 100 = 25 %.",
    },
    {
      q: "Si algo sube un 50 % y luego baja un 50 %, ¿vuelve al precio inicial?",
      a: "No. Queda un 25 % por debajo. Subir 50 % sobre 100 da 150, y bajar el 50 % de 150 son 75. Cada porcentaje se aplica sobre una base diferente.",
    },
    {
      q: "¿Qué es un punto porcentual?",
      a: "Es la diferencia aritmética entre dos porcentajes. Pasar del 5 % al 7 % son dos puntos porcentuales de subida, pero un aumento relativo del 40 %.",
    },
  ],
  related: ["descuento", "iva", "margen-comercial", "inflacion"],
  disclaimer: undefined,
};
