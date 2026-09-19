import type { CalculatorContent } from "@/types";

export const caloriasContent: CalculatorContent = {
  intro:
    "El gasto calórico de una actividad depende de su intensidad, de tu peso y del tiempo que la mantengas. Esta calculadora usa el sistema MET, el estándar en fisiología del ejercicio, para estimar cuántas kilocalorías consumes.",
  sections: [
    {
      heading: "Qué es un MET",
      paragraphs: [
        "MET significa equivalente metabólico. Un MET es el gasto energético en reposo sentado, aproximadamente 3,5 mililitros de oxígeno por kilo y minuto.",
        "Una actividad de 8 MET consume ocho veces esa energía. El sistema permite comparar esfuerzos muy distintos con una única escala, y los valores proceden del Compendium of Physical Activities, una referencia internacional revisada periódicamente.",
      ],
    },
    {
      heading: "La fórmula",
      paragraphs: [
        "kcal por minuto = MET × 3,5 × peso en kg ÷ 200. El total se obtiene multiplicando por los minutos de actividad.",
        "Una persona de 70 kg caminando a paso ligero (3,5 MET) durante 45 minutos: 3,5 × 3,5 × 70 ÷ 200 = 4,29 kcal/min, es decir, unas 193 kcal.",
        "De la fórmula se deduce algo importante: a igual actividad, una persona con más peso gasta más energía, porque mover más masa cuesta más.",
      ],
    },
    {
      heading: "Intensidad de las actividades más comunes",
      table: {
        headers: ["Actividad", "MET aproximado", "Intensidad"],
        rows: [
          ["Caminar lento (3 km/h)", "2,5", "Ligera"],
          ["Tareas domésticas", "4,0", "Ligera-moderada"],
          ["Caminar ligero (5 km/h)", "3,5", "Moderada"],
          ["Bicicleta suave (16 km/h)", "4,5", "Moderada"],
          ["Natación recreativa", "5,5", "Moderada"],
          ["Fuerza vigorosa", "6,0", "Vigorosa"],
          ["Correr suave (8 km/h)", "7,0", "Vigorosa"],
          ["Correr (10 km/h)", "9,8", "Vigorosa"],
          ["Correr rápido (12 km/h)", "11,5", "Muy vigorosa"],
        ],
      },
    },
    {
      heading: "Por qué la cifra es solo una estimación",
      paragraphs: [
        "Los valores MET son promedios poblacionales y no captan las diferencias individuales, que pueden ser notables.",
      ],
      list: [
        "La eficiencia técnica importa: un corredor experimentado gasta menos energía que un principiante al mismo ritmo.",
        "La composición corporal influye, porque el tejido muscular y el graso no consumen igual.",
        "El terreno y las condiciones cambian el gasto: cuestas, viento, calor o superficie irregular lo aumentan.",
        "Los pulsómetros y relojes deportivos también estiman, no miden: suelen sobrestimar el gasto, a veces de forma considerable.",
        "La cifra no descuenta el metabolismo basal que habrías gastado de todos modos durante ese rato.",
      ],
    },
    {
      heading: "Cuánta actividad recomienda la OMS",
      paragraphs: [
        "La Organización Mundial de la Salud recomienda a la población adulta entre 150 y 300 minutos semanales de actividad aeróbica moderada, o entre 75 y 150 de actividad vigorosa, o una combinación equivalente.",
        "Añade además ejercicios de fortalecimiento muscular al menos dos días por semana, y subraya que cualquier cantidad de actividad es mejor que ninguna.",
      ],
    },
  ],
  faq: [
    {
      q: "¿Cuántas calorías se queman caminando una hora?",
      a: "Depende del peso y del ritmo. Una persona de 70 kg caminando a paso ligero (3,5 MET) durante 60 minutos quema unas 257 kcal. A paso lento serían bastante menos.",
    },
    {
      q: "¿Por qué mi reloj deportivo me da otra cifra?",
      a: "Porque usa su propio algoritmo, normalmente basado en frecuencia cardíaca y datos personales. Ambas son estimaciones, y los dispositivos de muñeca tienden a sobrestimar el gasto calórico.",
    },
    {
      q: "¿Cuántas calorías hay que quemar para perder un kilo?",
      a: "Se suele citar la cifra de unas 7.000 kcal por kilo de grasa, pero es una simplificación: el cuerpo se adapta al déficit y la pérdida real rara vez sigue esa aritmética de forma lineal.",
    },
    {
      q: "¿Se quema más peso corriendo o caminando la misma distancia?",
      a: "Corriendo se gasta más por unidad de tiempo, pero a igual distancia la diferencia es menor de lo que suele creerse. Correr 5 km consume algo más que caminarlos, no el doble.",
    },
  ],
  related: ["tmb", "imc", "fcm", "peso-ideal"],
  sources: [
    {
      label: "OMS — Directrices sobre actividad física y hábitos sedentarios",
      url: "https://www.who.int/es/publications/i/item/9789240014886",
    },
    {
      label: "Compendium of Physical Activities",
      url: "https://pacompendium.com/",
    },
  ],
  disclaimer:
    "Herramienta informativa, no constituye consejo médico ni nutricional. Los valores son estimaciones poblacionales con un margen de error individual apreciable. Consulta con un profesional sanitario antes de iniciar un programa de ejercicio, especialmente si tienes alguna condición de salud.",
};
