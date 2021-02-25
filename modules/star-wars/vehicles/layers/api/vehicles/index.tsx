import React, { createContext } from 'react';
//types
import { GetVehiclesVariables, GetVehiclesResponse, Vehicles } from '@md-queries/vehicles/types';
// libs
import { useQuery } from '@apollo/client';
// queries
import { GET_VEHICLES_QUERY } from '@md-queries/vehicles';
//utils
import * as U from '@md-utils';
import { ClientError } from '@md-utils/errors/custom';

interface Context {
  vehicles: Vehicles;
  isLoading: boolean;
  error?: ClientError;
}

export const VehiclesAPIContext = createContext<Context>({
  vehicles: [],
  isLoading: false,
  error: undefined
});

const VehiclesAPIContextProvider: React.FC = ({ children }) => {
  // make api call here
  const { data, loading, refetch, error } = useQuery<GetVehiclesResponse, GetVehiclesVariables>(GET_VEHICLES_QUERY, {
    variables: { first: 6 }
  });

  return (
    <VehiclesAPIContext.Provider
      value={{
        vehicles: data ? data?.allVehicles.vehicles : [],
        error: error ? U.errors.parseAndCreateClientError(error) : undefined,
        isLoading: loading
      }}
    >
      {children}
    </VehiclesAPIContext.Provider>
  );
};

export default VehiclesAPIContextProvider;
