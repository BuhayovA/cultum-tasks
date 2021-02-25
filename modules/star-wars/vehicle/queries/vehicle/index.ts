import { gql } from '@apollo/client';

export const GET_VEHICLE_QUERY = gql`
  query Vehicle($id: ID) {
    vehicle(id: $id) {
      id
      name
      maxAtmospheringSpeed
      passengers
    }
  }
`;
