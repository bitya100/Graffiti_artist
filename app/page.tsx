export default function Home() {
  return (
    <main>
      {/* אזור ברוכים הבאים */}
      <section className="h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold">ברוכים הבאים לתיק העבודות שלי</h1>
      </section>

      {/* 3 קישורים שורה אחרי שורה */}
      <section className="flex flex-col gap-4 p-10">
        <a href="#link1" className="text-xl">קישור ראשון</a>
        <a href="#link2" className="text-xl">קישור שני</a>
        <a href="#link3" className="text-xl">קישור שלישי</a>
      </section>

      {/* פוטר */}
      <footer id="contact" className="p-10 border-t mt-10">
        <div className="flex gap-4">
          <a href="#">אינסטגרם</a>
          <a href="#">יצירת קשר</a>
        </div>
      </footer>
    </main>
  );
}