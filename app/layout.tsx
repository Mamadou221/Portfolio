import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mamadou Ndiaye | Développeur Full-Stack JavaScript",
  description: "Développeur Full-Stack passionné par la création de solutions web modernes et intuitives. Spécialisé en React, Next.js, TypeScript, Node.js et MongoDB.",
  keywords: ["Développeur Full-Stack", "JavaScript", "React", "Next.js", "TypeScript", "Node.js", "MongoDB", "Développeur Web", "Sénégal"],
  authors: [{ name: "Mamadou Ndiaye" }],
  openGraph: {
    title: "Mamadou Ndiaye | Développeur Full-Stack JavaScript",
    description: "Développeur Full-Stack passionné par la création de solutions web modernes et intuitives.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mamadou Ndiaye | Développeur Full-Stack JavaScript",
    description: "Développeur Full-Stack passionné par la création de solutions web modernes et intuitives.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}




