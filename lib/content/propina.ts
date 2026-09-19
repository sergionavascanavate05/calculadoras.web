import type { CalculatorContent } from "@/types";

export const propinaContent: CalculatorContent = {
  intro:
    "Calcular la propina es una multiplicación sencilla, pero la pregunta de fondo (cuánto corresponde dejar) depende enormemente del país. Lo que en España es un gesto opcional, en Estados Unidos forma parte del salario de quien te atiende.",
  sections: [
    {
      heading: "Cómo se calcula",
      list: [
        "Propina  =  importe de la cuenta × porcentaje ÷ 100",
        "Total a pagar  =  cuenta + propina",
        "Atajo mental para el 10 %: desplaza la coma un lugar. Para el 20 %, haz eso y duplica.",
      ],
    },
    {
      heading: "La costumbre en España",
      paragraphs: [
        "En España la propina es voluntaria y no está incorporada a la cuenta. El personal de hostelería cobra un salario regulado por convenio, de modo que la propina complementa pero no sustituye a la retribución.",
        "La práctica habitual es redondear al alza o dejar en torno a un 5-10 % cuando el servicio ha gustado. En un bar es frecuente dejar simplemente las monedas del cambio, y no dejar nada no se considera una ofensa.",
        "En restaurantes de precio alto o con servicio especialmente atento, un 10 % es una cifra bien recibida.",
      ],
    },
    {
      heading: "Diferencias por país",
      paragraphs: [
        "Si viajas, conviene informarse: en algunos países no dejar propina resulta ofensivo y en otros lo ofensivo es dejarla.",
      ],
      table: {
        headers: ["País", "Costumbre habitual", "Notas"],
        rows: [
          ["España", "Opcional, 5-10 %", "Redondear es perfectamente aceptable."],
          ["Estados Unidos", "18-25 %", "Se considera obligatoria de facto: forma parte del ingreso del personal."],
          ["Reino Unido", "10-15 %", "Comprueba si ya figura un cargo por servicio en la cuenta."],
          ["Francia e Italia", "Opcional", "El servicio suele estar incluido; se redondea si acaso."],
          ["Alemania", "5-10 %", "Se dice el importe total al pagar, no se deja en la mesa."],
          ["Japón", "No se deja", "Puede interpretarse como descortesía."],
          ["China", "No se deja", "No forma parte de la costumbre local."],
        ],
      },
    },
    {
      heading: "Dividir la cuenta entre varios",
      paragraphs: [
        "Cuando sois un grupo, lo más limpio es calcular primero la propina sobre el total de la cuenta y después dividir la suma resultante entre el número de comensales.",
        "Si cada uno paga lo suyo, el reparto proporcional consiste en que cada persona añada el mismo porcentaje sobre su parte. Es más justo que dividir la propina a partes iguales cuando los consumos han sido muy dispares.",
      ],
    },
  ],
  faq: [
    {
      q: "¿Cuánta propina se deja en España?",
      a: "Es voluntaria. Lo habitual es redondear o dejar en torno a un 5-10 % si el servicio ha sido bueno. No dejar nada no está mal visto.",
    },
    {
      q: "¿La propina se calcula antes o después del IVA?",
      a: "En España no hay una norma al respecto porque es voluntaria. Lo más extendido es calcularla sobre el total de la cuenta, que es el importe que ves.",
    },
    {
      q: "¿Cómo calculo mentalmente el 10 %?",
      a: "Desplaza la coma decimal un lugar a la izquierda. De 47,50 € el 10 % son 4,75 €. Para el 15 %, suma a esa cifra su mitad; para el 20 %, duplícala.",
    },
    {
      q: "¿Qué hago si la cuenta ya incluye cargo por servicio?",
      a: "En ese caso no es necesario añadir propina adicional. Es habitual en algunos países y en grupos grandes; conviene revisar la cuenta antes de pagar.",
    },
  ],
  related: ["porcentaje", "descuento", "dias-entre-fechas"],
  disclaimer:
    "Las costumbres indicadas son orientativas y pueden variar según la región, el tipo de establecimiento y el momento.",
};
