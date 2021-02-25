import React from 'react';
import VehicleAPIContextProvider from '@md-star-wars/vehicle/layers/api/vehicle';

import VehiclePresentation from '@md-star-wars/vehicle/layers/presentation';
import VehicleBLContextProvider from '@md-star-wars/vehicle/layers/business';

const VehicleContainer = () => {
  return (
    <VehicleAPIContextProvider>
      <VehicleBLContextProvider>
        <VehiclePresentation />
      </VehicleBLContextProvider>
    </VehicleAPIContextProvider>
  );
};

export default VehicleContainer;
