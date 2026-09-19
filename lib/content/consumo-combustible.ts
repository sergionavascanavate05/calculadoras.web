import type { CalculatorContent } from "@/types";

export const consumoCombustibleContent: CalculatorContent = {
  intro:
    "El ordenador de a bordo suele ser optimista. Esta calculadora te da el consumo real de tu coche a partir de dos datos que no engañan: los kilómetros recorridos y los litros que has repostado para cubrirlos, con el coste por kilómetro incluido.",
  sections: [
    {
      heading: "Cómo medirlo bien: el método del depósito lleno",
      paragraphs: [
        "Para que el dato sea fiable, el depósito debe estar igual de lleno al principio y al final del tramo medido. El procedimiento es este:",
      ],
      list: [
        "Llena el depósito hasta que el surtidor corte solo. No fuerces litros extra: falsean la medición.",
        "Pon a cero el cuentakilómetros parcial.",
        "Conduce con normalidad. Cuanto más largo sea el tramo, más fiable será el resultado; a partir de 300 km la medición es razonablemente sólida.",
        "Vuelve a llenar en la misma gasolinera y, si puedes, en el mismo surtidor, otra vez hasta el corte automático.",
        "Los litros de ese segundo repostaje son exactamente los que has consumido en los kilómetros del parcial.",
      ],
    },
    {
      heading: "Las fórmulas",
      list: [
        "Consumo (L/100 km)  =  litros ÷ kilómetros × 100",
        "Autonomía (km/L)  =  kilómetros ÷ litros",
        "Coste por kilómetro  =  (litros × precio por litro) ÷ kilómetros",
      ],
    },
    {
      heading: "Por qué el ordenador de a bordo marca menos",
      paragraphs: [
        "Los sistemas de a bordo estiman el consumo a partir del caudal de los inyectores, no midiendo el combustible que realmente sale del depósito. Es una estimación indirecta y acumula desviaciones.",
        "Es habitual que marquen entre un 3 % y un 8 % por debajo del consumo real, y la desviación tiende a ser mayor en trayectos cortos y en conducción urbana. Medir con depósitos llenos elimina ese sesgo.",
      ],
    },
    {
      heading: "Qué dispara el consumo",
      table: {
        headers: ["Factor", "Efecto aproximado", "Comentario"],
        rows: [
          ["Velocidad alta", "Notable por encima de 110-120 km/h", "La resistencia aerodinámica crece con el cuadrado de la velocidad."],
          ["Presión de neumáticos baja", "Apreciable", "Revisarla en frío una vez al mes es la medida más rentable."],
          ["Baca o cofre en el techo", "Considerable en autopista", "Desmóntalos cuando no los uses; penalizan incluso vacíos."],
          ["Aire acondicionado", "Moderado", "Más acusado en ciudad que en carretera."],
          ["Trayectos cortos en frío", "Elevado", "El motor consume bastante más hasta alcanzar temperatura."],
          ["Peso extra", "Proporcional", "Cada carga innecesaria suma consumo."],
        ],
      },
    },
    {
      heading: "Consumo homologado y consumo real",
      paragraphs: [
        "El consumo que figura en la ficha técnica se obtiene en el ciclo de homologación WLTP, un protocolo de laboratorio estandarizado que permite comparar modelos entre sí en igualdad de condiciones.",
        "No pretende predecir tu consumo particular, que depende de tu recorrido, tu estilo de conducción, la orografía, la carga y la climatología. Una diferencia entre el dato homologado y tu medición real es normal y no indica avería.",
      ],
    },
  ],
  faq: [
    {
      q: "¿Cómo se calculan los litros a los 100 km?",
      a: "Divide los litros consumidos entre los kilómetros recorridos y multiplica por 100. Si has gastado 32,5 litros en 520 km: 32,5 ÷ 520 × 100 = 6,25 L/100 km.",
    },
    {
      q: "¿Por qué mi consumo real es mayor que el homologado?",
      a: "El dato homologado se obtiene en un ciclo de laboratorio estandarizado que no reproduce tu uso concreto. Las diferencias con el consumo real son habituales y dependen del trayecto, la conducción y las condiciones.",
    },
    {
      q: "¿Cuántos kilómetros necesito para que la medición sea fiable?",
      a: "Cuantos más, mejor. Con menos de 100 km, un pequeño error al llenar el depósito distorsiona mucho el resultado. A partir de 300 km la medición es bastante estable.",
    },
    {
      q: "¿Sirve este método para un coche eléctrico?",
      a: "El principio es el mismo pero la unidad cambia: se mide en kWh cada 100 km. Necesitarías la energía cargada en lugar de los litros repostados.",
    },
  ],
  related: ["porcentaje", "descuento", "dias-entre-fechas"],
  sources: [
    {
      label: "IDAE — Consumo de carburante y emisiones de vehículos",
      url: "https://coches.idae.es/",
    },
  ],
  disclaimer:
    "Los efectos indicados en la tabla son orientativos y varían según el vehículo y las condiciones de uso.",
};
