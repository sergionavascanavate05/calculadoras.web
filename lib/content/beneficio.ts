import type { CalculatorContent } from "@/types";

export const beneficioContent: CalculatorContent = {
  intro:
    "El beneficio es lo que queda de los ingresos después de restar los costes. La dificultad no está en la resta, sino en saber qué costes hay que restar y en qué orden: un negocio puede tener beneficio bruto y estar perdiendo dinero al final del ejercicio.",
  sections: [
    {
      heading: "Los tres niveles de beneficio",
      paragraphs: [
        "Conviene distinguirlos porque cada uno responde a una pregunta distinta sobre la salud del negocio.",
      ],
      table: {
        headers: ["Nivel", "Se calcula como", "Qué te dice"],
        rows: [
          ["Beneficio bruto", "Ingresos − coste directo de lo vendido", "Si el producto o servicio, por sí solo, deja dinero."],
          ["Beneficio operativo", "Beneficio bruto − gastos de estructura", "Si el negocio funciona una vez pagados alquiler, personal y suministros."],
          ["Beneficio neto", "Beneficio operativo − intereses e impuestos", "Lo que queda realmente disponible al final."],
        ],
      },
    },
    {
      heading: "Costes fijos y costes variables",
      paragraphs: [
        "Los costes variables cambian con el volumen de ventas: materia prima, mercancía, comisiones, embalaje, envíos. Los costes fijos se pagan igual vendas mucho o poco: alquiler, cuota de autónomos, seguros, software, salarios base.",
        "Esta distinción es la que permite calcular el punto muerto, que es la información más útil para un negocio pequeño.",
      ],
    },
    {
      heading: "El punto muerto: cuánto necesitas vender para no perder",
      paragraphs: [
        "El punto muerto o umbral de rentabilidad es el volumen de ventas en el que los ingresos igualan exactamente a los costes. Por debajo pierdes dinero; por encima empiezas a ganar.",
        "Se calcula dividiendo los costes fijos entre el margen de contribución unitario, que es el precio de venta menos el coste variable de cada unidad.",
        "Con 2.000 € de costes fijos mensuales, un precio de venta de 50 € y un coste variable de 30 €, el margen de contribución es de 20 € por unidad. El punto muerto son 2.000 ÷ 20 = 100 unidades al mes.",
      ],
      list: [
        "Margen de contribución  =  Precio de venta − Coste variable unitario",
        "Punto muerto (unidades)  =  Costes fijos ÷ Margen de contribución",
        "Punto muerto (euros)  =  Costes fijos ÷ (Margen de contribución ÷ Precio)",
      ],
    },
    {
      heading: "Costes que casi siempre se olvidan",
      paragraphs: [
        "La mayoría de los cálculos de beneficio demasiado optimistas se deben a partidas que no se contabilizan. Las más frecuentes:",
      ],
      list: [
        "Tu propio sueldo. Si no te asignas una retribución, el beneficio aparente incluye tu trabajo gratis.",
        "La cuota de autónomos y las retenciones a cuenta.",
        "Las comisiones de la pasarela de pago y del marketplace, que pueden llevarse un porcentaje relevante de cada venta.",
        "Devoluciones, mermas y producto no vendido.",
        "El coste de captar al cliente: publicidad, promociones y descuentos de captación.",
        "La amortización de equipos y del material que tendrás que reponer.",
      ],
    },
    {
      heading: "Beneficio no es lo mismo que caja",
      paragraphs: [
        "Un negocio puede ser rentable sobre el papel y quedarse sin dinero para pagar. Ocurre cuando facturas a 60 o 90 días pero tienes que pagar a proveedores y nóminas cada mes.",
        "El beneficio mide si la actividad genera valor; la tesorería mide si puedes hacer frente a los pagos cuando vencen. Los dos importan, y muchos cierres de negocios viables se deben al segundo, no al primero.",
      ],
    },
  ],
  faq: [
    {
      q: "¿Cómo se calcula el punto de equilibrio?",
      a: "Divide los costes fijos entre el margen de contribución unitario (precio de venta menos coste variable por unidad). El resultado es el número de unidades que necesitas vender para cubrir todos tus costes.",
    },
    {
      q: "¿Qué diferencia hay entre beneficio bruto y neto?",
      a: "El bruto solo descuenta el coste directo de lo que vendes. El neto descuenta además los gastos de estructura, los intereses y los impuestos. El bruto sirve para fijar precios; el neto dice si el negocio gana dinero.",
    },
    {
      q: "¿Debo incluir mi sueldo como coste?",
      a: "Sí. Si tu trabajo no está contabilizado como coste, el beneficio que calculas no es real: estás financiando el negocio con tu tiempo sin reflejarlo en ninguna parte.",
    },
    {
      q: "¿Por qué tengo beneficio pero no tengo dinero en la cuenta?",
      a: "Suele ser un desfase de tesorería: has facturado pero aún no has cobrado, mientras que los pagos ya han salido. También puede deberse a stock comprado y no vendido, que consume caja sin reducir el beneficio contable.",
    },
  ],
  related: ["margen-comercial", "iva", "porcentaje", "interes-compuesto"],
  sources: [
    {
      label: "Ministerio de Industria y Turismo — Información para pymes",
      url: "https://www.mincotur.gob.es/",
    },
  ],
  disclaimer:
    "Herramienta de cálculo con fines informativos. No sustituye el asesoramiento contable, fiscal ni financiero profesional.",
};
