import Link from 'next/link'
import { useQuery, gql } from '@apollo/client';
import styles from './styles.module.css';

const GET_COUNTRIES = gql`
  {
    countries {
      name
      code
      emoji
    }
  }
`;

export default function CountriesTemplate() {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading || error) {
    return <p>{error ? error.message : 'Loading...'}</p>;
  }

  return (
    <div className={styles.container}>
      <h1>Countries</h1>

      <ul>
        {data.countries.map(({ code, name, emoji }: { code: string; name: string, emoji: string }) => (
          <li key={code}>
            <Link href={`/countries/${name}`}>
              <a>{`${emoji} ${name} (${code})`}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
