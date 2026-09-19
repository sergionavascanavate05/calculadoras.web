import type { CalculatorContent } from "@/types";

export const descuentoContent: CalculatorContent = {
  intro:
    "Calcular un descuento parece trivial hasta que aparecen los descuentos encadenados, el IVA o los porcentajes sobre precios ya rebajados. Esta calculadora te da el precio final y el ahorro exacto, y aquí tienes las reglas que evitan los errores más habituales.",
  sections: [
    {
      heading: "La fórmula básica",
      paragraphs: [
        "El importe del descuento es el precio original multiplicado por el porcentaje en decimal. El precio final es la resta, o directamente el precio por el complemento.",
      ],
      list: [
        "Descuento  =  Precio × (porcentaje ÷ 100)",
        "Precio final  =  Precio × (1 − porcentaje ÷ 100)",
        "Un 30 % de descuento sobre 80 € → 80 × 0,70 = 56 €",
      ],
    },
    {
      heading: "Descuentos encadenados: no se suman",
      paragraphs: [
        "Este es el error más extendido. Un 20 % adicional sobre un artículo ya rebajado un 30 % no equivale a un 50 %, sino a un 44 %.",
        "El motivo es que el segundo descuento se aplica sobre el precio ya reducido, no sobre el original. Sobre 100 €: el 30 % deja el precio en 70 €, y el 20 % sobre 70 € son 14 €, de modo que el precio final es 56 € y el descuento efectivo un 44 %.",
        "La forma correcta de encadenarlos es multiplicar los complementos: 0,70 × 0,80 = 0,56, es decir, un 44 % de rebaja total.",
      ],
      table: {
        headers: ["Descuentos encadenados", "Si los sumaras", "Descuento real"],
        rows: [
          ["30 % + 20 %", "50 %", "44 %"],
          ["50 % + 10 %", "60 %", "55 %"],
          ["40 % + 40 %", "80 %", "64 %"],
          ["70 % + 20 %", "90 %", "76 %"],
        ],
      },
    },
    {
      heading: "Descuento e IVA: el orden no altera el resultado",
      paragraphs: [
        "Una duda frecuente es si el descuento se aplica antes o después del IVA. Fiscalmente el descuento reduce la base imponible y el IVA se calcula sobre la base ya rebajada, que es como debe figurar en la factura.",
        "Matemáticamente, sin embargo, el importe final es el mismo en ambos órdenes, porque se trata de dos multiplicaciones: 100 × 0,90 × 1,21 = 108,90 €, igual que 100 × 1,21 × 0,90 = 108,90 €.",
        "Lo que sí cambia es el desglose que debe aparecer en la factura, y ahí solo es correcta la primera opción: base rebajada, y sobre ella la cuota.",
      ],
    },
    {
      heading: "Ofertas tipo 3x2 y 2x1: cuál es el descuento real",
      paragraphs: [
        "Estas promociones se expresan en unidades, no en porcentaje, y conviene traducirlas para poder compararlas con un descuento directo.",
      ],
      table: {
        headers: ["Oferta", "Pagas", "Te llevas", "Descuento equivalente"],
        rows: [
          ["2x1", "1", "2", "50 %"],
          ["3x2", "2", "3", "33,3 %"],
          ["4x3", "3", "4", "25 %"],
          ["La segunda unidad al 50 %", "1,5", "2", "25 %"],
          ["La segunda unidad al 70 %", "1,3", "2", "35 %"],
        ],
      },
    },
    {
      heading: "Cómo saber si una rebaja es real",
      list: [
        "Compara con el precio habitual del producto, no con el precio tachado que muestra la tienda.",
        "En la normativa española de rebajas, el precio anterior de referencia debe ser el más bajo aplicado durante los 30 días previos.",
        "Desconfía de los descuentos muy grandes sobre precios originales inusualmente altos: el porcentaje impresiona, pero el precio final puede no ser competitivo.",
        "Calcula siempre el precio por unidad o por kilo cuando la oferta implica llevarse varias unidades.",
      ],
    },
  ],
  faq: [
    {
      q: "¿Un 30 % y luego un 20 % es un 50 % de descuento?",
      a: "No. Es un 44 %. El segundo descuento se aplica sobre el precio ya rebajado. Para calcularlo, multiplica los complementos: 0,70 × 0,80 = 0,56, es decir, pagas el 56 % del precio original.",
    },
    {
      q: "¿Cómo calculo qué porcentaje de descuento me han hecho?",
      a: "Resta el precio final al original, divide el resultado entre el original y multiplica por 100. De 80 € a 56 €: (80 − 56) ÷ 80 × 100 = 30 %.",
    },
    {
      q: "¿Qué descuento equivale un 3x2?",
      a: "Un 33,3 %. Pagas dos unidades y te llevas tres, de modo que el precio por unidad es dos tercios del original.",
    },
    {
      q: "¿El descuento se aplica antes o después del IVA?",
      a: "En la factura, el descuento reduce la base imponible y el IVA se calcula sobre la base ya rebajada. El importe total a pagar es el mismo en ambos órdenes, pero el desglose correcto es ese.",
    },
  ],
  related: ["porcentaje", "iva", "margen-comercial", "beneficio"],
  sources: [
    {
      label: "Ministerio de Consumo — Información sobre rebajas y promociones",
      url: "https://www.consumo.gob.es/",
    },
  ],
  disclaimer:
    "Herramienta de cálculo con fines informativos. Las condiciones concretas de cada promoción comercial las define el vendedor.",
};
