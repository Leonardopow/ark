import styles from "./Header.module.css";

export function Header() {
  const imageUrl =
    "https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-aba8-61f7-b82a-53561528cec6/raw?se=2025-05-17T13%3A59%3A42Z&sp=r&sv=2024-08-04&sr=b&scid=00000000-0000-0000-0000-000000000000&skoid=732f244e-db13-47c3-bcc7-7ee02a9397bc&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-17T01%3A30%3A34Z&ske=2025-05-18T01%3A30%3A34Z&sks=b&skv=2024-08-04&sig=OC5HzTw6NozndlohkkElf9O/CUg/TDw2xBPqVBghX5Y%3D"; // URL da imagem fornecida

  return (
    <header className={styles.header}>
      <img src={imageUrl} alt="logoark" className={styles.headerImage} />
      <ul className={styles.board}>
        <li>Dinos</li>
        <li>Poções</li>
        <li>Rações</li>
        <li>Mapas</li>
        <li>Bosses</li>
      </ul>
    </header>
  );
}
