import Link from 'next/link'
import styles from './styles.module.css';

export default function HomeTemplate() {
  return (
    <div className={styles.container}>
      <h1>🌎 The World 🌍</h1>

      <Link href="/countries">
        <a>List of all countries</a>
      </Link>
    </div>
  );
}
