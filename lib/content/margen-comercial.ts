import type { CalculatorContent } from "@/types";

export const margenComercialContent: CalculatorContent = {
  intro:
    "El margen comercial mide cuánto ganas sobre lo que vendes. Es un indicador sencillo en apariencia, pero confundirlo con el marcaje sobre coste es uno de los errores que más dinero cuesta a los pequeños negocios: llevan años creyendo que ganan un 40 % cuando en realidad ganan un 28,6 %.",
  sections: [
    {
      heading: "Margen y marcaje no son lo mismo",
      paragraphs: [
        "El margen se calcula sobre el PRECIO DE VENTA. El marcaje (o markup) se calcula sobre el COSTE. Con las mismas cifras, los dos porcentajes son distintos.",
        "Un producto que cuesta 70 € y se vende a 100 € tiene un beneficio de 30 €. El margen es 30 ÷ 100 = 30 %. El marcaje es 30 ÷ 70 = 42,9 %. Ambos son correctos, pero responden a preguntas diferentes.",
      ],
      list: [
        "Margen (%)  =  (Precio − Coste) ÷ Precio × 100",
        "Marcaje (%)  =  (Precio − Coste) ÷ Coste × 100",
        "Precio a partir del margen deseado:  Precio = Coste ÷ (1 − margen)",
      ],
    },
    {
      heading: "El error que arruina el cálculo del precio",
      paragraphs: [
        "Si quieres un margen del 40 % y multiplicas el coste por 1,40, no obtienes un margen del 40 %: obtienes un 28,6 %.",
        "Con un coste de 60 €, multiplicar por 1,40 da 84 €. El beneficio es 24 €, y 24 ÷ 84 = 28,6 %. Para lograr un margen real del 40 % tendrías que dividir: 60 ÷ 0,60 = 100 €.",
        "La diferencia entre 84 € y 100 € es de un 19 % del precio de venta. En un negocio con miles de operaciones, este fallo de método es la diferencia entre ganar dinero y no ganarlo.",
      ],
      table: {
        headers: ["Margen deseado", "Divide el coste entre", "Coste 60 € → precio"],
        rows: [
          ["20 %", "0,80", "75,00 €"],
          ["30 %", "0,70", "85,71 €"],
          ["40 %", "0,60", "100,00 €"],
          ["50 %", "0,50", "120,00 €"],
          ["60 %", "0,40", "150,00 €"],
        ],
      },
    },
    {
      heading: "Margen bruto y margen neto",
      paragraphs: [
        "El margen bruto solo descuenta el coste directo del producto. El margen neto descuenta además todos los gastos de estructura: alquiler, personal, suministros, comisiones de pasarela de pago, transporte, devoluciones e impuestos.",
        "Un comercio con un margen bruto del 45 % puede acabar con un margen neto del 6 %. Por eso el margen bruto sirve para fijar precios, pero solo el neto dice si el negocio es viable.",
      ],
    },
    {
      heading: "Trabaja siempre sobre importes sin IVA",
      paragraphs: [
        "El IVA no es tuyo: lo recaudas para Hacienda. Calcular el margen sobre precios con IVA incluido infla artificialmente el resultado.",
        "Si vendes a 121 € con IVA y el producto te cuesta 70 € sin IVA, tu ingreso real es la base de 100 €, no 121 €. El margen correcto es 30 %, no 42 %.",
      ],
    },
  ],
  faq: [
    {
      q: "¿Cuál es la diferencia entre margen y markup?",
      a: "El margen se calcula sobre el precio de venta y el markup sobre el coste. Un mismo producto con 30 € de beneficio sobre 70 € de coste y 100 € de precio tiene un 30 % de margen y un 42,9 % de markup.",
    },
    {
      q: "¿Cómo calculo el precio de venta para un margen concreto?",
      a: "Divide el coste entre (1 − margen en decimal). Para un margen del 35 % con un coste de 50 €: 50 ÷ 0,65 = 76,92 €. No multipliques por 1,35: eso daría un margen del 25,9 %.",
    },
    {
      q: "¿Qué margen es razonable?",
      a: "Depende por completo del sector. La alimentación y la distribución trabajan con márgenes bajos y mucha rotación; los servicios profesionales y los productos digitales, con márgenes altos y poco volumen. La referencia útil es la de tu propio sector, no una cifra general.",
    },
    {
      q: "¿El margen se calcula con o sin IVA?",
      a: "Siempre sin IVA, tanto en el coste como en el precio de venta. El IVA es un impuesto que recaudas para Hacienda y no forma parte de tu ingreso.",
    },
  ],
  related: ["beneficio", "iva", "descuento", "porcentaje"],
  sources: [
    {
      label: "Ministerio de Industria y Turismo — Información para pymes",
      url: "https://www.mincotur.gob.es/",
    },
  ],
  disclaimer:
    "Herramienta de cálculo con fines informativos. No sustituye el asesoramiento contable o fiscal para tu negocio.",
};
