import type { CalculatorContent } from "@/types";

export const inflacionContent: CalculatorContent = {
  intro:
    "La inflación es la subida generalizada de los precios, y su efecto práctico es que el mismo dinero compra cada año un poco menos. Esta calculadora traduce ese efecto a cifras: cuánto poder adquisitivo pierde un importe con el paso del tiempo y qué cantidad necesitarías para mantener el mismo nivel de compra.",
  sections: [
    {
      heading: "Cómo se calcula la pérdida de poder adquisitivo",
      paragraphs: [
        "El valor futuro de un importe descontando la inflación se obtiene con: Valor real = Importe ÷ (1 + inflación)ⁿ, donde n es el número de años.",
        "Con una inflación media del 3 % anual, 1.000 € guardados bajo el colchón equivalen a unos 970 € de poder de compra al cabo de un año, a unos 863 € a los cinco años y a unos 744 € a los diez.",
        "Visto al revés: para comprar dentro de 10 años lo que hoy cuesta 1.000 €, necesitarías unos 1.344 €.",
      ],
    },
    {
      heading: "Qué es el IPC y quién lo mide",
      paragraphs: [
        "En España la inflación se mide a través del Índice de Precios de Consumo (IPC), que elabora mensualmente el Instituto Nacional de Estadística.",
        "El IPC sigue el precio de una cesta de bienes y servicios representativa del consumo de los hogares, con una ponderación que refleja cuánto pesa cada categoría en el gasto medio. La vivienda, la alimentación y el transporte tienen un peso alto; otras partidas, mucho menor.",
        "Por eso tu inflación personal puede diferir bastante de la oficial: si destinas una proporción de tu renta al alquiler muy superior a la media, una subida fuerte de los alquileres te afecta más de lo que sugiere el dato general.",
      ],
    },
    {
      heading: "Inflación general e inflación subyacente",
      table: {
        headers: ["Indicador", "Qué incluye", "Para qué sirve"],
        rows: [
          ["IPC general", "Toda la cesta, incluidos alimentos frescos y energía.", "Refleja lo que realmente paga el consumidor cada mes."],
          ["Inflación subyacente", "Excluye alimentos no elaborados y productos energéticos.", "Elimina los componentes más volátiles y muestra mejor la tendencia de fondo."],
          ["IPC armonizado (IPCA)", "Metodología común europea.", "Permite comparar entre países de la UE y es la referencia del BCE."],
        ],
      },
    },
    {
      heading: "Rentabilidad nominal y rentabilidad real",
      paragraphs: [
        "Esta distinción es la más útil en la práctica. La rentabilidad nominal es la que anuncia el producto; la real es la que queda después de descontar la inflación.",
        "Un depósito que rinde un 2 % anual con una inflación del 3 % tiene una rentabilidad real negativa: estás perdiendo poder adquisitivo aunque el saldo de tu cuenta suba.",
        "La aproximación rápida es restar: rentabilidad real ≈ rentabilidad nominal − inflación. La fórmula exacta es (1 + nominal) ÷ (1 + inflación) − 1.",
      ],
    },
    {
      heading: "Qué se ve afectado por la inflación",
      list: [
        "El ahorro en cuenta corriente sin remunerar: pierde valor real cada año de forma silenciosa.",
        "Los salarios: si la subida anual es inferior al IPC, el poder adquisitivo cae aunque el nominal suba.",
        "Las pensiones: en España están vinculadas a la evolución del IPC por normativa.",
        "Los alquileres: las actualizaciones de renta suelen referenciarse a un índice oficial.",
        "Las deudas a tipo fijo: la inflación juega a favor del deudor, porque devuelve euros que valen menos.",
      ],
    },
  ],
  faq: [
    {
      q: "¿Cuánto vale hoy el dinero de hace 20 años?",
      a: "Depende de la inflación acumulada del periodo. Con una media del 2,5 % anual durante 20 años, 1.000 € de entonces equivaldrían a unos 1.639 € de hoy para mantener el mismo poder de compra. Para el dato exacto puedes usar el actualizador de rentas del INE.",
    },
    {
      q: "¿La deflación es buena?",
      a: "Una caída generalizada y sostenida de los precios suele ser un síntoma problemático: si los consumidores esperan que todo esté más barato mañana, retrasan sus compras, la demanda cae y con ella la actividad y el empleo. Además encarece las deudas en términos reales.",
    },
    {
      q: "¿Por qué noto más subida de precios que la que dice el IPC?",
      a: "Porque el IPC es una media ponderada del consumo de un hogar representativo, y tu cesta concreta puede ser distinta. Si gastas mucho más que la media en las partidas que más han subido, tu inflación personal será superior a la oficial.",
    },
    {
      q: "¿Cómo protejo mis ahorros de la inflación?",
      a: "No existe una respuesta universal ni sin riesgo. En términos generales, el dinero parado en una cuenta sin remuneración pierde valor real de forma garantizada, mientras que cualquier alternativa implica asumir algún tipo de riesgo. Es una decisión que conviene consultar con un asesor financiero según tu situación.",
    },
  ],
  related: ["interes-compuesto", "porcentaje", "hipoteca"],
  sources: [
    {
      label: "INE — Índice de Precios de Consumo",
      url: "https://www.ine.es/dyngs/INEbase/es/operacion.htm?c=Estadistica_C&cid=1254736176802",
    },
    {
      label: "INE — Actualizador de rentas con el IPC",
      url: "https://www.ine.es/calcula/",
    },
  ],
  disclaimer:
    "Herramienta divulgativa. Los porcentajes de los ejemplos son hipotéticos y no reflejan la inflación de ningún periodo concreto. Para datos oficiales, consulta el INE.",
};
