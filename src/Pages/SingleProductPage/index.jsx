import React, { useState, useEffect } from 'react';
import ImageGallary from './ImageGallary';
import ProductPageDetail from './ProductPageDetail';
import ProductTab from './ProductTab';
import BundlePack from './BundlePack';
import './SingleProduct.css'; // Importing the CSS file
import img1 from '../../description/Puluz40/ProductImage/1.png';
import img2 from '../../description/Puluz40/ProductImage/2.png';
import img3 from '../../description/Puluz40/ProductImage/3.png';
import img4 from '../../description/Puluz40/ProductImage/4.png';
import img5 from '../../description/Puluz40/ProductImage/5.png';
import img6 from '../../description/Puluz40/ProductImage/6.png';
import img7 from '../../description/Puluz40/ProductImage/7.png';

export const imgList = [
  { id: 1, img: img1 },
  { id: 2, img: img2 },
  { id: 3, img: img3 },
  { id: 4, img: img4 },
  { id: 5, img: img5 },
  { id: 6, img: img6 },
  { id: 7, img: img7 },
];

const SingleProductPage = () => {
  const [imgtab, setImgTab] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (index) => {
    setImgTab(index);
  };

  const handleThumbnailClick = (index) => {
    setImgTab(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleNext = () => {
    setImgTab((prev) => (prev + 1) % imgList.length);
  };

  const handlePrev = () => {
    setImgTab((prev) => (prev - 1 + imgList.length) % imgList.length);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      handleNext();
    } else if (event.key === 'ArrowLeft') {
      handlePrev();
    } else if (event.key === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    } else {
      window.removeEventListener('keydown', handleKeyDown);
    }
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <>
      <div className="max-w-[1212px] mt-[53px] mx-auto mb-0 flex justify-evenly select-none">
        <div className="thumbnail-container flex items-center flex-col">
          {imgList.map((info, index) => {
            return (
              <ImageGallary
                info={info}
                handleClick={handleClick}
                key={index}
                index={index}
                imgtab={imgtab}
              />
            );
          })}
        </div>
        <div className="w-[462px] h-[462px] flex items-center justify-center">
          <img
            src={imgList[imgtab].img}
            alt={`img-${imgtab}`}
            className="w-[959px] h-[439px] cursor-pointer"
            onClick={() => handleThumbnailClick(imgtab)}
          />
        </div>

        <ProductPageDetail />
      </div>
      {isModalOpen && (
        <div
          className="large-image-modal mt-10 h-full py-6"
          onClick={closeModal}
        >
          <div className="navigation-buttons">
            <button
              className="nav-button"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
            >
              &lt;
            </button>
            <button
              className="nav-button"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
            >
              &gt;
            </button>
          </div>
          <img
            src={imgList[imgtab].img}
            alt={`img-${imgtab}`}
            className="large-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
      <div className="max-w-[1072px] mx-auto pb-5 flex justify-between select-none">
        <BundlePack />
      </div>
      <hr className="border-t-2 border-gray-200 w-5/6 mx-auto my-8" />
      <div className="mt-[55px]">
        <ProductTab />
      </div>
    </>
  );
};

export default SingleProductPage;
