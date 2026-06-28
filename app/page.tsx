export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      
      {/* אזור ברוכים הבאים - מסך מלא */}
      <section className="h-[80vh] flex items-center justify-center">
        <h1 className="text-7xl font-bold tracking-tighter">שאנן 2149</h1>
      </section>

      {/* קישורים - נקיים ובלי קווים */}
      <section className="flex flex-col items-center gap-6 py-20">
        <a href="#work" className="text-3xl font-light tracking-widest hover:text-orange-500 transition-colors">ART & COPY</a>
        <a href="/contact" className="text-3xl font-light tracking-widest hover:text-orange-500 transition-colors">CONTACT</a>
      </section>

    </main>
  );
}