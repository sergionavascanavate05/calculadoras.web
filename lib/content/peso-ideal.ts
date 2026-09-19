import type { CalculatorContent } from "@/types";

export const pesoIdealContent: CalculatorContent = {
  intro:
    "El «peso ideal» es un concepto mucho menos sólido de lo que parece. Existen varias fórmulas clásicas y ninguna coincide con las demás, porque todas nacieron con un propósito clínico muy concreto que no era decirle a nadie cuánto debería pesar. Esta calculadora las muestra juntas, junto al rango de IMC saludable.",
  sections: [
    {
      heading: "Las cuatro fórmulas clásicas",
      paragraphs: [
        "Todas parten de una altura de referencia de 152,4 cm (cinco pies) y añaden una cantidad fija por cada pulgada adicional. Se diferencian en el punto de partida y en el incremento.",
      ],
      table: {
        headers: ["Fórmula", "Año", "Hombres", "Mujeres"],
        rows: [
          ["Devine", "1974", "50 kg + 2,3 kg por pulgada", "45,5 kg + 2,3 kg por pulgada"],
          ["Robinson", "1983", "52 kg + 1,9 kg por pulgada", "49 kg + 1,7 kg por pulgada"],
          ["Miller", "1983", "56,2 kg + 1,41 kg por pulgada", "53,1 kg + 1,36 kg por pulgada"],
          ["Hamwi", "1964", "48 kg + 2,7 kg por pulgada", "45,5 kg + 2,2 kg por pulgada"],
        ],
      },
    },
    {
      heading: "Para qué se crearon realmente",
      paragraphs: [
        "La fórmula de Devine se desarrolló para calcular dosis de fármacos, no para orientar sobre el peso corporal. El motivo es que algunos medicamentos se distribuyen por masa magra, y usar el peso real en personas con mucha grasa corporal daría dosis excesivas.",
        "Las demás surgieron en contextos clínicos o de tablas aseguradoras. Ninguna se diseñó como objetivo estético ni como recomendación de salud individual, y usarlas con ese fin es desvirtuarlas.",
      ],
    },
    {
      heading: "Lo que ninguna fórmula tiene en cuenta",
      list: [
        "La complexión ósea. Dos personas de la misma altura pueden tener estructuras muy distintas.",
        "La masa muscular. Alguien que entrena fuerza puede superar todas las fórmulas estando en excelente estado.",
        "La edad, que modifica la composición corporal a lo largo de la vida.",
        "La distribución de la grasa, que es lo que más importa desde el punto de vista metabólico.",
        "El origen étnico, pese a que existen diferencias documentadas en composición corporal media entre poblaciones.",
        "El historial personal y el peso en el que cada cuerpo funciona bien y resulta sostenible.",
      ],
    },
    {
      heading: "Un enfoque más útil: el rango, no el número",
      paragraphs: [
        "En lugar de un único valor, resulta más razonable pensar en un intervalo. El rango correspondiente a un IMC de 18,5 a 24,9 da una horquilla amplia, y es la referencia que utiliza la OMS.",
        "Para una altura de 1,75 m, ese rango va aproximadamente de 56,7 a 76,3 kg. Casi veinte kilos de margen, y todos ellos dentro de lo que se considera peso normal.",
        "Esa amplitud no es un defecto de la medida: refleja que no existe un peso correcto único para una altura dada.",
      ],
    },
  ],
  faq: [
    {
      q: "¿Cuál de las fórmulas es la más fiable?",
      a: "Ninguna destaca claramente como referencia de salud, porque no se diseñaron para eso. La de Devine es la más usada en el ámbito clínico para el cálculo de dosis farmacológicas, no como objetivo de peso.",
    },
    {
      q: "¿Por qué cada fórmula me da un peso distinto?",
      a: "Porque parten de coeficientes diferentes, obtenidos de poblaciones y con finalidades distintas. Esa dispersión es precisamente la prueba de que el concepto de peso ideal único no tiene una base sólida.",
    },
    {
      q: "¿Debo intentar alcanzar mi peso ideal?",
      a: "No es un objetivo recomendable por sí mismo. Resulta más útil fijarse en indicadores de salud como la analítica, la tensión arterial, la fuerza, la capacidad cardiorrespiratoria y el perímetro de cintura. Si te preocupa tu peso, consúltalo con un profesional sanitario.",
    },
    {
      q: "¿Sirven estas fórmulas para niños o adolescentes?",
      a: "No. Están desarrolladas para población adulta. En menores se emplean curvas de crecimiento y percentiles por edad y sexo, que debe interpretar un profesional sanitario.",
    },
  ],
  related: ["imc", "tmb", "calorias"],
  sources: [
    {
      label: "Organización Mundial de la Salud — Obesidad y sobrepeso",
      url: "https://www.who.int/es/news-room/fact-sheets/detail/obesity-and-overweight",
    },
  ],
  disclaimer:
    "Herramienta informativa, no constituye consejo médico. El concepto de peso ideal tiene limitaciones importantes y estas fórmulas no fueron diseñadas para orientar decisiones personales sobre el peso. Si tienes dudas sobre tu salud o tu alimentación, consulta con un profesional sanitario o un dietista-nutricionista.",
};
