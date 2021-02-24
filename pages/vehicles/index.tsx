import React from 'react';
import { MainLayout } from '@md-shared/layouts/main';
import VehiclesContainer from '@md-star-wars/vehicles';

const VehiclesPage = () => {
  return (
    <MainLayout>
      <VehiclesContainer />
    </MainLayout>
  );
};

export default VehiclesPage;
