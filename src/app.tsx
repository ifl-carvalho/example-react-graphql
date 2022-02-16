import { StrictMode } from 'react';

import { ApolloProvider } from '@apollo/client';
import { client } from './graphQL/client';

import { CartProvider } from './contexts/cart';
import { Home } from './pages/Home/home';

import { GlobalStyles } from './styles/globalStyles';

export function App(): JSX.Element {
  return (
    <StrictMode>
      <ApolloProvider client={client}>
        <CartProvider>
          <GlobalStyles />
          <Home />
        </CartProvider>
      </ApolloProvider>
    </StrictMode>
  );
}
