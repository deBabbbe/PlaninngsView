import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <>
    <h1 id="header">Plannings</h1>
    <div className={styles.container}>
      <main className={styles.main}>
        <Link href="/customers">Customers</Link>
        <Link href="/applications">Applications</Link>
        <Link href="/employees">Employees</Link>
        <Link href="/appointments">Appointments</Link>
      </main>
    </div>
    </>
  );
};

export default Home;
