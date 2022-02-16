import { FC, ReactElement } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';

import { ApolloProvider } from '@apollo/client';

import { CartProvider } from './contexts/cart';
import { client } from './graphQL/client';

import { GlobalStyles } from './styles/globalStyles';

const AllTheProviders: FC = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      <CartProvider>
        <GlobalStyles />
        {children}
      </CartProvider>
    </ApolloProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
): RenderResult => render(ui, { wrapper: AllTheProviders, ...options });

function clearAllCookies(): void {
  const cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf('=');
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
  }
}

export * from '@testing-library/react';
export { customRender as render };
export { clearAllCookies };
