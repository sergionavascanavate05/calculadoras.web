import type { CalculatorContent } from "@/types";

export const imcContent: CalculatorContent = {
  intro:
    "El Índice de Masa Corporal relaciona tu peso con tu altura y sirve como primer indicador poblacional del rango de peso en que te encuentras. Es útil como orientación, pero tiene limitaciones importantes que conviene conocer antes de sacar conclusiones.",
  sections: [
    {
      heading: "Cómo se calcula",
      paragraphs: [
        "El IMC se obtiene dividiendo el peso en kilogramos entre el cuadrado de la altura en metros: IMC = peso ÷ altura².",
        "Una persona de 70 kg y 1,75 m tiene un IMC de 70 ÷ (1,75 × 1,75) = 22,9.",
      ],
    },
    {
      heading: "Clasificación de la OMS",
      paragraphs: [
        "La Organización Mundial de la Salud establece estos rangos para población adulta:",
      ],
      table: {
        headers: ["IMC", "Clasificación"],
        rows: [
          ["Menos de 18,5", "Bajo peso"],
          ["18,5 – 24,9", "Peso normal"],
          ["25,0 – 29,9", "Sobrepeso"],
          ["30,0 – 34,9", "Obesidad grado I"],
          ["35,0 – 39,9", "Obesidad grado II"],
          ["40,0 o más", "Obesidad grado III"],
        ],
      },
    },
    {
      heading: "Lo que el IMC no mide",
      paragraphs: [
        "Esta es la parte que suele omitirse y la más importante. El IMC solo conoce dos datos, peso y altura, así que hay mucho que no puede distinguir.",
      ],
      list: [
        "No diferencia músculo de grasa. El músculo pesa más que la grasa a igual volumen, por lo que una persona muy musculada puede salir en «sobrepeso» con un porcentaje graso bajo.",
        "No indica dónde se acumula la grasa. La grasa abdominal se asocia a más riesgo cardiovascular que la periférica, y el IMC no lo detecta.",
        "No es válido en el embarazo ni durante la lactancia.",
        "En población infantil y adolescente hay que usar percentiles por edad y sexo, no los rangos de adulto.",
        "En personas mayores pierde precisión por los cambios en la composición corporal y la estatura.",
        "No tiene en cuenta la edad, el sexo ni la constitución ósea.",
      ],
    },
    {
      heading: "Indicadores que complementan al IMC",
      paragraphs: [
        "Si quieres una imagen más completa, estos indicadores aportan información que el IMC no recoge:",
      ],
      list: [
        "Perímetro de cintura: se mide a la altura del ombligo y estima la grasa abdominal, que es la de mayor relevancia metabólica.",
        "Índice cintura-altura: divide el perímetro de cintura entre la altura, ambos en la misma unidad. Es sencillo y muchos estudios lo consideran mejor predictor que el IMC.",
        "Porcentaje de grasa corporal: se estima con bioimpedancia o pliegues cutáneos, aunque la precisión depende mucho del método.",
        "Analítica y tensión arterial: los marcadores clínicos dicen bastante más sobre tu salud que cualquier índice antropométrico.",
      ],
    },
  ],
  faq: [
    {
      q: "¿Cuál es el IMC normal?",
      a: "Según la OMS, en población adulta el rango de peso normal va de 18,5 a 24,9. Por debajo se considera bajo peso y a partir de 25 sobrepeso. Son rangos poblacionales orientativos, no objetivos individuales.",
    },
    {
      q: "¿El IMC sirve si hago mucho deporte?",
      a: "Con reservas. El IMC no distingue masa muscular de grasa, de modo que una persona con mucha musculatura puede clasificarse como sobrepeso teniendo un porcentaje graso bajo. En ese caso son más informativos el perímetro de cintura o una medición de composición corporal.",
    },
    {
      q: "¿Vale el IMC para niños?",
      a: "No con los rangos de adulto. En población infantil y adolescente el IMC se interpreta mediante percentiles según edad y sexo, y debe valorarlo un profesional sanitario.",
    },
    {
      q: "¿Un IMC alto significa que estoy enfermo?",
      a: "No por sí solo. El IMC es un indicador estadístico de cribado, no un diagnóstico. Un valor fuera de rango es un motivo razonable para consultar con un profesional sanitario, que valorará tu caso con más información.",
    },
  ],
  related: ["peso-ideal", "tmb", "calorias", "fcm"],
  sources: [
    {
      label: "Organización Mundial de la Salud — Obesidad y sobrepeso",
      url: "https://www.who.int/es/news-room/fact-sheets/detail/obesity-and-overweight",
    },
    {
      label: "Ministerio de Sanidad — Estrategia NAOS",
      url: "https://www.aesan.gob.es/AECOSAN/web/nutricion/seccion/estrategia_naos.htm",
    },
  ],
  disclaimer:
    "Esta calculadora tiene fines informativos y no constituye consejo médico ni un diagnóstico. El IMC es una herramienta de cribado poblacional con limitaciones conocidas. Consulta con un profesional sanitario antes de tomar decisiones sobre tu salud, tu alimentación o tu actividad física.",
};
