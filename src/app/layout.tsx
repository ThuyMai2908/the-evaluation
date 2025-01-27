import { baseOpenGraph } from "@/app/shared-metadata";
import { neueMontrealFont, neueMontrealFontMedium } from "@/assets/fonts";
import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import {
  APP_DESCRIPTION,
  APP_NAME,
  APP_TITLE_TEMPLATE,
  DOMAIN_URL,
} from "@/config/common";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_NAME,
    template: APP_TITLE_TEMPLATE,
  },
  metadataBase: new URL(DOMAIN_URL),
  description: APP_DESCRIPTION,
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  keywords: [
    "amazon",
    "agency",
    "marketing",
    "fba",
    "brand",
    "seller",
    "management",
  ],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_NAME,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    ...baseOpenGraph,
    emails: ["thithuy.mai2908@gmail.com"],
    url: DOMAIN_URL,
    title: {
      default: APP_NAME,
      template: APP_TITLE_TEMPLATE,
    },
    images: [
      {
        url: "/thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: APP_NAME,
      },
    ],
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_NAME,
      template: APP_TITLE_TEMPLATE,
    },
    images: [
      {
        url: "/thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: APP_NAME,
      },
    ],
    description: APP_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col min-h-screen font-body antialiased ${neueMontrealFont.variable} ${neueMontrealFontMedium.variable}`}
      >
        <Header />
        <main className="flex flex-col flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
