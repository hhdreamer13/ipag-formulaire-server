import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

import { Roboto } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

const inter = Inter({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "IPAG de Paris",
  description: "Formulaire",
};

export default function RootLayout({ children }) {
  return (
    <html lang='fr'>
      <body className={inter.className}>
        <main className='flex flex-col min-h-screen'>
          <div className='flex-grow bg-white pt-10 sm:pt-16'>
            <Navbar />
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
