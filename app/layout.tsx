
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Stopka from "@/components/Stopka";


const poppins = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]});

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "ProfiMerit",
  description: "Potwierdź swoje kwalifikacje zawodowe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-white overflow-x-hidden`}>
  
      
        <Header />
  
        
        {children}
     
       <Stopka />
       
        </body>
    </html>
  );
}
