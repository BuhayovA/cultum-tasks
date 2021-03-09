import { Wrapper } from './views';
import React, { useContext } from 'react';
import WelcomePage from '@md-star-wars/landing/components/pages/welcome-page';
import { Header } from '../../../../shared/layouts/landing-header/main/index';
import { LandingBLContext } from '@md-star-wars/landing/layers/business';

const LandingPresentation = () => {
  const { transform } = useContext(LandingBLContext);

  return (
    <Wrapper>
      <Header>
        <WelcomePage transform={transform} />
      </Header>
    </Wrapper>
  );
};

export default LandingPresentation;
