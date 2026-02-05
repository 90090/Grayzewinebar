import { useState } from 'react';

interface GalleryImage {
  src: string;
  alt: string;
}

const images: GalleryImage[] = [
  { src: '/gallery/gallery-bar.webp', alt: 'Interior 1' },
  { src: '/gallery/gallery-lighting.webp', alt: 'Interior 2' },
  { src: '/gallery/gallery-seating.webp', alt: 'Wine Selection' },
  { src: '/gallery/gallery-seating2.webp', alt: 'Bar Area' },
  { src: '/gallery/gallery-seating.webp', alt: 'Wine Bottles' },
  { src: '/gallery/gallery-seating.webp', alt: 'Seating' },
  { src: '/gallery/gallery-seating.webp', alt: 'Ambiance' },
  { src: '/gallery/gallery-seating.webp', alt: 'Details' },
];

export default function Gallery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const changeImage = (direction: number) => {
    let newIndex = currentIndex + direction;
    if (newIndex >= images.length) newIndex = 0;
    if (newIndex < 0) newIndex = images.length - 1;
    setCurrentIndex(newIndex);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!modalOpen) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') changeImage(-1);
    if (e.key === 'ArrowRight') changeImage(1);
  };

  // Add keyboard listener
  if (typeof window !== 'undefined') {
    window.addEventListener('keydown', handleKeyDown as any);
  }

  return (
    <>
      <section id="gallery" className="py-20 px-8 bg-gradient-to-b from-wine-black via-wine-gray to-wine-black">
        <div className="text-center mb-16 pt-20">
          <h2 className="text-5xl text-wine-gold tracking-[3px] font-light uppercase mb-4">
            Our Space
          </h2>
          <div className="relative w-24 h-0.5 bg-wine-gold mx-auto">
            <div className="absolute top-1/2 -translate-y-1/2 -left-5 w-2 h-2 bg-wine-green rounded-full"></div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-5 w-2 h-2 bg-wine-green rounded-full"></div>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto grid grid-cols-6 auto-rows-[200px] gap-4">
          {/* Large featured image */}
          <div
            onClick={() => openModal(0)}
            className="col-span-3 row-span-2 relative overflow-hidden cursor-pointer border-2 border-transparent transition-all duration-300 hover:border-wine-gold hover:scale-[1.02] hover:z-10 group"
          >
            <img src={images[0].src} alt={images[0].alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-br from-wine-gold/80 to-wine-green/80 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-5xl text-white font-light">+</span>
            </div>
          </div>

          {/* Medium images */}
          <div
            onClick={() => openModal(1)}
            className="col-span-2 row-span-2 relative overflow-hidden cursor-pointer border-2 border-transparent transition-all duration-300 hover:border-wine-gold hover:scale-[1.02] hover:z-10 group"
          >
            <img src={images[1].src} alt={images[1].alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-br from-wine-gold/80 to-wine-green/80 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-5xl text-white font-light">+</span>
            </div>
          </div>

          <div
            onClick={() => openModal(2)}
            className="col-span-2 row-span-2 relative overflow-hidden cursor-pointer border-2 border-transparent transition-all duration-300 hover:border-wine-gold hover:scale-[1.02] hover:z-10 group"
          >
            <img src={images[2].src} alt={images[2].alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-br from-wine-gold/80 to-wine-green/80 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-5xl text-white font-light">+</span>
            </div>
          </div>

          {/* Small images */}
          <div
            onClick={() => openModal(3)}
            className="col-span-2 row-span-1 relative overflow-hidden cursor-pointer border-2 border-transparent transition-all duration-300 hover:border-wine-gold hover:scale-[1.02] hover:z-10 group"
          >
            <img src={images[3].src} alt={images[3].alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-br from-wine-gold/80 to-wine-green/80 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-5xl text-white font-light">+</span>
            </div>
          </div>

          {/* Tall image */}
          <div
            onClick={() => openModal(4)}
            className="col-span-2 row-span-2 relative overflow-hidden cursor-pointer border-2 border-transparent transition-all duration-300 hover:border-wine-gold hover:scale-[1.02] hover:z-10 group"
          >
            <img src={images[4].src} alt={images[4].alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-br from-wine-gold/80 to-wine-green/80 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-5xl text-white font-light">+</span>
            </div>
          </div>

          <div
            onClick={() => openModal(5)}
            className="col-span-2 row-span-1 relative overflow-hidden cursor-pointer border-2 border-transparent transition-all duration-300 hover:border-wine-gold hover:scale-[1.02] hover:z-10 group"
          >
            <img src={images[5].src} alt={images[5].alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-br from-wine-gold/80 to-wine-green/80 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-5xl text-white font-light">+</span>
            </div>
          </div>

          {/* Wide image */}
          <div
            onClick={() => openModal(6)}
            className="col-span-3 row-span-1 relative overflow-hidden cursor-pointer border-2 border-transparent transition-all duration-300 hover:border-wine-gold hover:scale-[1.02] hover:z-10 group"
          >
            <img src={images[6].src} alt={images[6].alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-br from-wine-gold/80 to-wine-green/80 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-5xl text-white font-light">+</span>
            </div>
          </div>

          <div
            onClick={() => openModal(7)}
            className="col-span-2 row-span-1 relative overflow-hidden cursor-pointer border-2 border-transparent transition-all duration-300 hover:border-wine-gold hover:scale-[1.02] hover:z-10 group"
          >
            <img src={images[7].src} alt={images[7].alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-br from-wine-gold/80 to-wine-green/80 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-5xl text-white font-light">+</span>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[2000] bg-black/95 flex items-center justify-center"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-8 right-12 text-wine-gold text-5xl font-light cursor-pointer transition-colors duration-300 hover:text-white"
          >
            &times;
          </button>

          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="max-w-[90%] max-h-[90%] object-contain border-4 border-wine-gold"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              changeImage(-1);
            }}
            className="absolute left-8 top-1/2 -translate-y-1/2 bg-wine-gold/30 text-white border-2 border-wine-gold px-6 py-4 text-3xl cursor-pointer transition-all duration-300 hover:bg-wine-gold hover:text-wine-black"
          >
            &#10094;
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              changeImage(1);
            }}
            className="absolute right-8 top-1/2 -translate-y-1/2 bg-wine-gold/30 text-white border-2 border-wine-gold px-6 py-4 text-3xl cursor-pointer transition-all duration-300 hover:bg-wine-gold hover:text-wine-black"
          >
            &#10095;
          </button>
        </div>
      )}
    </>
  );
}