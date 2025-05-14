import React, { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';

interface Photo {
  id: number;
  url: string;
  alt: string;
}

const photos: Photo[] = [
  { id: 1, url: "../p2.jpg", alt: "Smileees" },
  { id: 2, url: "../w1.jpg", alt: "Glorious" },
  { id: 3, url: "../h5.jpg", alt: "Exquisite" },
  { id: 4, url: "../i1.jpg", alt: "First photo" },
  { id: 5, url: "../h3.jpg", alt: "Divine" },
  { id: 6, url: "../p1.jpg", alt: "Peaceful" },
  
];

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1
};

const PhotoGallery: React.FC = () => {
  const [visiblePhotos, setVisiblePhotos] = useState<Photo[]>([]);

  useEffect(() => {
    setVisiblePhotos(photos);
  }, []);

  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="font-playfair text-3xl md:text-4xl mb-12 text-center text-gradient">
        Moments To Remember
      </h2>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-6"
        columnClassName="masonry-column"
      >
        {visiblePhotos.map((photo, index) => (
          <div
            key={photo.id}
            className="relative mb-6 rounded-xl overflow-hidden shadow-lg group transition-transform duration-300 hover:scale-105 bg-white"
            style={{ breakInside: 'avoid' }}
          >
            <img
              src={photo.url}
              alt={photo.alt}
              className="w-full h-auto object-cover rounded-xl transition-all duration-300"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-mystery-light/70 to-transparent flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="p-4 text-sm text-white font-lato">{photo.alt}</p>
            </div>
          </div>
        ))}
      </Masonry>
    </section>
  );
};

export default PhotoGallery;
