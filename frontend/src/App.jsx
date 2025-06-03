import styles from "./App.module.css";
import Card from "./components/Card/Card";
import { Header } from "./components/Header/Header";
import React from "react";

function App() {
  return (
    <>
      <Header />
      <div className={styles.appBackground}>
        <div className={styles.cardList}>
          <Card
            name="Rex"
            imageUrl="https://www.dododex.com/media/creature/rex.png"
            description="Serve pra quase nada, giga é muito melhor mas ajuda no raid para base tek"
          />
          <Card
            name="Ptero"
            imageUrl="https://www.dododex.com/media/creature/pteranodon.png"
            description="Era bom, mas hoje só serve contra maewing"
          />
        </div>
      </div>
    </>
  );
}

export default App;
