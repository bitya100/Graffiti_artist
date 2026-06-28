import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer"; // 1. ייבוא רכיב הפוטר

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "אתר האומן",
  description: "תיק עבודות גרפיטי",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="iw"
      dir="rtl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* התפריט */}
        <nav className="flex justify-between items-center p-6 bg-white shadow-sm">
          <div className="text-xl font-bold">האומן</div>
          <div className="flex gap-6">
            <a href="#portfolio" className="hover:text-blue-600">תיק עבודות</a>
            <a href="#gallery" className="hover:text-blue-600">גלריה</a>
            <a href="#contact" className="hover:text-blue-600">יצירת קשר</a>
          </div>
        </nav>

        {/* תוכן הדפים */}
        <main className="flex-grow">{children}</main>

        {/* 2. הוספת הפוטר כאן */}
        <Footer />
      </body>
    </html>
  );
}