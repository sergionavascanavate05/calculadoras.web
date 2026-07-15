import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchProvider from "@/components/SearchProvider";

const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Calculadoras Online";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://calculadoras-online.com";
const description = "Herramientas gratuitas para calcular IMC, IVA y más. Calculadoras online rápidas, precisas y optimizadas para SEO.";
const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteName, template: `%s | ${siteName}` },
  description,
  keywords: ["calculadoras online", "calculadora IMC", "calculadora IVA", "herramientas gratis", "cálculos online"],
  authors: [{ name: "Calculadoras Online" }],
  openGraph: {
    title: siteName, description, type: "website", locale: "es_ES", siteName, url: siteUrl,
  },
  twitter: { card: "summary_large_image", title: siteName, description },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning data-od-id="root-html">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#5b6ef7" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (theme === 'dark' || (!theme && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        {adsenseClient && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
            crossOrigin="anonymous"
            strategy="lazyOnload"
          />
        )}
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1" data-od-id="main-content">{children}</main>
        <Footer />
        <SearchProvider />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: siteName,
              description,
              url: siteUrl,
              potentialAction: {
                "@type": "SearchAction",
                target: { "@type": "EntryPoint", urlTemplate: `${siteUrl}/?q={search_term_string}` },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}