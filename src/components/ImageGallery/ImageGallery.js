import React, { useState } from 'react';
import './ImageGallery.css';

const ImageGallery = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleNext = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="image-gallery">
      <div className="main-image">
        <svg viewBox="0 0 400 300">
          {/* Display the main image */}
          <image href={images[selectedImageIndex]} width="100%" height="100%" />
        </svg>
      </div>
      <div className="thumbnail-container">
        {/* Display thumbnails */}
        {images.map((image, index) => (
          <svg
            key={index}
            viewBox="0 0 100 75"
            className={`thumbnail ${index === selectedImageIndex ? 'selected' : ''}`}
            onClick={() => setSelectedImageIndex(index)}
          >
            <image href={image} width="100%" height="100%" />
          </svg>
        ))}
      </div>
      <button className="prev-button" onClick={handlePrev}>
        {/* SVG for previous arrow */}
        <svg viewBox="0 0 24 24">
          <path d="M15 3.41L13.59 2 7 8.59 8.41 10 7 11.41 13.59 18 15 16.59 9.41 11z" />
        </svg>
      </button>
      <button className="next-button" onClick={handleNext}>
        {/* SVG for next arrow */}
        <svg viewBox="0 0 24 24">
          <path d="M8.59 16L10 14.59 15.41 20 14 21.41 8.59 16zM13 3H11V13H13V3z" />
        </svg>
      </button>
    </div>
  );
};

export default ImageGallery;
