import gql from 'graphql-tag';
import { NameFragment } from './name.fragments';

// update query params to match yours
export const GetName = gql`
  query Name(
    id: String!
  ) {
    ...nameFields
  }
  ${NameFragment}
`;