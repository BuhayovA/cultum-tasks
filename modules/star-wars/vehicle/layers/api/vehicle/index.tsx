import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_VEHICLE_QUERY } from '@md-star-wars/vehicle/queries/vehicle';
import { useRouter } from 'next/router';
import { GetVehicle } from '@md-star-wars/vehicle/queries/vehicle/type';
import { ClientError } from '@md-utils/errors/custom';
import * as U from '@md-utils';

interface Context {
  vehicle?: GetVehicle | undefined;
  isLoading: boolean;
  error?: ClientError;
}

export const VehicleAPIContext = React.createContext<Context>({
  vehicle: undefined,
  isLoading: true,
  error: undefined,
})

const VehicleAPIContextProvider:React.FC = ({children}) => {
  const {query} = useRouter();

  const { error,loading,data, refetch } = useQuery(GET_VEHICLE_QUERY, {
      variables: {id: query.id as string}
  })
  return (
    <VehicleAPIContext.Provider value={{
      vehicle: data ? data.vehicle : undefined,
      isLoading: loading,
      error: error ? U.errors.parseAndCreateClientError(error) : undefined
    }}>
      {children}
    </VehicleAPIContext.Provider>
  );
};

export default VehicleAPIContextProvider;