import React, { useEffect, useRef, useState } from "react";
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
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);

  const startSlider = () => {
    if (autoplay) {
      stopSlider();
      intervalRef.current = setInterval(() => {
        setCurrentSlide(
          (prevSlide) =>
            (prevSlide + 1) % Math.ceil(slides.length / visibleSlides)
        );
      }, interval);
    }
  };

  const stopSlider = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    startSlider();
    return () => stopSlider();
  }, [slides.length, autoplay, interval, visibleSlides]);

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

  return (
    <div className={`${classCarousel}`}>
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
      <button className={styles.prev} onClick={handlePrev}>
        &#10094;
      </button>
      <button className={styles.next} onClick={handleNext}>
        &#10095;
      </button>
    </div>
  );
}

export default Carousel;
