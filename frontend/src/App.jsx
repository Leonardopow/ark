import styles from "./App.module.css";
import Card from "./components/Card/Card";
import { Header } from "./components/Header/Header";
import React from "react";

import { dinousaurs } from "./data/dinousaurs";

function App() {
  console.log(dinousaurs)
  return (
    <>
      <Header />
      <div className={styles.appBackground}>
        <div className={styles.cardList}>
           {dinousaurs.map(dino => (
            <Card
            key={dino.nome}
            name={dino.nome}
            imageUrl={`https://www.dododex.com/media/creature/${dino.nome.toLowerCase()}.png`}
            description={dino.descricao}
            />
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
