import type { Metadata } from "next";
import "./globals.css";

const DATA_URL = "https://i-have-read.vercel.app"; 

export const metadata: Metadata = {
  title: {
    default: "I Have Read",
    template: "%s | I Have Read",
  },
  
  description: "Veuillez accepter les conditions d'utilisation. Attention, des conditions sont requises...",

  applicationName: "I Have Read.",
  authors: [{ name: "Killian Lacaque", url: "https://killianlacaque.vercel.app" }],
  generator: "Next.js",
  keywords: ["jeu", "conditions générales", "puzzle", "énigme", "CGS", "terms of service", "killian", "lacaque"],
  
  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },

  verification: {
    google: "Y65NE1Berxi8y4Gcny87MqE1PKChyKA9Se47RSHBp7Y",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}