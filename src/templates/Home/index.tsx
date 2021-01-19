import Link from 'next/link'
import styles from './styles.module.css';

export default function HomeTemplate() {
  return (
    <div className={styles.container}>
      <h1>Home</h1>

      <Link href="/countries">
        <a>Countries</a>
      </Link>
    </div>
  );
}
