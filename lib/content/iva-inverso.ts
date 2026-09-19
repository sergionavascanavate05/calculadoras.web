import type { CalculatorContent } from "@/types";

export const ivaInversoContent: CalculatorContent = {
  intro:
    "El IVA inverso consiste en partir de un precio final que ya incluye el impuesto y averiguar cuál era la base imponible y cuánta cuota de IVA contiene. Es el cálculo que necesitas cuando tienes un ticket sin desglosar, cuando fijas un precio de venta al público y quieres saber qué te queda, o cuando cuadras el modelo 303.",
  sections: [
    {
      heading: "La fórmula correcta",
      paragraphs: [
        "Para extraer la base imponible de un importe con IVA incluido, divides entre 1 más el tipo expresado en decimal. La cuota es la diferencia entre el total y la base.",
        "Con un total de 121 € al 21 %: base = 121 ÷ 1,21 = 100 €; cuota = 121 − 100 = 21 €.",
      ],
      list: [
        "Base imponible  =  Total ÷ (1 + tipo)",
        "Cuota de IVA  =  Total − Base imponible",
        "Divisores: 21 % → 1,21  ·  10 % → 1,10  ·  4 % → 1,04",
      ],
    },
    {
      heading: "Por qué restar el porcentaje da un resultado equivocado",
      paragraphs: [
        "El error más extendido es restar el 21 % al precio final. No funciona, porque el porcentaje se calculó en su día sobre la base, que es una cantidad menor que el total.",
        "Sobre un precio final de 121 €: restar el 21 % daría 95,59 €, pero la base real es 100 €. El desfase es de más de cuatro euros en una sola operación.",
        "Cuanto mayor es el importe, mayor es el error acumulado. En un trimestre con cientos de facturas, este fallo produce una diferencia que no cuadra con los libros registro.",
      ],
      table: {
        headers: ["Precio final", "Tipo", "Base correcta", "Cuota", "Si restas el porcentaje"],
        rows: [
          ["121,00 €", "21 %", "100,00 €", "21,00 €", "95,59 € (incorrecto)"],
          ["110,00 €", "10 %", "100,00 €", "10,00 €", "99,00 € (incorrecto)"],
          ["104,00 €", "4 %", "100,00 €", "4,00 €", "99,84 € (incorrecto)"],
        ],
      },
    },
    {
      heading: "Cuándo vas a necesitarlo",
      list: [
        "Fijar un precio de venta al público redondo (por ejemplo, 49,95 €) y saber qué base debes declarar.",
        "Reconstruir el desglose de un ticket simplificado que solo muestra el total.",
        "Calcular el IVA soportado deducible de un gasto del que solo conservas el importe final.",
        "Comparar el margen real de dos productos con tipos de IVA distintos.",
        "Cuadrar la liquidación trimestral cuando los cobros se registraron con el impuesto incluido.",
      ],
    },
    {
      heading: "Precios psicológicos y base imponible",
      paragraphs: [
        "Si vendes a consumidor final, lo habitual es fijar el precio con IVA incluido y en cifras atractivas. El problema es que esas cifras redondas producen bases imponibles con muchos decimales.",
        "Un producto a 19,99 € con IVA del 21 % tiene una base de 16,52 € y una cuota de 3,47 €. Si calculas tu objetivo de margen sobre 19,99 € en lugar de sobre 16,52 €, estás sobrestimando tu beneficio en un 21 %.",
      ],
    },
  ],
  faq: [
    {
      q: "¿Cómo saco la base imponible de un precio con IVA?",
      a: "Divide el precio total entre 1,21 si el tipo es del 21 %, entre 1,10 si es del 10 % o entre 1,04 si es del 4 %. El resultado es la base imponible; la diferencia con el total es la cuota de IVA.",
    },
    {
      q: "¿Cómo sé qué tipo de IVA llevaba un ticket sin desglosar?",
      a: "Depende del tipo de producto o servicio. La hostelería y la alimentación general van al 10 %; el pan, la leche, los huevos, la fruta, los libros y los medicamentos al 4 %; casi todo lo demás al 21 %. Si un ticket mezcla productos con tipos distintos, hay que separarlos por líneas.",
    },
    {
      q: "¿Puedo deducir el IVA de un ticket simplificado?",
      a: "Para deducir el IVA soportado necesitas una factura completa con tus datos fiscales y el desglose de base y cuota. Un ticket simplificado sin esos datos no habilita la deducción, aunque el gasto sí pueda ser deducible en el IRPF o en el Impuesto sobre Sociedades.",
    },
    {
      q: "¿El cálculo inverso es igual para el IGIC canario?",
      a: "El método es idéntico, solo cambia el divisor. Para el tipo general del IGIC del 7 %, dividirías entre 1,07.",
    },
  ],
  related: ["iva", "margen-comercial", "beneficio", "descuento"],
  sources: [
    {
      label: "Agencia Tributaria — Impuesto sobre el Valor Añadido",
      url: "https://sede.agenciatributaria.gob.es/Sede/iva.html",
    },
  ],
  disclaimer:
    "Información divulgativa, no constituye asesoramiento fiscal. Consulta la Agencia Tributaria o un asesor para tu caso concreto.",
};
