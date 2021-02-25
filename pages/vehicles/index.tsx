import React from 'react';
// view components
import { MainLayout } from '@md-shared/layouts/main';
import VehiclesContainer from '@md-star-wars/vehicles';
//libs
import { initializeApollo } from '../../lib/apolloClient';
//query
import { GET_VEHICLES_QUERY } from '@md-queries/vehicles';
//types
import { GetVehiclesResponse, GetVehiclesVariables } from '@md-queries/vehicles/types';

const VehiclesPage = () => {
  return (
    <MainLayout>
      <VehiclesContainer />
    </MainLayout>
  );
};

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  try {
    await apolloClient.query<GetVehiclesResponse, GetVehiclesVariables>({
      query: GET_VEHICLES_QUERY
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('ERROR_GET_VEHICLES', error);
  }

  return {
    props: {
      initialApolloState: apolloClient.cache.extract()
    }
  };
}

export default VehiclesPage;
