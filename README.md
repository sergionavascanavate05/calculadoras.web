# Calculadoras Online

Sitio de 21 calculadoras en español (finanzas, salud y uso general), construido con Next.js 14, TypeScript y Tailwind. Monetización prevista: Google AdSense.

---

## ⚠️ Antes de publicar: lo que solo puedes hacer tú

Hay cinco cosas que yo no puedo hacer por ti. Sin ellas el sitio no genera ni un euro.

### 1. Rellenar tus datos en `lib/config.ts`

Abre `lib/config.ts` y sustituye los cuatro valores que empiezan por `PENDIENTE`:

- `titular` — tu nombre y apellidos
- `nif` — tu NIF
- `domicilio` — tu domicilio
- `email` — un correo de contacto

Son **obligatorios por ley** (artículo 10 de la LSSI-CE para el aviso legal, y el RGPD para la política de privacidad). Además AdSense exige una política de privacidad válida. Mientras estén sin rellenar, el sitio muestra un aviso amarillo en las páginas legales para que no se te olvide.

No los he inventado yo a propósito: unos datos falsos en un aviso legal son peores que no tenerlo.

### 2. Comprar un dominio (~10-15 €/año)

**Esto es el único gasto imprescindible y no tiene alternativa gratuita.**

Google AdSense **no acepta subdominios gratuitos** como `.vercel.app` o `.netlify.app`. Tampoco los aceptan Ezoic, Mediavine ni Media.net. Sin dominio propio, el techo de ingresos publicitarios es exactamente **cero**, por mucho tráfico que consigas.

El dominio `calculadoras-online.com` que figura en el código **no está registrado** (no resuelve). Puedes registrar ese u otro en cualquier registrador.

### 3. Crear cuenta en Vercel y desplegar (gratis)

El alojamiento sí es gratuito. Necesitas crear la cuenta tú porque yo no puedo registrarme en servicios.

```bash
npx vercel
```

La primera vez te pedirá iniciar sesión. Después, en el panel de Vercel, añade tu dominio en *Settings → Domains* y configura estas dos variables de entorno:

| Variable | Valor |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://tudominio.com` |
| `NEXT_PUBLIC_ADSENSE_CLIENT` | *(vacío hasta que AdSense te apruebe)* |

### 4. Solicitar AdSense

Solo cuando el dominio esté funcionando y el sitio publicado. Requiere tus datos fiscales y bancarios, que debes introducir tú.

La revisión es **manual** y tarda de unos días a 2-4 semanas. Cuando te aprueben, añade tu ID (`ca-pub-...`) en `NEXT_PUBLIC_ADSENSE_CLIENT` y vuelve a desplegar. El código ya está preparado: los anuncios solo se cargan si esa variable tiene valor.

### 5. Google Search Console

Ya existe el archivo de verificación en `public/google01ed5f8113c09620.html`. Una vez el dominio esté activo, verifica la propiedad y envía el sitemap: `https://tudominio.com/sitemap.xml`.

Sin esto Google tardará bastante más en descubrir las páginas.

---

## Qué he arreglado

El sitio **no era publicable** tal y como estaba. Los problemas encontrados:

### 8 de 21 calculadoras eran falsas

El script generador las creó duplicando dos plantillas. Decían hacer una cosa y hacían otra:

| Calculadora | Qué hacía en realidad |
|---|---|
| Amortización | Calculaba IVA |
| Beneficio | Calculaba IVA |
| Divisas | Calculaba IVA |
| Inflación | Calculaba IVA |
| Margen comercial | Calculaba IVA |
| Consumo de combustible | Calculaba un porcentaje |
| Días entre fechas | Calculaba un porcentaje |
| Tasa metabólica basal | Calculaba el IMC |

Las ocho están reescritas con su lógica real y verificadas contra valores conocidos.

### Otras correcciones

- **3 calculadoras imprecisas mejoradas**: frecuencia cardíaca (ahora con fórmula de Tanaka y zonas por el método de Karvonen), peso ideal (ahora distingue sexo y muestra cuatro fórmulas), calorías (antes tenía la intensidad fijada a un único valor; ahora se elige la actividad con valores MET reales).
- **11 meta descriptions equivocadas**: iban a Google tal cual. Por ejemplo, «días entre fechas» decía *«Calcula qué porcentaje representa un valor respecto a un total»*.
- **El blog no existía como páginas**: la carpeta se llamaba `_slug_` en vez de `[slug]`, y en Next.js las carpetas que empiezan por `_` quedan excluidas del enrutado. El sitemap declaraba a Google dos URLs que devolvían 404.
- **Entidades HTML visibles**: el contenido del blog mostraba literalmente `&lt;18.5` en lugar de `<18.5`.
- **Páginas legales inexistentes**: el footer enlazaba a `/privacidad` y `/contacto`, que daban 404. Creadas, más aviso legal y política de cookies.
- **Contenido demasiado breve**: las páginas tenían 80-120 palabras, justo el perfil que AdSense rechaza por «contenido de poco valor». Ahora entre 700 y 1.000 por calculadora, con tablas, preguntas frecuentes y fuentes citadas.
- **El build fallaba**: el chequeo de tipos entraba en `trading-bot/`, un proyecto independiente que convive en la misma carpeta. Excluido en `tsconfig.json`.
- **Sitemap desincronizado**: estaba escrito a mano. Ahora se genera desde el registro de calculadoras.
- **Separador de millares**: los importes de cuatro cifras salían sin punto (`3131,70 €` junto a `77.666,18 €`).

---

## Arquitectura

```
app/<slug>/page.tsx        Página de cada calculadora (generada desde el registro)
app/<slug>/<X>Form.tsx     Formulario cliente
lib/calculators/index.ts   Registro: id, título, descripción, icono, categoría
lib/calculators/<slug>.ts  Lógica de cálculo pura, sin dependencias de React
lib/content/<slug>.ts      Contenido editorial: guía, tablas, FAQ, fuentes
lib/blog.ts                Artículos del blog (fuente única)
lib/formato.ts             Formato español y validación compartida
lib/config.ts              Datos del titular  ← RELLENAR
components/                UI compartida
```

**Para añadir una calculadora**: crea la lógica en `lib/calculators/`, el contenido en `lib/content/`, añade la entrada al registro y al índice de contenido, y crea la carpeta en `app/`. El sitemap y la portada se actualizan solos.

## Comandos

```bash
npm run dev
```

```bash
npm run build
```

---

## Expectativas realistas

Te lo digo sin adornos porque es tu dinero y tu tiempo:

- **Los primeros meses lo más probable es 0 €.** Un sitio nuevo tarda entre 6 y 12 meses en posicionar, y las palabras clave de calculadoras están muy disputadas por sitios grandes y antiguos.
- **AdSense puede rechazarte igualmente.** He eliminado los motivos evidentes de rechazo, pero la revisión es manual y discrecional.
- **El tráfico español paga poco**: entre 1 € y 5 € por cada 1.000 visitas en contenido general, algo más en finanzas. Para cubrir una suscripción de 20 €/mes harían falta del orden de 5.000-20.000 visitas mensuales.
- **Lo que juega a tu favor**: el trabajo ya está hecho y el coste de mantenerlo es de unos 10-15 € al año. No necesitas hablar con nadie ni vender nada.

Si en 6 meses el tráfico no despega, lo sensato es revisar la estrategia de contenidos, no seguir esperando.
