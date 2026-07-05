import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dhiekson Nunes | Full Stack & Mobile Developer",
  description: "Portfolio profissional de Dhiekson Nunes - Desenvolvedor Full Stack e Mobile especializado em React Native, Next.js e IA.",
  keywords: ["Dhiekson Nunes", "Desenvolvedor", "Full Stack", "Mobile", "React Native", "Next.js"],
  openGraph: {
    title: "Dhiekson Nunes | Full Stack & Mobile Developer",
    description: "Portfolio profissional de Dhiekson Nunes",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
