import React from "react";
import { Link } from "react-scroll";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.jpg";
import Button from "./Button";
import Carousel from "./Carousel";
import styles from "./Hero.module.css";

function Hero() {
  const slides = [
    {
      content: (
        <div className={styles.hero}>
          <img src={image1} alt="Protege tu vehículo" />
          <div className={styles.slide__content}>
            <h2>Protege tu Vehículo</h2>
            <p>Cubiertas de alta calidad para todo tipo de autos</p>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className={styles.hero}>
          <img src={image2} alt="Diseño Personalizado" />
          <div className={styles.slide__content}>
            <h2>Diseño Personalizado</h2>
            <p>Encuentra la cubierta perfecta para tu modelo</p>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className={styles.hero}>
          <img src={image3} alt="Resistente al Clima" />
          <div className={styles.slide__content}>
            <h2>Resistente al Clima</h2>
            <p>Protección contra sol, lluvia y nieve</p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className={styles.hero}>
      <Carousel
        classCarousel={styles.carousel}
        classSlide={styles.slide}
        classContainer={styles.container}
        slides={slides}
        autoplay={true}
        interval={10000}
        visibleSlides={1}
      />
      <Link to="products" smooth={true} duration={500}>
        <Button className={styles.hero__button}>Ver Productos</Button>
      </Link>
    </div>
  );
}

export default Hero;
