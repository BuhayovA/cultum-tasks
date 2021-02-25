import React from 'react';
// view components
import { MainLayout } from '@md-shared/layouts/main';
import VehicleContainer from '@md-star-wars/vehicle';
// libs
import { initializeApollo } from '../../lib/apolloClient';
//types
import { GetVehicleResponse, GetVehicleVariables } from '@md-star-wars/vehicle/queries/vehicle/type';
import { GetServerSidePropsContext } from 'next';
// query
import { GET_VEHICLE_QUERY } from '@md-star-wars/vehicle/queries/vehicle';

const VehicleDetailsPage = () => {
  return (
    <MainLayout>
      <VehicleContainer />
    </MainLayout>
  );
};

//server rendering
export async function getServerSideProps(contxt: GetServerSidePropsContext) {
  const { params } = contxt;
  const apolloClient = initializeApollo();

  try {
    await apolloClient.query<GetVehicleResponse, GetVehicleVariables>({
      query: GET_VEHICLE_QUERY,
      variables: { id: params?.id as string }
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

export default VehicleDetailsPage;
