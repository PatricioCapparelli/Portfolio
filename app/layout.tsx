import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Header from "@/components/header";

const urbanist = Urbanist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Patricio Capparelli - Portfolio 👍",
  description: "portfolio made by Patricio Capparelli", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.className}`}>
        <Navbar/>
        <Header/>
        {children}
      </body>
    </html>
  );
}
