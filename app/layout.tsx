import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "אתר האומן",
  description: "תיק עבודות גרפיטי",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="iw" dir="rtl" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <nav className="flex justify-between items-center p-6 bg-white shadow-sm">
          <Link href="/" className="text-xl font-bold">האומן</Link>
          <div className="flex gap-6">
            <Link href="/#portfolio" className="hover:text-blue-600">תיק עבודות</Link>
            <Link href="/gallery" className="hover:text-blue-600">גלריה</Link>
            <Link href="/contact" className="hover:text-blue-600">יצירת קשר</Link>
          </div>
        </nav>

        <main className="flex-grow">{children}</main>

        <Footer />
      </body>
    </html>
  );
}