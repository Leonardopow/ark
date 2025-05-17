import styles from "./App.module.css";
import { Card } from "./components/Card/Card";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <h1>
        <style className="imageback"></style>
        <img
          src="https://assetsio.gnwcdn.com/ark-genesis-part-2.png?width=1200&height=1200&fit=crop&quality=100&format=png&enable=upscale&auto=webp"
          alt="imageh1"
        />{" "}
      </h1>
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
