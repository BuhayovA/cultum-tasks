import React, { createContext, useContext, useMemo } from 'react';
// context
import { VehiclesAPIContext } from '@md-star-wars/vehicles/layers/api/vehicles';
//types
import { Vehicle } from '@md-queries/vehicles/types';

interface Context {
  vehiclesList: Vehicle[];
}

export const VehiclesBLContext = createContext<Context>({
  vehiclesList: []
});

const VehiclesBLContextProvider: React.FC = ({ children }) => {
  // add api logic here
  const { vehicles } = useContext(VehiclesAPIContext);

  const vehiclesList = useMemo<Vehicle[]>(() => {
    return vehicles.map(({ id, name }) => ({
      name,
      id
    }));
  }, [vehicles]);

  return (
    <VehiclesBLContext.Provider
      value={{
        vehiclesList
      }}
    >
      {children}
    </VehiclesBLContext.Provider>
  );
};

export default VehiclesBLContextProvider;
