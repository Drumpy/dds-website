import localFont from "next/font/local";
import { cookies, headers } from "next/headers";
import "../assets/globals.css";

import { I18nProvider } from "@/i18n/I18nProvider";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, resolveLocale } from "@/i18n/locale";

const hubot = localFont({
  src: "./Hubot-Sans.woff2",
});

/* BodaSimple's wordmark is set in Cormorant Garamond (see boda-simple/apps/web
   navbar): "Boda" upright, "Simple" in italic. Loaded here so the featured card
   can render the real logotype instead of an approximation. */
const cormorant = localFont({
  src: [
    {
      path: "./fonts/cormorant-normal-500.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/cormorant-italic-500.woff2",
      weight: "500",
      style: "italic",
    },
  ],
  variable: "--font-cormorant",
  display: "swap",
});

async function requestLocale() {
  // An explicit choice (cookie) wins over the browser's Accept-Language.
  const stored = (await cookies()).get("locale")?.value;
  if (isLocale(stored)) return stored;

  const acceptLanguage = (await headers()).get("accept-language");
  return resolveLocale(acceptLanguage);
}

export async function generateMetadata() {
  const { meta } = getDictionary(await requestLocale());

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      type: "website",
      siteName: "Diego Do Santos",
      title: meta.title,
      description: meta.description,
    },
    twitter: {
      card: "summary",
      title: meta.title,
      description: meta.description,
    },
  } as const;
}

export const viewport = {
  themeColor: "#101012",
  colorScheme: "dark",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await requestLocale();

  return (
    <html
      lang={locale}
      className={`antialiased scroll-smooth motion-reduce:scroll-auto ${hubot.className} ${cormorant.variable}`}
    >
      <head>
        <script
          id="counterscale-config"
          dangerouslySetInnerHTML={{
            __html: `(function () {
  window.counterscale = {
    q: [["set", "siteId", "dds-website"], ["trackPageview"]],
  };
})();`,
          }}
        />
        <script
          id="counterscale-script"
          src="https://counterscale.drumpy.workers.dev/tracker.js"
          defer
        />
      </head>
      <body className="bg-[#101012]">
        <I18nProvider initialLocale={locale}>{children}</I18nProvider>
      </body>
    </html>
  );
}
