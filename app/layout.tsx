import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "I Have Read.",
  description:
    "Veuillez accepter les conditions d'utilisation.",
  
  applicationName: "I Have Read.",
  authors: [{ name: "Killian Lacaque" }],
  generator: "Next.js",
  keywords: [
    "conditions générales",
    "CGS",
    "terms of service",
    "legal document",
    "compliance",
    "acceptation",
    "lecture obligatoire",
    "jeu expérimental",
    "puzzle narratif",
    "password game like",
    "killian",
    "lacaque",
  ],

  openGraph: {
    title: "I Have Read.",
    description:
      "L’utilisation de ce service implique l’acceptation pleine et entière des présentes conditions.",
    type: "website",
    locale: "fr_FR",
    siteName: "I Have Read."
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
