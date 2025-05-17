import styles from "./Card.module.css";

export function Card(props) {
  return (
    <div className={styles.card}>
      <img className={styles.cardImage} src={props.imageUrl} alt="" />
      <h2>{props.name}</h2>
    </div>
  );
}
