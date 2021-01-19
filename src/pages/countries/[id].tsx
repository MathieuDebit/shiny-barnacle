import CountryTemplate from 'src/templates/Country';
import { useQuery, gql } from '@apollo/client';
import { useRouter } from 'next/router';

const LIST_COUNTRIES = gql`
  {
    countries {
      name
      code
    }
  }
`;

export default function Country() {
  const router = useRouter();
  const query = router.query.id as string;

  const { data, loading, error } = useQuery(LIST_COUNTRIES);

  if (loading || error) {
    return <p>{error ? error.message : 'Loading...'}</p>;
  }

  const country = query && data.countries.find((el) => el.name === query.replace(/^\w/, (c) => c.toUpperCase()));

  if (!country) return <div>country not found</div>;

  return (
    <CountryTemplate code={country.code} />
  );
}
