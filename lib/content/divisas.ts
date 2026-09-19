import type { CalculatorContent } from "@/types";

export const divisasContent: CalculatorContent = {
  intro:
    "Cambiar divisas casi nunca cuesta lo que parece. El tipo de cambio que ves en las noticias es el interbancario, y ese no es el que te aplican a ti: entre medias hay un diferencial y, a veces, una comisión explícita. Esta calculadora separa ambas cosas para que veas la tasa efectiva real que estás recibiendo.",
  sections: [
    {
      heading: "Cómo funciona esta calculadora",
      paragraphs: [
        "Introduces la cantidad, el tipo de cambio y la comisión que aplica tu entidad. La herramienta te devuelve el importe bruto, la comisión en valor absoluto y, sobre todo, la tasa efectiva: el tipo de cambio real que has obtenido una vez descontado todo.",
        "No consulta cotizaciones en tiempo real, y eso es deliberado. Al introducir tú el tipo puedes comparar el interbancario que publica el Banco Central Europeo con el que te ofrece realmente tu banco, que es exactamente donde se esconde el coste.",
      ],
    },
    {
      heading: "El diferencial: el coste que no aparece como comisión",
      paragraphs: [
        "Muchas entidades y casas de cambio anuncian «cero comisiones». Suele ser cierto en sentido literal y engañoso en la práctica: en lugar de cobrarte una comisión, te aplican un tipo de cambio peor que el de mercado y se quedan la diferencia.",
        "Si el interbancario está a 1,0850 y te aplican 1,0500, te han cobrado un 3,2 % sin que aparezca ninguna comisión en el recibo. Sobre 2.000 € son 64 € que no figuran en ningún sitio.",
        "Por eso la cifra que importa no es la comisión, sino la tasa efectiva: divide lo que recibes entre lo que entregas y compara ese número con el interbancario del día.",
      ],
    },
    {
      heading: "Dónde se pierde dinero al cambiar divisa",
      list: [
        "El diferencial sobre el tipo interbancario, que suele ser el coste principal y el menos visible.",
        "La comisión explícita por la operación, fija o porcentual.",
        "La conversión dinámica en el datáfono: cuando en el extranjero te ofrecen pagar en euros en lugar de en moneda local, el cambio lo hace el comercio y casi siempre sale peor. Elige pagar siempre en la moneda local.",
        "Las comisiones por retirada en cajeros ajenos, que se suman a lo anterior.",
        "El cambio en aeropuertos y zonas turísticas, donde los diferenciales son notoriamente altos.",
      ],
    },
    {
      heading: "Cómo comparar dos ofertas de cambio",
      paragraphs: [
        "Ignora el marketing y reduce todo a una única cifra: cuántas unidades de la divisa destino recibes por cada unidad de la de origen, después de absolutamente todos los costes.",
        "Ese número es directamente comparable entre entidades, y es lo que calcula el campo «tasa efectiva real» de esta herramienta. Si una opción te da 1,0720 efectivos y otra 1,0510, la primera es mejor aunque anuncie una comisión y la segunda diga ser gratuita.",
      ],
    },
  ],
  faq: [
    {
      q: "¿Qué es el tipo de cambio interbancario?",
      a: "Es el tipo al que las entidades financieras se cambian divisas entre sí, y es la referencia de mercado. El Banco Central Europeo publica tipos de referencia diarios del euro frente a otras divisas. Como particular casi nunca obtendrás ese tipo exacto.",
    },
    {
      q: "¿Por qué el banco me da menos de lo que dice el cambio oficial?",
      a: "Porque aplica un diferencial sobre el tipo interbancario. Esa diferencia es su margen, y funciona como una comisión encubierta aunque el recibo diga que no hay comisiones.",
    },
    {
      q: "¿Me conviene pagar en euros cuando viajo fuera de la zona euro?",
      a: "Normalmente no. Si el datáfono te ofrece cobrarte en euros, el tipo de cambio lo fija el comercio o su proveedor, y suele ser peor que el de tu banco. Elegir la moneda local es casi siempre la opción más barata.",
    },
    {
      q: "¿Dónde consulto el tipo de cambio de referencia?",
      a: "El Banco Central Europeo publica diariamente los tipos de cambio de referencia del euro. Úsalos como punto de partida para comparar lo que te ofrece cualquier entidad.",
    },
  ],
  related: ["porcentaje", "inflacion", "descuento"],
  sources: [
    {
      label: "Banco Central Europeo — Tipos de cambio de referencia del euro",
      url: "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html",
    },
    {
      label: "Banco de España — Portal del Cliente Bancario",
      url: "https://clientebancario.bde.es/",
    },
  ],
  disclaimer:
    "Esta herramienta no consulta cotizaciones en tiempo real: el tipo de cambio lo introduce el usuario. No constituye asesoramiento financiero.",
};
