import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";
import { getLocale, getMessages } from "next-intl/server";
import "./globals.css";
import { Navbar } from "@/features/navigation";
import { Footer } from "@/features/footer";
import { WhatsAppFAB } from "@/shared/ui/WhatsAppFAB";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  const t = await getTranslations("accessibility");

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 z-[100] rounded-md font-bold">
            {t("skipToMainContent")}
          </a>
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <WhatsAppFAB />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
