// app/contact/page.tsx
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <main className="bg-black text-white min-h-screen p-12 md:p-24 flex flex-col items-center">
      <h1 className="text-5xl font-bold text-orange-400 mb-12">Contact me</h1>
      <div className="w-full max-w-xl">
        <ContactForm />
      </div>
    </main>
  );
}