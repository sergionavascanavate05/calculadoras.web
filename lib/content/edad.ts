import type { CalculatorContent } from "@/types";

export const edadContent: CalculatorContent = {
  intro:
    "Calcular la edad exacta en años, meses y días parece trivial, pero los meses de distinta duración y los años bisiestos complican el cómputo manual. Esta calculadora aplica el criterio de fecha a fecha, que es el que se utiliza en el ámbito administrativo y legal español.",
  sections: [
    {
      heading: "Cómo se cuenta la edad",
      paragraphs: [
        "En España, y en general en la cultura occidental, se cumple un año en el aniversario del nacimiento. Una persona nacida el 15 de marzo de 1990 cumple 34 años el 15 de marzo de 2024, y hasta ese día sigue teniendo 33.",
        "El cómputo de fecha a fecha significa que un año va del día X de un mes al mismo día del mismo mes del año siguiente, con independencia de cuántos días hayan transcurrido en total.",
      ],
    },
    {
      heading: "Nacidos el 29 de febrero",
      paragraphs: [
        "El 29 de febrero solo existe en los años bisiestos, es decir, aproximadamente uno de cada cuatro. Quienes nacen ese día cumplen años de forma completa solo en los bisiestos.",
        "A efectos civiles no hay ninguna ambigüedad: en los años no bisiestos la edad se entiende cumplida el 1 de marzo. Legalmente no existe ningún vacío ni se retrasa la mayoría de edad.",
      ],
    },
    {
      heading: "La regla de los años bisiestos",
      paragraphs: [
        "Un año es bisiesto si es divisible entre 4, salvo que lo sea entre 100, en cuyo caso solo es bisiesto si además es divisible entre 400.",
        "Por eso 1900 no fue bisiesto pero 2000 sí. La corrección existe porque el año solar dura unas 365,2422 días, y sin ella el calendario se iría desplazando respecto a las estaciones.",
      ],
    },
    {
      heading: "Edades con efectos legales en España",
      table: {
        headers: ["Edad", "Qué supone"],
        rows: [
          ["14 años", "Edad mínima de responsabilidad penal del menor; se puede obtener el DNI."],
          ["16 años", "Edad laboral mínima con autorización; emancipación posible por concesión."],
          ["18 años", "Mayoría de edad: plena capacidad de obrar, derecho de voto, permiso de conducir B."],
          ["67 años", "Edad ordinaria de jubilación en el régimen general, sujeta a los años cotizados."],
        ],
      },
    },
  ],
  faq: [
    {
      q: "¿Cómo se calcula la edad exacta?",
      a: "Se cuenta de fecha a fecha: los años completos transcurridos desde el nacimiento, más los meses y días adicionales hasta la fecha actual. Esta calculadora lo hace teniendo en cuenta la distinta duración de los meses y los años bisiestos.",
    },
    {
      q: "¿Cuándo cumple años alguien nacido el 29 de febrero?",
      a: "En los años bisiestos, el 29 de febrero. En los demás, a efectos civiles la edad se entiende cumplida el 1 de marzo.",
    },
    {
      q: "¿Cómo sé si un año es bisiesto?",
      a: "Es bisiesto si es divisible entre 4, excepto los divisibles entre 100 que no lo sean entre 400. Así, 2024 fue bisiesto y 1900 no.",
    },
    {
      q: "¿Se cuenta el día del nacimiento?",
      a: "El día del nacimiento es el día cero: a partir de él empieza a contar la edad. Se cumple un año completo en el primer aniversario, no el día siguiente al nacimiento.",
    },
  ],
  related: ["dias-entre-fechas", "imc", "fcm"],
  sources: [
    {
      label: "BOE — Código Civil (mayoría de edad y cómputo de plazos)",
      url: "https://www.boe.es/buscar/act.php?id=BOE-A-1889-4763",
    },
  ],
  disclaimer:
    "Las edades con efectos legales son orientativas y pueden variar según la materia y la normativa aplicable. No constituye asesoramiento jurídico.",
};
