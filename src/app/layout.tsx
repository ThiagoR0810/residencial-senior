import type { Metadata } from "next";
import "./globals.css";
import { SITE_CONFIG } from "@/shared/config/siteConfig";
import { Navbar } from "@/features/navigation";
import { Footer } from "@/features/footer";
import { WhatsAppFAB } from "@/shared/ui/WhatsAppFAB";

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
  description: SITE_CONFIG.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 z-[100] rounded-md font-bold">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <WhatsAppFAB />
        <Footer />
      </body>
    </html>
  );
}
