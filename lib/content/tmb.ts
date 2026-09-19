import type { CalculatorContent } from "@/types";

export const tmbContent: CalculatorContent = {
  intro:
    "La tasa metabólica basal es la energía que tu cuerpo gasta en reposo absoluto solo para mantenerte vivo: respirar, bombear sangre, mantener la temperatura y sostener la actividad celular. Es la base sobre la que se calcula tu gasto energético diario total.",
  sections: [
    {
      heading: "La ecuación de Mifflin-St Jeor",
      paragraphs: [
        "Esta calculadora emplea Mifflin-St Jeor, la ecuación que las revisiones de la Academy of Nutrition and Dietetics señalan como la más precisa en población general sin obesidad severa.",
        "Hombres: TMB = (10 × peso en kg) + (6,25 × altura en cm) − (5 × edad) + 5",
        "Mujeres: TMB = (10 × peso en kg) + (6,25 × altura en cm) − (5 × edad) − 161",
      ],
    },
    {
      heading: "Del metabolismo basal al gasto total",
      paragraphs: [
        "La TMB es solo el punto de partida. Tu gasto real incluye además todo lo que haces durante el día, y se estima multiplicando la TMB por un factor de actividad.",
      ],
      table: {
        headers: ["Nivel de actividad", "Factor", "Perfil"],
        rows: [
          ["Sedentario", "1,2", "Trabajo de oficina y poco o ningún ejercicio."],
          ["Ligero", "1,375", "Ejercicio suave 1-3 días por semana."],
          ["Moderado", "1,55", "Ejercicio 3-5 días por semana."],
          ["Alto", "1,725", "Ejercicio intenso 6-7 días por semana."],
          ["Muy alto", "1,9", "Trabajo físico exigente o dos sesiones diarias."],
        ],
      },
    },
    {
      heading: "Los cuatro componentes del gasto diario",
      list: [
        "Metabolismo basal: en torno al 60-70 % del total en una persona sedentaria. Es con diferencia el componente mayor.",
        "Efecto térmico de los alimentos: la energía empleada en digerir y absorber lo que comes, alrededor del 10 %.",
        "Actividad física programada: el ejercicio que haces de forma deliberada.",
        "Termogénesis por actividad no asociada al ejercicio: caminar, gesticular, mantener la postura, subir escaleras. Varía enormemente entre personas y explica buena parte de las diferencias individuales.",
      ],
    },
    {
      heading: "Qué influye en tu metabolismo basal",
      paragraphs: [
        "La masa muscular es el factor modificable más relevante: el tejido muscular consume energía en reposo, mientras que el tejido graso consume mucha menos.",
        "La edad reduce la TMB de forma progresiva, en buena parte por la pérdida de masa muscular asociada. El sexo influye por las diferencias medias de composición corporal. La genética y la función tiroidea también intervienen.",
        "Los déficits calóricos prolongados y severos pueden reducir el gasto por adaptación metabólica, lo que explica el estancamiento frecuente en dietas muy restrictivas mantenidas en el tiempo.",
      ],
    },
    {
      heading: "Cómo interpretar el resultado",
      paragraphs: [
        "Las ecuaciones predictivas son estimaciones estadísticas basadas en promedios poblacionales. Para una persona concreta, el margen de error habitual se sitúa en torno a un 10 %, y puede ser mayor en casos atípicos.",
        "Lo sensato es usar la cifra como punto de partida, no como verdad absoluta: obsérvate durante dos o tres semanas y ajusta según lo que realmente ocurra con tu peso y tu energía.",
      ],
    },
  ],
  faq: [
    {
      q: "¿Qué diferencia hay entre TMB y gasto calórico total?",
      a: "La TMB es lo que gastas en reposo absoluto. El gasto total añade la digestión, la actividad física y todos los movimientos cotidianos. El gasto total siempre es mayor que la TMB.",
    },
    {
      q: "¿Qué ecuación es más precisa, Harris-Benedict o Mifflin-St Jeor?",
      a: "Mifflin-St Jeor se considera generalmente más precisa en población actual. La ecuación de Harris-Benedict original data de 1919 y tiende a sobrestimar en muchos perfiles, aunque existen versiones revisadas.",
    },
    {
      q: "¿Puedo aumentar mi metabolismo basal?",
      a: "El factor modificable más relevante es la masa muscular, ya que el tejido muscular consume energía en reposo. El entrenamiento de fuerza y una ingesta proteica adecuada son las vías con más respaldo, aunque el efecto es gradual y moderado.",
    },
    {
      q: "¿Debo comer menos calorías que mi TMB para adelgazar?",
      a: "No es lo recomendable. El déficit debe plantearse sobre el gasto total, no sobre la TMB. Comer por debajo del metabolismo basal de forma sostenida puede comprometer el aporte de nutrientes y no es aconsejable sin supervisión profesional.",
    },
  ],
  related: ["calorias", "imc", "peso-ideal", "fcm"],
  sources: [
    {
      label: "Mifflin MD et al. — A new predictive equation for resting energy expenditure (Am J Clin Nutr, 1990)",
      url: "https://pubmed.ncbi.nlm.nih.gov/2305711/",
    },
    {
      label: "AESAN — Recomendaciones de alimentación saludable",
      url: "https://www.aesan.gob.es/AECOSAN/web/nutricion/seccion/nutricion.htm",
    },
  ],
  disclaimer:
    "Herramienta informativa, no constituye consejo médico ni nutricional. Los resultados son estimaciones estadísticas con un margen de error individual apreciable. Consulta con un profesional sanitario o un dietista-nutricionista antes de modificar tu alimentación, especialmente si tienes alguna condición de salud.",
};
