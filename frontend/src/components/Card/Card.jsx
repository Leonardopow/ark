import React from "react";
import styles from "./Card.module.css";

function Card({ name, imageUrl, description }) {
  const handleCardClick = () => {
    alert(`Rarw ${name}`);
  };

  return (
    <div
      className={styles.card}
      onClick={handleCardClick}
      onKeyPress={(e) => e.key === "Enter" && handleCardClick()}
      role="button"
      tabIndex={0}
    >
      {imageUrl && (
        <img src={imageUrl} alt={name} className={styles.cardImage} />
      )}
      <div className={styles.cardContent}>
        <h3 className={styles.cardName}>{name}</h3>

        {description && <p className={styles.cardDescription}>{description}</p>}
      </div>
    </div>
  );
}

export default Card;
