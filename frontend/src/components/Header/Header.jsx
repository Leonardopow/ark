import styles from "./Header.module.css";

export function Header() {
  const imageUrl =
    "https://i0.wp.com/www.otakupt.com/wp-content/uploads/2023/04/ARK-Survival-Ascended-logo.jpg?resize=696%2C392&ssl=1";
  return (
    <header className={styles.header}>
      <img src={imageUrl} alt="logoark" className={styles.headerImage} />
      <ul className={styles.board}>
        <li>Dinos</li>
        <li>Poções</li>
        <li>Rações</li>
        <li>Mapas</li>
        <li>Bosses</li>
        <li> Genesis</li>
        <li> The Island</li>
        <li> The Center</li>
        <li>Scorchead Earth</li>
        <li>Extintion</li>
      </ul>
    </header>
  );
}
