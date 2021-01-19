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

export default function CountryTemplate({code} : { code: string}) {
  const { loading, error, data } = useQuery(GET_COUNTRY, {
    variables: { code },
  });

  if (loading || error) {
    return <p>{error ? error.message : 'Loading...'}</p>;
  }

  return (
    <div className={styles.container}>
      <h1>{`${data.country.emoji} ${data.country.name}`}</h1>

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
