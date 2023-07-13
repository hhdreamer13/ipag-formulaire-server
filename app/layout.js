import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IPAG de Paris",
  description: "Formulaire",
};

export default function RootLayout({ children }) {
  return (
    <html lang='fr'>
      <body className={inter.className}>
        <main className='flex flex-col min-h-screen'>
          <div className='flex-grow bg-white px- pt-10 sm:pt-16 lg:px-'>
            <Navbar />
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
