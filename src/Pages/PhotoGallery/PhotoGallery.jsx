import React, { useState } from 'react';

const photos = [
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
];

const PhotoGallery = () => {
  const [visiblePhotos, setVisiblePhotos] = useState(4);

  const showMorePhotos = () => {
    setVisiblePhotos((prevVisiblePhotos) => prevVisiblePhotos + 4);
  };

  return (
    <div className="container mx-auto px-4">
      <p className="font-Arial not-italic font-bold text-Heading text-center uppercase pb-5 text-primary mobile:text-Subheading1 mobile:pb-0">
        Photo Gallery
      </p>
      <div className="flex flex-wrap justify-center md:justify-between">
        {photos.slice(0, visiblePhotos).map((photo, index) => (
          <div key={index} className="w-1/4 mobile:w-1/4 p-4">
            <img src={photo} alt="ok" className="w-full h-auto" />
          </div>
        ))}
      </div>
      {visiblePhotos < photos.length && (
        <div className="text-center mt-4">
          <button
            onClick={showMorePhotos}
            className="bg-primary text-white font-bold py-2 px-4 rounded"
          >
            Show More
          </button>
        </div>
      )}
      <hr className="my-12 border-t-2 border-gray-300 w-[85%] mx-auto" />
    </div>
  );
};

export default PhotoGallery;
