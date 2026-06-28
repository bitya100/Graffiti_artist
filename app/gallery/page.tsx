import Image from 'next/image';

export default function GalleryPage() {
  // כאן תשימי את רשימת הלינקים לתמונות שלך
  const images = [
        // הוסיפי כאן עוד לינקים בעתיד
    "https://res.cloudinary.com/dtxm5hz1m/image/upload/v1782648374/2149_yellow_j7nssk.jpg",
    "https://res.cloudinary.com/dtxm5hz1m/image/upload/v1782648461/antena_mruqjg.jpg",
    "https://res.cloudinary.com/dtxm5hz1m/image/upload/v1782648465/bb_puc1kl.jpg",
  ];

  return (
    <main className="p-12 bg-black min-h-screen">
      <h1 className="text-4xl text-orange-400 font-bold mb-12 text-center">גלריה</h1>
      
      {/* הגריד שמגדיר את המבנה */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((src, index) => (
  <div 
    key={index} 
    style={{ width: '300px', height: '200px' }} // נתתי גודל קשיח שלא משתנה
    className="overflow-hidden border border-gray-700 mx-auto" // mx-auto למרכוז
  >
    <Image
      src={src}
      alt="graffiti"
      width={300} 
      height={200}
      className="w-full h-full object-cover"
      unoptimized
    />
  </div>

        ))}
      </div>
    </main>
  );
}