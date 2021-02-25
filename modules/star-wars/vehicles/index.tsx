import React from 'react';
import VehiclesAPIContextProvider from '@md-star-wars/vehicles/layers/api/vehicles';
import VehiclesPresentation from '@md-star-wars/vehicles/layers/presentation';
import VehiclesBLContextProvider from '@md-star-wars/vehicles/layers/business';

const VehiclesContainer = () => {
  return (
    <VehiclesAPIContextProvider>
      <VehiclesBLContextProvider>
        <VehiclesPresentation />
      </VehiclesBLContextProvider>
    </VehiclesAPIContextProvider>
  );
};

export default VehiclesContainer;
