import type { Metadata } from "next";
import "./globals.css";

import Nav from './componentes/nav';
import Footer from './componentes/footer';

export const metadata: Metadata = {
  title: "Next Desafio front-end",
  description: "Este é um app criado junto com os alunos do torne-se um programador",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css"/>
      </head>
      <body className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
