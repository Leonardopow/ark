import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      Header
      <ul className={styles.board}>
        <li>teste</li>
        <li>teste</li>
        <li>teste</li>
      </ul>
    </header>
  );
}
