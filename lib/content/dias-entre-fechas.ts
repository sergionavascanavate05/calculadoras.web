import type { CalculatorContent } from "@/types";

export const diasEntreFechasContent: CalculatorContent = {
  intro:
    "Contar días a mano es sorprendentemente propenso a errores: los meses tienen duraciones distintas, los años bisiestos aparecen cada cuatro y los fines de semana descuadran cualquier cálculo de plazos laborales. Esta calculadora te da los días naturales, los laborables y el desglose en años, meses y días.",
  sections: [
    {
      heading: "Días naturales y días hábiles",
      paragraphs: [
        "Los días naturales incluyen todos los del calendario, sin excepción. Los días hábiles o laborables excluyen sábados, domingos y festivos.",
        "La distinción importa mucho en plazos administrativos y contractuales. En el ámbito administrativo español, cuando una norma fija un plazo en días sin especificar, se entienden hábiles; si el plazo se expresa en meses o años, se computa de fecha a fecha.",
        "Esta calculadora cuenta como laborables los días de lunes a viernes. No descuenta festivos, porque varían según la comunidad autónoma y el municipio, y no existe un calendario único para toda España.",
      ],
    },
    {
      heading: "Años bisiestos",
      paragraphs: [
        "Un año es bisiesto si es divisible entre 4, salvo que sea divisible entre 100, en cuyo caso solo lo es si además lo es entre 400.",
        "Por eso 2000 fue bisiesto y 1900 no lo fue. La regla existe porque el año solar dura algo más de 365 días, y sin esta corrección el calendario se desplazaría respecto a las estaciones.",
        "Ignorar los bisiestos es la causa más común de error al contar días largos a mano.",
      ],
    },
    {
      heading: "Por qué el desglose en meses es aproximado",
      paragraphs: [
        "Expresar una diferencia en «años, meses y días» no es una operación exacta, porque los meses no duran lo mismo.",
        "Del 31 de enero al 28 de febrero hay 28 días. ¿Es eso «un mes»? Depende del criterio. Esta herramienta usa el cómputo de fecha a fecha, que es el habitual en derecho español: un mes va del día X de un mes al mismo día del siguiente, y cuando ese día no existe se toma el último del mes.",
        "El dato de días naturales, en cambio, siempre es exacto y no admite interpretación.",
      ],
    },
    {
      heading: "Usos habituales",
      list: [
        "Calcular plazos de entrega, de garantía o de desistimiento en una compra.",
        "Saber cuántos días de vacaciones consume un periodo concreto.",
        "Contar los días que faltan para una fecha señalada.",
        "Calcular la antigüedad en un puesto o la duración de un contrato.",
        "Determinar días de devengo de intereses entre dos fechas.",
      ],
    },
  ],
  faq: [
    {
      q: "¿Cómo cuento los días entre dos fechas?",
      a: "Resta la fecha inicial a la final. La dificultad está en los meses de distinta duración y en los años bisiestos, que es justo lo que resuelve esta calculadora.",
    },
    {
      q: "¿Se cuenta el día inicial?",
      a: "Depende del contexto. Esta calculadora devuelve la diferencia entre ambas fechas, sin incluir el día inicial. En plazos administrativos, el cómputo suele empezar el día siguiente al de la notificación.",
    },
    {
      q: "¿La calculadora descuenta los festivos?",
      a: "No. Cuenta como laborables todos los días de lunes a viernes. Los festivos varían según la comunidad autónoma y el municipio, por lo que debes restarlos tú consultando el calendario laboral que te corresponda.",
    },
    {
      q: "¿Cómo sé si un año es bisiesto?",
      a: "Es bisiesto si es divisible entre 4, excepto los divisibles entre 100 que no lo sean entre 400. Así, 2024 fue bisiesto, 1900 no lo fue y 2000 sí.",
    },
  ],
  related: ["edad", "porcentaje", "consumo-combustible"],
  sources: [
    {
      label: "BOE — Ley 39/2015 del Procedimiento Administrativo Común (cómputo de plazos)",
      url: "https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565",
    },
  ],
  disclaimer:
    "El cálculo de días laborables no descuenta festivos autonómicos ni locales. Para plazos con efectos jurídicos, verifica el cómputo con el calendario oficial aplicable.",
};
