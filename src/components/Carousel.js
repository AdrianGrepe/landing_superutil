import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./Carousel.module.css";

function Carousel({
  slides,
  classSlide = "",
  classCarousel = "",
  classActive = "",
  classContainer = "",
  autoplay = true,
  interval = 1000,
  visibleSlides = 1,
  showButtons = true,
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const stopSlider = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, []);

  const startSlider = useCallback(() => {
    if (autoplay) {
      stopSlider();
      intervalRef.current = setInterval(() => {
        setCurrentSlide(
          (prevSlide) =>
            (prevSlide + 1) % Math.ceil(slides.length / visibleSlides)
        );
      }, interval);
    }
  }, [autoplay, interval, slides.length, visibleSlides, stopSlider]);

  useEffect(() => {
    startSlider();
    return () => stopSlider();
  }, [startSlider, stopSlider]);

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0
        ? Math.ceil(slides.length / visibleSlides) - 1
        : prevSlide - 1
    );
    startSlider();
  };

  const handleNext = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide + 1) % Math.ceil(slides.length / visibleSlides)
    );
    startSlider();
  };

  // Manejo de eventos táctiles
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      handleNext();
    }

    if (touchStartX.current - touchEndX.current < -50) {
      handlePrev();
    }
  };

  return (
    <div
      className={`${classCarousel}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className={`${classContainer}`}
        style={{
          transform: `translateX(-${currentSlide * (100 / visibleSlides)}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${classSlide} ${
              index >= currentSlide && index < currentSlide + visibleSlides
                ? `${classActive}`
                : ""
            }`}
          >
            {slide.content}
          </div>
        ))}
      </div>
      {showButtons && (
        <>
          <button className={styles.prev} onClick={handlePrev}>
            &#10094;
          </button>
          <button className={styles.next} onClick={handleNext}>
            &#10095;
          </button>
        </>
      )}
    </div>
  );
}

export default Carousel;
