import type { CalculatorContent } from "@/types";

export const ivaContent: CalculatorContent = {
  intro:
    "El IVA (Impuesto sobre el Valor Añadido) es un impuesto indirecto que grava el consumo y que se repercute al cliente final en casi todas las compras de bienes y servicios en España. Esta calculadora te permite añadir el IVA a un importe base o extraerlo de un precio que ya lo incluye, con los tres tipos vigentes.",
  sections: [
    {
      heading: "Tipos de IVA vigentes en España",
      paragraphs: [
        "La normativa española contempla tres tipos impositivos. Aplicar el tipo equivocado es uno de los errores más frecuentes al emitir una factura, y la diferencia puede ser considerable: sobre 1.000 € de base, la diferencia entre el 21 % y el 10 % son 110 €.",
      ],
      table: {
        headers: ["Tipo", "Porcentaje", "Se aplica principalmente a"],
        rows: [
          ["General", "21 %", "La mayoría de bienes y servicios: electrónica, ropa, combustible, servicios profesionales, muebles, electrodomésticos."],
          ["Reducido", "10 %", "Alimentos en general, agua, transporte de viajeros, hostelería y restauración, vivienda nueva, gafas y lentillas, productos sanitarios."],
          ["Superreducido", "4 %", "Pan común, harinas, leche, queso, huevos, frutas, verduras, legumbres y tubérculos naturales; libros, periódicos y revistas; medicamentos de uso humano; prótesis; vehículos para personas con movilidad reducida; viviendas de protección oficial."],
        ],
      },
    },
    {
      heading: "Cómo se calcula el IVA: las dos fórmulas",
      paragraphs: [
        "Hay dos operaciones distintas y conviene no confundirlas, porque dan resultados diferentes.",
        "Para AÑADIR el IVA a una base imponible, multiplicas la base por el tipo y lo sumas. Con una base de 100 € al 21 %: la cuota es 100 × 0,21 = 21 €, y el total 121 €.",
        "Para EXTRAER el IVA de un precio que ya lo incluye, divides entre 1 más el tipo en decimal. Con un total de 121 € al 21 %: la base es 121 ÷ 1,21 = 100 €, y la cuota 21 €.",
      ],
      list: [
        "Añadir IVA:  Total = Base × (1 + tipo)",
        "Extraer base:  Base = Total ÷ (1 + tipo)",
        "Cuota de IVA:  Total − Base",
      ],
    },
    {
      heading: "El error más común: restar el porcentaje al precio final",
      paragraphs: [
        "Mucha gente calcula la base restando directamente el 21 % al precio con IVA. Es incorrecto y produce una diferencia que Hacienda sí detecta.",
        "Ejemplo con un producto de 100 € IVA incluido al 21 %. El cálculo erróneo sería 100 − 21 % = 79 €. El cálculo correcto es 100 ÷ 1,21 = 82,64 €, con una cuota de 17,36 €. La diferencia es de 3,64 € en una sola factura; multiplicado por un trimestre entero, el desajuste en el modelo 303 es serio.",
        "La razón es que el 21 % se calcula sobre la base, no sobre el total. Al restarlo del total estás aplicando el porcentaje a una cantidad mayor de la que corresponde.",
      ],
    },
    {
      heading: "Recargo de equivalencia",
      paragraphs: [
        "Es un régimen especial obligatorio para comerciantes minoristas que sean personas físicas y vendan a consumidor final sin transformar el producto. El proveedor añade un recargo adicional a la factura, y a cambio el minorista no presenta declaraciones trimestrales de IVA.",
      ],
      table: {
        headers: ["Tipo de IVA", "Recargo adicional", "Carga total"],
        rows: [
          ["21 %", "5,2 %", "26,2 %"],
          ["10 %", "1,4 %", "11,4 %"],
          ["4 %", "0,5 %", "4,5 %"],
          ["Tabaco", "1,75 %", "22,75 %"],
        ],
      },
    },
    {
      heading: "Territorios con impuesto propio",
      paragraphs: [
        "El IVA no se aplica en todo el territorio español. Canarias tiene el IGIC (Impuesto General Indirecto Canario), con un tipo general del 7 %, sensiblemente inferior al IVA peninsular. Ceuta y Melilla aplican el IPSI (Impuesto sobre la Producción, los Servicios y la Importación).",
        "Si facturas a clientes en estos territorios, la operación no lleva IVA peninsular. Conviene confirmar el tratamiento concreto con un asesor, porque depende de si se trata de bienes o servicios y de quién sea el destinatario.",
      ],
    },
  ],
  faq: [
    {
      q: "¿Cómo quito el IVA de un precio?",
      a: "Divide el precio total entre 1 más el tipo en decimal. Para el 21 %, divide entre 1,21; para el 10 %, entre 1,10; para el 4 %, entre 1,04. No restes el porcentaje al precio final: ese cálculo es incorrecto.",
    },
    {
      q: "¿Cuál es el IVA de la hostelería y los restaurantes?",
      a: "Los servicios de hostelería y restauración tributan al tipo reducido del 10 %. Esto incluye tanto el consumo en el local como la comida para llevar servida por un establecimiento de restauración.",
    },
    {
      q: "¿Los libros llevan IVA?",
      a: "Sí, pero al tipo superreducido del 4 %. Se aplica a libros, periódicos y revistas, incluidos los formatos electrónicos, siempre que no consistan fundamentalmente en publicidad ni en contenido de vídeo o música.",
    },
    {
      q: "¿Qué IVA se aplica a los servicios profesionales de un autónomo?",
      a: "Con carácter general, el 21 %. Existen actividades exentas, como determinados servicios sanitarios, educativos o financieros, pero la norma por defecto para un servicio profesional es el tipo general.",
    },
    {
      q: "¿Hay que aplicar IVA al facturar a un cliente de otro país de la UE?",
      a: "Si el cliente es una empresa o profesional dado de alta en el registro VIES, la operación normalmente va sin IVA por inversión del sujeto pasivo, y debes declararla en el modelo 349. Si el cliente es un particular, las reglas cambian según el tipo de servicio. Conviene verificar cada caso con un asesor fiscal.",
    },
    {
      q: "¿El IVA se calcula antes o después de aplicar un descuento?",
      a: "Después. El descuento reduce la base imponible, y el IVA se calcula sobre la base ya descontada. Un producto de 100 € con un 10 % de descuento tiene una base de 90 €, y el IVA al 21 % son 18,90 €.",
    },
  ],
  related: ["iva-inverso", "descuento", "margen-comercial", "beneficio"],
  sources: [
    {
      label: "Agencia Tributaria — Impuesto sobre el Valor Añadido",
      url: "https://sede.agenciatributaria.gob.es/Sede/iva.html",
    },
    {
      label: "BOE — Ley 37/1992 del Impuesto sobre el Valor Añadido",
      url: "https://www.boe.es/buscar/act.php?id=BOE-A-1992-28740",
    },
  ],
  disclaimer:
    "Esta información tiene carácter divulgativo y no constituye asesoramiento fiscal. Los tipos impositivos y su aplicación pueden cambiar por vía normativa. Consulta la Agencia Tributaria o un asesor fiscal para tu caso concreto.",
};
