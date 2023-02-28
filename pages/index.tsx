import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Link href="/">Home</Link>
        <Link href="/customers">Customers</Link>
        <Link href="/applications">Applications</Link>
      </main>
    </div>
  );
};

export default Home;
