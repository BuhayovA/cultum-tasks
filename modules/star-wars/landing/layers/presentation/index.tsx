import { Wrapper } from './views';
import React from 'react';
import WelcomePage from '@md-star-wars/landing/components/pages/welcome-page';
import { Header } from '../../../../shared/layouts/landing-header/main/index';

const LandingPresentation = () => {
  return (
    <Wrapper>
      <Header>
        <WelcomePage />
      </Header>
    </Wrapper>
  );
};

export default LandingPresentation;