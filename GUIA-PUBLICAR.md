# Guía para publicar el sitio

Clic a clic. No hace falta saber nada de programación.

**Tiempo total: unos 50 minutos. Coste: unos 11 €/año** (solo el dominio).

Puedes parar en cualquier punto y seguir otro día. Después de cada paso hay una casilla: márcala cuando lo tengas.

---

## Antes de empezar

Ten a mano:

- Tu **NIF**
- Tu **dirección postal**
- Un **correo electrónico** tuyo
- Una **tarjeta** para el dominio (unos 11 €, un solo pago al año)
- Tu **IBAN** (solo para el paso 5, AdSense)

Buena noticia: **`calculadoras-online.com` está libre.** Lo comprobé en el registro oficial de `.com`. Si tardas semanas, podría dejar de estarlo.

---

## Paso 1 · Crear la cuenta de Vercel (5 min, gratis)

Vercel es donde vivirá el sitio. El plan gratuito sobra para esto.

1. Entra en **https://vercel.com/signup**
2. Pulsa **"Continue with GitHub"**. Si no tienes GitHub, pulsa **"Continue with Email"** y usa tu correo.
3. Cuando te pregunte el tipo de cuenta, elige **"Hobby"** (es el gratuito).
4. Te pedirá un nombre para tu cuenta: pon lo que quieras, por ejemplo `sergio`.

> ⚠️ Si te ofrece el plan **Pro** con prueba gratuita, **recházalo**. No lo necesitas y se cobra solo al acabar la prueba.

- [ ] Cuenta de Vercel creada

---

## Paso 2 · Subir el sitio (10 min)

1. Abre una terminal en la carpeta del proyecto.
2. Escribe esto y pulsa Enter:

```bash
npx vercel login
```

3. Elige tu método (el mismo del paso 1). Se abrirá el navegador; confirma y vuelve a la terminal.
4. Ahora escribe:

```bash
npx vercel --prod
```

5. Te hará varias preguntas. Responde así:

