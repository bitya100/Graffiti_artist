import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-black text-white shadow-md border-b border-gray-800">
      {/* הלוגו - קישור לדף הבית */}
      <Link href="/" className="text-2xl font-bold tracking-tighter hover:text-orange-400 transition-colors">
        SHAAN2149
      </Link>

      {/* הקישורים */}
      <div className="flex gap-8">
        <Link href="/#work" className="hover:text-orange-400 transition-colors">תיק עבודות</Link>
        <Link href="/gallery" className="hover:text-orange-400 transition-colors">גלריה</Link>
        <Link href="/contact" className="hover:text-orange-400 transition-colors">יצירת קשר</Link>
      </div>
    </nav>
  );
}