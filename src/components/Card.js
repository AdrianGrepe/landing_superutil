import React from "react";
import Button from "./Button";
import styles from "./Card.module.css";

function Card({ image, title, description, models = [] }) {
  const handleModelClick = (model) => {
    window.open(model.url, "_blank");
  };

  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.card__image} />
      <div className={styles.card__content}>
        <h3 className={styles.card__title}>{title}</h3>
        <p className={styles.card__description}>{description}</p>
        {models.length > 0 && (
          <div className={styles.card__models}>
            <h4>Modelos compatibles</h4>
            <ul>
              {models.map((model, index) => (
                <li key={index}>
                  <Button
                    onClick={() => handleModelClick(model)}
                    className={styles.button}
                  >
                    {model.name}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
