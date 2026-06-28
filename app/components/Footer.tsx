import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black text-white p-12 mt-20">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* עכשיו התיבה הזו תופיע בצד ימין (החתימה) */}
        <div className="w-32 h-32 relative">
          <Image 
            src="/signature.png" 
            alt="חתימת האומן"
            fill
            className="object-contain"
          />
        </div>

        {/* עכשיו הקישורים יופיעו בצד שמאל */}
        <div className="flex flex-col gap-4 text-left">
          <h3 className="text-sm font-bold tracking-widest text-gray-400">SOCIAL</h3>
          <a href="#" className="hover:underline">Youtube</a>
          <a href="#" className="hover:underline">Spotify</a>
          <a href="#" className="hover:underline">Instagram</a>
          <a href="#" className="hover:underline">Behance</a>
        </div>

      </div>
    </footer>
  );
}