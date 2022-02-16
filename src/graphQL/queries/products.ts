import { gql } from '@apollo/client';

export const PRODUCTS_QUERY = gql`
  query Products($skip: IntType) {
    allProducts(first: 6, skip: $skip, orderBy: createdAt_ASC) {
      value
      rating
      name
      id
      description
      image {
        id
        url
      }
    }
  }
`;
