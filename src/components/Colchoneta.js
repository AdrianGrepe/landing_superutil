import React from "react";
import styles from "./Colchoneta.module.css";
import Carousel from "./Carousel.js";
import colchoneta from "../assets/images/colchoneta.png";
import colchoneta1 from "../assets/images/colchoneta1.png";
import colchoneta2 from "../assets/images/colchoneta2.png";
import Button from "./Button.js";

function Colchoneta() {
  const slides = [
    {
      content: (
        <img src={colchoneta} alt="Colchoneta" className={styles.image} />
      ),
    },
    {
      content: (
        <img src={colchoneta1} alt="Colchoneta" className={styles.image} />
      ),
    },
    {
      content: (
        <img src={colchoneta2} alt="Colchoneta" className={styles.image} />
      ),
    },
  ];

  return (
    <section className={styles.colchoneta__section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Prueba Nuestras Nuevas Colchonetas</h2>
        <div className={styles.content}>
          <div className={styles.image__container}>
            <Carousel
              classCarousel={styles.carousel}
              classContainer={styles.carousel__container}
              classSlide={styles.slide}
              slides={slides}
              interval={5000}
              visibleSlides={1}
              showButtons={false}
            />
          </div>
          <div className={styles.info}>
            <h3 className={styles.product__name}>
              Colchoneta Individual Premium
            </h3>
            <p className={styles.description}>
              Nuestra colchoneta Individual premium está diseñada para brindar
              máxima comodidad. Fabricada con materiales de alta calidad, es
              resistente al desgaste y fácil de limpiar.
            </p>
            <ul className={styles.features}>
              <li>Material resistente y duradero</li>
              <li>Fácil de instalar y transportar</li>
              <li>Contra manchas y derrames</li>
              <li>Disponible en varios colores</li>
            </ul>
            <Button
              className={styles.button}
              onClick={() =>
                window.open(
                  "https://articulo.mercadolibre.com.mx/MLM-2098804567-sofa-cama-individual-sillon-puff-plegable-colchon-descanso-_JM",
                  "_blank"
                )
              }
            >
              Comprar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Colchoneta;
