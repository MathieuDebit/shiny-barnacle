import Head from 'next/head';
import styles from './styles.module.css';

export default function HomeTemplate() {
  return (
    <div className={styles.container}>
      <Head>
        <title>shiny-barnacle</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>Hello</div>
    </div>
  );
}
