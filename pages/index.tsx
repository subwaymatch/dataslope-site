import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dataslope®</title>
        <meta
          name="description"
          content="Learn data science by solving small challenges"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>Dataslope®</h1>
    </div>
  );
};

export default Home;
