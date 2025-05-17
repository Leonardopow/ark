import styles from "./App.module.css";
import { Card } from "./components/Card/Card";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <h1>DAR ORGULHO PRA MIM E PRO AYRTON</h1>
      <div className={styles.cardList}>
        <Card
          name="Rex"
          imageUrl="https://www.dododex.com/media/creature/rex.png"
        />
        <Card
          name="Ptero"
          imageUrl="https://www.dododex.com/media/creature/pteranodon.png"
        />
      </div>
    </>
  );
}

export default App;
