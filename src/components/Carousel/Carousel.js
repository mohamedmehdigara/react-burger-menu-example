import React, { useState, useEffect } from 'react';
import './Carousel.css';

function Carousel({ slides, autoplayInterval = 3000 }) {
  // State to manage the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to navigate to the next slide
  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides&&slides.length);
  };

  // Function to navigate to the previous slide
  const handlePreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  // Autoplay functionality using useEffect and setInterval
  useEffect(() => {
    const autoplay = setInterval(handleNextSlide, autoplayInterval);

    // Clear the interval when the component unmounts
    return () => clearInterval(autoplay);
  }, [autoplayInterval]);

  return (
    <div className="carousel">
      {/* Displaying slides */}
      {slides&&slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{
            display: index === currentSlide ? 'block' : 'none',
          }}
        >
          {/* Using an svg element */}
          <svg
            className="slide-image"
            width="100%"
            height="auto"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
          </svg>
          <div className="slide-content">
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </div>
        </div>
      ))}

      {/* Navigation controls */}
      <button className="carousel-control prev" onClick={handlePreviousSlide}>
        &#10094; {/* Left arrow */}
      </button>
      <button className="carousel-control next" onClick={handleNextSlide}>
        &#10095; {/* Right arrow */}
      </button>

      {/* Slide indicators (dots) */}
      <div className="carousel-indicators">
        {slides&&slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
