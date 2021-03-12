import React from 'react';
import { Wrapper, AstronautImage, MoonContentWrapper, DescriptionsWrapper, BTWrapper } from './views';
import Description from '@md-ui/description';
import Title from '@md-ui/titles/main';
import Button from '@md-ui/buttons/main';

const FooterPage = () => {
  return (
    <Wrapper>
      <AstronautImage src='/static/images/astronaut-flag@3x.png' alt='astronaut-flag' />
      <MoonContentWrapper>
        <BTWrapper>
          <Title color='rgb(255,255,255)' fontSize='1.6em'>We're just aa excited about your idea.</Title>
          <Button>Tell us more</Button>
          <DescriptionsWrapper>
            <Description fontSize='1.1em'>2018 Cultum LLC. All rights reserved.</Description>
          </DescriptionsWrapper>
        </BTWrapper>
      </MoonContentWrapper>
    </Wrapper>
  );
};

export default FooterPage;
