import React from 'react';
import { Card } from '@md-star-wars/vehicles/components/card';
import { ContentLoader } from '@md-ui/loaders/content-loader';
//context
import { VehiclesAPIContext } from '@md-star-wars/vehicles/layers/api/vehicles';
import { VehiclesBLContext } from '@md-star-wars/vehicles/layers/business';
//views
import { ContentWrapper, Wrapper } from './views';

const VehiclesPresentation = () => {
  //add api logic here
  const { isLoading, error } = React.useContext(VehiclesAPIContext);
  //add business logic here
  const { vehiclesList } = React.useContext(VehiclesBLContext);

  return (
    <ContentWrapper>
      <ContentLoader isLoading={isLoading} error={error}>
        <Wrapper>
          {vehiclesList.map(({ id, name }) => (
            <Card id={id} key={id} name={name} />
          ))}
        </Wrapper>
      </ContentLoader>
    </ContentWrapper>
  );
};

export default VehiclesPresentation;
