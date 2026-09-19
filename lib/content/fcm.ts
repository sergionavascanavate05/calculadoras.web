import type { CalculatorContent } from "@/types";

export const fcmContent: CalculatorContent = {
  intro:
    "Tu frecuencia cardíaca máxima es el techo teórico de pulsaciones de tu corazón, y sirve para delimitar las zonas de entrenamiento. Entrenar por zonas evita el error más común en resistencia: ir siempre a una intensidad intermedia que ni es suficientemente suave para acumular volumen ni suficientemente dura para mejorar.",
  sections: [
    {
      heading: "Dos fórmulas, y por qué mostramos las dos",
      paragraphs: [
        "La fórmula clásica de Fox es 220 menos la edad. Es la más conocida por su simplicidad, pero se popularizó sin una validación sólida y su margen de error individual es amplio: la desviación típica ronda los 10-12 latidos.",
        "La fórmula de Tanaka, 208 menos 0,7 por la edad, procede de un metaanálisis posterior y se ajusta mejor en población adulta, especialmente a partir de los 40 años. Esta calculadora usa Tanaka para las zonas y muestra Fox como referencia comparativa.",
        "A los 50 años, Fox estima 170 ppm y Tanaka 173. A los 25, Fox da 195 y Tanaka 190,5. La diferencia crece en los extremos de edad.",
      ],
    },
    {
      heading: "Las cinco zonas de entrenamiento",
      table: {
        headers: ["Zona", "% de FC máxima", "Sensación", "Para qué sirve"],
        rows: [
          ["Z1 · Recuperación", "50-60 %", "Muy cómoda", "Calentamiento, vuelta a la calma, recuperación activa."],
          ["Z2 · Base aeróbica", "60-70 %", "Puedes conversar", "Resistencia de fondo y eficiencia metabólica. Es donde debería estar la mayor parte del volumen."],
          ["Z3 · Aeróbico", "70-80 %", "Hablar cuesta", "Capacidad aeróbica y ritmo sostenido."],
          ["Z4 · Umbral", "80-90 %", "Frases cortas", "Umbral anaeróbico y tolerancia al esfuerzo."],
          ["Z5 · Máximo", "90-100 %", "No puedes hablar", "Potencia máxima. Solo en intervalos breves."],
        ],
      },
    },
    {
      heading: "El método de Karvonen",
      paragraphs: [
        "Si introduces tu frecuencia cardíaca en reposo, las zonas se calculan por el método de Karvonen, que trabaja sobre la frecuencia de reserva en lugar de sobre la máxima directamente.",
        "La frecuencia de reserva es la diferencia entre tu máxima y tu reposo, y refleja mejor tu condición física real: una persona entrenada tiene un pulso en reposo más bajo y, por tanto, un margen de trabajo mayor.",
        "La fórmula es: zona = reposo + (máxima − reposo) × porcentaje. Para medir tu reposo, tómate el pulso nada más despertar, antes de levantarte de la cama, varios días seguidos y promedia.",
      ],
    },
    {
      heading: "El error de entrenar siempre en zona 3",
      paragraphs: [
        "Muchos corredores y ciclistas aficionados hacen todos sus entrenamientos a una intensidad media: demasiado fuerte para ser rodaje suave y demasiado suave para ser trabajo de calidad.",
        "El resultado es fatiga acumulada sin la adaptación que produciría un entrenamiento bien distribuido. La mayoría de planes estructurados concentran gran parte del volumen en zona 2 y reservan una fracción menor para trabajo intenso.",
        "En la práctica, si sales a rodar y no puedes mantener una conversación, probablemente estés por encima de la zona en la que deberías acumular la mayor parte de tus kilómetros.",
      ],
    },
  ],
  faq: [
    {
      q: "¿Es fiable la fórmula 220 menos la edad?",
      a: "Es orientativa. Su margen de error individual es amplio, con una desviación típica de unos 10-12 latidos, y tiende a desviarse más en personas jóvenes y mayores. La fórmula de Tanaka se ajusta algo mejor, pero tampoco sustituye a una prueba de esfuerzo.",
    },
    {
      q: "¿Cómo conozco mi frecuencia máxima real?",
      a: "La única forma precisa es una prueba de esfuerzo máxima supervisada por personal sanitario. Las fórmulas son estimaciones estadísticas basadas en promedios de población.",
    },
    {
      q: "¿Es peligroso llegar a mi frecuencia máxima?",
      a: "En personas sanas, alcanzar intensidades altas de forma puntual y controlada forma parte del entrenamiento habitual. Si tienes factores de riesgo cardiovascular, antecedentes familiares o llevas tiempo inactivo, consulta con un profesional sanitario antes de entrenar a alta intensidad.",
    },
    {
      q: "¿Por qué mi pulso es más alto algunos días al mismo ritmo?",
      a: "Influyen el calor, la deshidratación, el descanso, el estrés, la cafeína, la altitud y la fatiga acumulada. Es normal que la frecuencia varíe a igual esfuerzo; una desviación sostenida al alza puede indicar fatiga o falta de recuperación.",
    },
  ],
  related: ["calorias", "tmb", "imc"],
  sources: [
    {
      label: "Tanaka H, Monahan KD, Seals DR — Age-predicted maximal heart rate revisited (J Am Coll Cardiol, 2001)",
      url: "https://pubmed.ncbi.nlm.nih.gov/11153730/",
    },
    {
      label: "OMS — Directrices sobre actividad física",
      url: "https://www.who.int/es/publications/i/item/9789240014886",
    },
  ],
  disclaimer:
    "Herramienta informativa, no constituye consejo médico. Los valores son estimaciones estadísticas y no sustituyen a una prueba de esfuerzo. Consulta con un profesional sanitario antes de iniciar o intensificar un programa de entrenamiento, especialmente si tienes factores de riesgo cardiovascular.",
};
