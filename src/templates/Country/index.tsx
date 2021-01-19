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
      native
      phone
      continent {
        name
      }
      capital
      currency
    }
  }
`;

export default function CountryTemplate({ code } : { code: string}) {
  const { loading, error, data } = useQuery(GET_COUNTRY, {
    variables: { code },
  });

  if (loading || error) {
    return <p>{error ? error.message : 'Loading...'}</p>;
  }

  const { country } = data;
  return (
    <div className={styles.container}>
      <h1>{`${country.emoji} ${country.name}`}</h1>

      <p>
        Native:
        {country.native}
      </p>
      <p>
        Continent:
        {country.continent.name}
      </p>
      <p>
        Capital:
        {country.capital}
      </p>
      <p>
        Phone:
        {country.phone}
      </p>
      <p>
        Currency:
        {country.currency}
      </p>

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
