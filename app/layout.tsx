import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import favicon from "./favicon.ico";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pync",
  description: "Main page of Pync",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="" data-theme="light">
      <head>
      <link 
        rel="shortcut icon" 
        href={favicon.src}
        type="image/x-icon" 
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Aleo:ital,wght@0,100..900;1,100..900&family=League+Spartan:wght@100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet" />
        
      </head>
      <body className={inter.className}>
        {children}</body>
    </html>
  );
}
