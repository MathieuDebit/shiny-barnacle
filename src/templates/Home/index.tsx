import { useQuery, gql } from '@apollo/client';
import styles from './styles.module.css';

const GET_COUNTRY = gql`
  query GetCountry($code: ID!) {
    country(code: $code) {
      name
      emoji
      languages {
        code
        name
      }
    }
  }
`;

export default function HomeTemplate() {
  const { loading, error, data } = useQuery(GET_COUNTRY, {
    variables: { code: 'FR' },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <div className={styles.container}>
      {`${data.country.name} ${data.country.emoji}`}

      <div>Languages</div>
      <ul>
        {data.country.languages.map(({ code, name }: { code: string; name: string }) => (
          <li key={code}>
            {`${name} (${code})`}
          </li>
        ))}
      </ul>
    </div>
  );
}
