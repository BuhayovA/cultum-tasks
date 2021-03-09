import React from 'react';
import LandingPresentation from '@md-star-wars/landing/layers/presentation';
import LandingBLContextProvider from '@md-star-wars/landing/layers/business';

const LandingContainer = () => {
  return (
    <LandingBLContextProvider>
      <LandingPresentation />
    </LandingBLContextProvider>
  );
};

export default LandingContainer;
