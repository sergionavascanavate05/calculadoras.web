export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  /** Fecha ISO de publicación. */
  date: string;
  category: string;
  readingTime: string;
  /** Secciones del artículo; el primer nivel es un H2. */
  sections: { heading: string; paragraphs: string[] }[];
  /** Calculadoras relacionadas, por su id del registro. */
  related: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "entender-tu-nomina-en-espana",
    title: "Cómo entender tu nómina en España",
    description:
      "Qué significa cada línea de tu nómina, por qué el bruto no es lo que cobras y cómo comprobar que las retenciones son correctas.",
    date: "2026-03-12",
    category: "Finanzas",
    readingTime: "6 min",
    sections: [
      {
        heading: "Devengos: lo que has ganado",
        paragraphs: [
          "La primera mitad de la nómina son los devengos, es decir, todo lo que la empresa te reconoce por el periodo. Incluye el salario base fijado por convenio, los complementos (antigüedad, puesto, idiomas, disponibilidad), las horas extra y la parte proporcional de las pagas extraordinarias si las tienes prorrateadas.",
          "La suma de todos los devengos es tu salario bruto del mes. Es la cifra que aparece en las ofertas de empleo y la que casi nadie cobra íntegra.",
          "Conviene distinguir los conceptos salariales de los no salariales. Las dietas, el kilometraje o el plus de transporte compensan un gasto y, hasta ciertos límites, no cotizan ni tributan igual que el salario.",
        ],
      },
      {
        heading: "Deducciones: lo que se resta",
        paragraphs: [
          "De los devengos se restan dos bloques. El primero son tus cotizaciones a la Seguridad Social: contingencias comunes, desempleo, formación profesional y el mecanismo de equidad intergeneracional. Son porcentajes fijados por normativa y se aplican sobre tu base de cotización.",
          "El segundo es la retención de IRPF, que es un anticipo a cuenta de tu declaración de la renta. Aquí está la diferencia clave: las cotizaciones son un porcentaje prácticamente invariable, pero la retención de IRPF es personal y depende de tu salario, tu situación familiar, tus hijos, tu grado de discapacidad y tu tipo de contrato.",
          "Por eso dos personas con el mismo bruto pueden cobrar cantidades netas distintas. No es un error de la empresa: es que su situación personal difiere.",
        ],
      },
      {
        heading: "Por qué la retención puede jugarte una mala pasada",
        paragraphs: [
          "La retención de IRPF es una estimación de lo que te corresponderá pagar. Si es demasiado baja, cobras más cada mes pero es probable que la declaración te salga a pagar. Si es demasiado alta, cobras menos pero previsiblemente te devolverán.",
          "Ninguna de las dos situaciones es un castigo ni un premio: es un ajuste. Puedes pedir a tu empresa que aumente voluntariamente tu retención si prefieres evitar sustos en junio.",
          "Un cambio de circunstancias durante el año (un ascenso, un segundo pagador, el nacimiento de un hijo) altera el cálculo. Comunicar esos cambios a la empresa mediante el modelo 145 evita desajustes.",
        ],
      },
      {
        heading: "El coste real para la empresa",
        paragraphs: [
          "Tu bruto no es lo que le cuestas a la empresa. Además de tu salario, la empresa aporta su propia cuota a la Seguridad Social, que es sustancialmente mayor que la tuya y cubre contingencias comunes, desempleo, formación, FOGASA y accidentes de trabajo.",
          "Ese dato explica por qué las negociaciones salariales a veces parecen encalladas: un aumento de bruto tiene para la empresa un coste bastante superior al incremento que tú ves en la nómina.",
        ],
      },
      {
        heading: "Tres comprobaciones que deberías hacer",
        paragraphs: [
          "Primera: verifica que tu base de cotización se corresponde con tu salario real. Es la cifra sobre la que se calculará tu futura pensión y tu prestación por desempleo, así que un error aquí tiene consecuencias a largo plazo.",
          "Segunda: comprueba que el grupo de cotización coincide con tu categoría profesional real. Un grupo inferior al que te corresponde perjudica tus prestaciones.",
          "Tercera: revisa una vez al año tu vida laboral en la sede electrónica de la Seguridad Social. Es gratuito y es la única forma de detectar periodos no cotizados antes de que sea tarde.",
        ],
      },
    ],
    related: ["iva", "porcentaje", "interes-compuesto"],
  },
  {
    slug: "que-comprobar-antes-de-firmar-una-hipoteca",
    title: "Qué comprobar antes de firmar una hipoteca",
    description:
      "La lista de verificación que conviene repasar antes de la firma: documentación obligatoria, cláusulas sensibles y las preguntas que debes hacer al banco.",
    date: "2026-05-28",
    category: "Finanzas",
    readingTime: "7 min",
    sections: [
      {
        heading: "La documentación que la ley te garantiza",
        paragraphs: [
          "Desde la Ley 5/2019 reguladora de los contratos de crédito inmobiliario, la entidad está obligada a entregarte una documentación precontractual con al menos diez días naturales de antelación a la firma.",
          "El documento central es la FEIN (Ficha Europea de Información Normalizada), que tiene carácter de oferta vinculante. Junto a ella recibirás la FiAE, con las cláusulas más sensibles explicadas, y un documento con las cuotas en distintos escenarios de tipos de interés si la hipoteca es variable.",
          "Además tienes derecho a un acta notarial previa y gratuita en la que el notario comprueba que entiendes lo que vas a firmar y resuelve tus dudas. Aprovéchala: es el momento de preguntar sin presión comercial.",
        ],
      },
      {
        heading: "Compara por TAE, no por TIN",
        paragraphs: [
          "El TIN es el interés puro y es el número que más se publicita. La TAE incorpora comisiones y gastos obligatorios, y es la única cifra que permite comparar ofertas de forma honesta.",
          "Presta especial atención a los productos vinculados. Un diferencial más bajo a cambio de domiciliar la nómina, contratar seguros de hogar y vida y aportar a un plan de pensiones puede resultar más caro que una oferta sin bonificaciones.",
          "Haz el cálculo completo: suma lo que te costarán esos productos durante los años que dure la vinculación y compáralo con el ahorro en intereses. A veces sale a cuenta y a veces no.",
        ],
      },
      {
        heading: "Cláusulas que conviene leer con calma",
        paragraphs: [
          "Vencimiento anticipado: define cuántas cuotas impagadas permiten a la entidad reclamar la totalidad del préstamo. La ley fija unos umbrales mínimos que la entidad no puede empeorar.",
          "Comisión por amortización anticipada: está limitada legalmente y varía según el préstamo sea a tipo fijo o variable y según el momento en que amortices. Si prevés amortizar, este punto importa.",
          "Índice de referencia y diferencial en las hipotecas variables: comprueba cuál es el índice, cada cuánto se revisa y con qué valor concreto. Verifica también si existe algún suelo, que hoy está prohibido en préstamos con consumidores pero conviene confirmar.",
          "Intereses de demora: la ley limita el recargo aplicable en caso de impago en préstamos hipotecarios sobre vivienda.",
        ],
      },
      {
        heading: "Los números que debes tener claros",
        paragraphs: [
          "Calcula el coste total del préstamo, no solo la cuota. Una cuota cómoda a cuarenta años puede suponer pagar en intereses una cifra comparable al capital prestado.",
          "Asegúrate de tener ahorrado el 20 % de entrada que la entidad no financia más un 10-12 % adicional de gastos de compraventa. Comprar apurando el ahorro hasta el último euro deja sin colchón para imprevistos, y una vivienda genera bastantes.",
          "Haz la prueba de resistencia: si tu hipoteca es variable, calcula la cuota con un tipo dos o tres puntos por encima del actual. Si ese escenario te ahoga, la operación es más arriesgada de lo que parece.",
        ],
      },
      {
        heading: "Preguntas para hacer al banco",
        paragraphs: [
          "¿Cuál es la TAE incluyendo todos los productos vinculados obligatorios? ¿Qué ocurre con mi tipo de interés si cancelo alguno de esos productos más adelante?",
          "¿Qué comisión tiene la amortización anticipada, parcial y total, en cada tramo del préstamo? ¿Puedo elegir entre reducir cuota y reducir plazo sin coste?",
          "¿Cuál es exactamente el importe de todos los gastos que asumo yo? ¿Puedo aportar un seguro de hogar de otra compañía con coberturas equivalentes?",
        ],
      },
    ],
    related: ["hipoteca", "amortizacion", "prestamo", "interes-compuesto"],
  },
];

export const BLOG_SLUGS = BLOG_POSTS.map((p) => p.slug);

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
