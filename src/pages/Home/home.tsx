import { useQuery } from '@apollo/client';
import { PRODUCTS_QUERY } from '../../graphQL/queries/products';

export const Home = (): JSX.Element => {
  const { data, loading } = useQuery(PRODUCTS_QUERY);

  console.log(data, loading);

  return (
    <section data-test-id="home">
      <h1>Home</h1>
    </section>
  );
};
