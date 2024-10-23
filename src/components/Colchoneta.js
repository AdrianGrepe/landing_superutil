import React from "react";
import styles from "./Colchoneta.module.css";
import colchoneta from "../assets/images/colchoneta.png";
import Button from "./Button.js";

function Colchoneta() {
  return (
    <section className={styles.colchoneta__section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Prueba Nuestras Nuevas Colchonetas</h2>
        <div className={styles.content}>
          <div className={styles.image__container}>
            <img src={colchoneta} alt="Colchoneta" className={styles.image} />
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
            <Button className={styles.button}>Comprar</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Colchoneta;
