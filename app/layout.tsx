import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import favicon from "./favicon.ico";


const leagueSpartan = League_Spartan({
  subsets: ["latin"]
})

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
    <html lang="en" className="no-scrollbar" data-theme="light">
      <head>
      <link 
        rel="shortcut icon" 
        href={favicon.src}
        type="image/x-icon" 
        />
      </head>
      <body className={leagueSpartan.className}>
        {children}</body>
    </html>
  );
}
