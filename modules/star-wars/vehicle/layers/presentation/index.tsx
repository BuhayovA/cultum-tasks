import React, { useContext } from 'react';
//contexts
import { VehicleBLContext } from '@md-star-wars/vehicle/layers/business';
import { VehicleAPIContext } from '@md-star-wars/vehicle/layers/api/vehicle';
//views
import { ContentLoader } from '@md-ui/loaders/content-loader';
import VehicleInfo from '@md-star-wars/vehicle/components/vehicle-info';

const VehiclePresentation: React.FC = () => {
  //use BLL logic here
  const { vehicleInfo } = useContext(VehicleBLContext);
  //use api logic here
  const { error, isLoading } = useContext(VehicleAPIContext);
  return (
    <ContentLoader error={error} isLoading={isLoading}>
      {vehicleInfo.map((e) => {
        return (
          <VehicleInfo
            key={e.name}
            name={e.name}
            passengers={e.passengers}
            maxAtmospheringSpeed={e.maxAtmospheringSpeed}
          />
        );
      })}
    </ContentLoader>
  );
};

export default VehiclePresentation;
