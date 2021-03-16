import React from 'react';
//hook(s)
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
//types
import { GetVehicle, GetVehicleResponse, GetVehicleVariables } from '@md-star-wars/vehicle/queries/vehicle/type';
import { GET_VEHICLE_QUERY } from '@md-star-wars/vehicle/queries/vehicle';
//utils
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
  error: undefined
});

const VehicleAPIContextProvider: React.FC = ({ children }) => {
  const { query } = useRouter();
  // make api call here
  const { error, loading, data } = useQuery<GetVehicleResponse, GetVehicleVariables>(GET_VEHICLE_QUERY, {
    variables: { id: query.id as string }
  });
  return (
    <VehicleAPIContext.Provider
      value={{
        vehicle: data ? data.vehicle : undefined,
        isLoading: loading,
        error: error ? U.errors.parseAndCreateClientError(error) : undefined
      }}
    >
      {children}
    </VehicleAPIContext.Provider>
  );
};

export default VehicleAPIContextProvider;