| Pregunta | Respuesta |
|---|---|
| Set up and deploy? | **Y** (Enter) |
| Which scope? | tu cuenta (Enter) |
| Link to existing project? | **N** |
| What's your project's name? | `calculadoras-online` (Enter) |
| In which directory is your code? | **./** (Enter) |
| Want to modify settings? | **N** |

6. Espera uno o dos minutos. Al final te dará una dirección tipo `https://calculadoras-online-xxxx.vercel.app`.
7. Ábrela. **El sitio ya está online.**

> En esa dirección `.vercel.app` **no habrá anuncios nunca**: AdSense no acepta subdominios gratuitos. Por eso hace falta el paso 3.

- [ ] Sitio publicado y funcionando

---

## Paso 3 · Comprar el dominio desde Vercel (10 min, ~11 €)

Lo compras **dentro de Vercel** a propósito: así se configura solo y no tienes que tocar ningún ajuste técnico de DNS, que es la parte donde más gente se atasca.

1. En **https://vercel.com/dashboard**, entra en tu proyecto `calculadoras-online`.
2. Arriba, pestaña **"Settings"** → menú lateral **"Domains"**.
3. Pulsa el botón **"Buy"**.
4. Escribe `calculadoras-online.com` y busca.
5. Si sale **Available**, pulsa **"Buy"** y paga con tu tarjeta.
6. Espera a que aparezca con una marca verde (**Valid Configuration**). Puede tardar unos minutos.

> Los nameservers se configuran automáticamente. No tienes que tocar nada más.

Si el dominio ya no estuviera libre, prueba `calculadorasonline.es`, `miscalculadoras.com` o `calculadoras-online.es`. Cualquiera sirve; solo tendrás que decírmelo para actualizar un archivo.

- [ ] Dominio comprado y activo

---

## Paso 4 · Poner tus datos (5 min)

Esto es obligatorio por ley (aviso legal y política de privacidad) y AdSense lo exige.

**No hay que tocar ningún archivo.** Tus datos van en el panel de Vercel, no en el código, porque tu repositorio de GitHub es público y ahí quedarían para siempre en el historial.

1. En Vercel, entra en tu proyecto → pestaña **"Settings"** → menú lateral **"Environment Variables"**.
2. Añade estas cuatro, una a una. En cada una escribes el nombre en "Key" y tu dato en "Value", y pulsas **"Save"**:

| Key | Value (ejemplo) |
|---|---|
| `NEXT_PUBLIC_TITULAR` | Sergio Navas |
| `NEXT_PUBLIC_NIF` | 12345678Z |
| `NEXT_PUBLIC_DOMICILIO` | Calle Ejemplo 1, 08001 Barcelona |
| `NEXT_PUBLIC_EMAIL_CONTACTO` | tucorreo@gmail.com |

3. Añade también esta quinta, con tu dominio:

| Key | Value |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | https://calculadoras-online.com |

4. Ve a la pestaña **"Deployments"**, pulsa los tres puntos del primero de la lista y elige **"Redeploy"**.
5. Entra en `https://calculadoras-online.com/aviso-legal`. Si ya **no** aparece el recuadro amarillo de aviso, está bien hecho.

> Si prefieres no publicar tu domicilio particular, puedes usar un apartado de correos o la dirección de tu gestoría. Lo que no puedes es dejarlo en blanco ni inventarlo: el aviso legal obliga a que sean reales.

- [ ] Las cinco variables configuradas y sitio actualizado

---

## Paso 5 · Solicitar AdSense (20 min + espera)

**Hazlo solo cuando los pasos 1 a 4 estén terminados.** Si solicitas antes, te rechazarán y volver a intentarlo es más lento.

1. Entra en **https://adsense.google.com** e inicia sesión con tu cuenta de Google.
2. En "URL del sitio" pon `calculadoras-online.com`.
3. Rellena país (España), datos fiscales (tu NIF) y dirección.
4. Añade tu **IBAN** para los cobros.
5. Google te dará un código para verificar que el sitio es tuyo. **Cópialo y mándamelo**: yo lo coloco en el sitio en dos minutos.
6. Pulsa **"Solicitar revisión"**.

Ahora toca esperar. **La revisión es manual y tarda de unos días a 4 semanas.**

Cuando te aprueben, te darán un identificador tipo `ca-pub-1234567890123456`. **Mándamelo** y lo configuro.

- [ ] AdSense solicitado
- [ ] AdSense aprobado (llegará por correo)

---

## Paso 6 · Avisar a Google de que existes (10 min)

Sin esto, Google tardaría muchísimo más en encontrar tus páginas.

1. Entra en **https://search.google.com/search-console**
2. Pulsa **"Añadir propiedad"** → opción **"Prefijo de URL"**.
3. Escribe `https://calculadoras-online.com` y continúa.
4. Para verificar, elige **"Archivo HTML"**. El archivo ya está puesto en el sitio, así que debería verificarse solo. Si te pide uno distinto, mándamelo.
5. Una vez verificado, en el menú lateral entra en **"Sitemaps"**.
6. Escribe `sitemap.xml` y pulsa **"Enviar"**.

- [ ] Search Console verificado y sitemap enviado

---

## Y ya está

A partir de aquí no tienes que hacer nada más. El sitio se mantiene solo y el dominio se renueva automáticamente.

**Qué esperar, sin adornos:**

- **Semanas 1-4**: Google empieza a indexar. Visitas: casi cero.
- **Meses 2-6**: entran las primeras visitas. Ingresos: probablemente unos céntimos.
- **Meses 6-12**: si posiciona, el tráfico empieza a crecer de verdad.

Para cubrir 20 €/mes harían falta unas 5.000-20.000 visitas mensuales. Es alcanzable, pero **no en tres meses**.

Puede que no funcione. Es un sitio nuevo compitiendo en palabras clave muy disputadas. Lo que sí es seguro es que el coste de intentarlo son 11 € al año y una tarde.

---

## Si algo se tuerce

Pégame el mensaje de error tal cual y lo miro. No hace falta que entiendas qué significa.

Errores normales y sin importancia:
- **"Error: No existing credentials found"** → te falta hacer `npx vercel login`.
- **"Invalid Configuration"** en el dominio → espera 15 minutos y recarga. El DNS tarda.
- **"needs attention"** en AdSense → suele ser un dato fiscal a medio rellenar.
