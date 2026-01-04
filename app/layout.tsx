import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "I Have Read.",
  description: "Le jeu où personne ne lit les conditions.",
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