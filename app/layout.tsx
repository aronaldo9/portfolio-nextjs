import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Header from "@/components/header";
import Separator from "@/components/separator";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AarónPF-Dev Portfolio 💻",
  description: "Portfolio made by AarónPF-Dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Navbar />
        <Header />
        {children}
        <Separator height={60} />
      </body>
    </html>
  );
}
