import type { NextPage } from "next";
import Menu from "../components/Menu";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <h1 id="header">Plannings</h1>
      <Menu></Menu>
      <div className={styles.container}>
        <main className={styles.main}></main>
      </div>
    </>
  );
};

export default Home;
