import React from 'react';
import {
  Wrapper,
  AstronautImage,
  MoonContentWrapper,
  BTWrapper,
  DescriptionWrapper,
} from './views';
import Description from '@md-ui/description';
import Title from '@md-ui/titles/main';
import Button from '@md-ui/buttons/main';

const FooterPage = () => {
  return (
    <Wrapper>
      <MoonContentWrapper>
        <AstronautImage src='/static/images/astronaut-flag@3x.png' alt='astronaut-flag' />
        <BTWrapper>
          <Title color='rgb(255,255,255)' fontSize='1.6em'>Lorem ipsum dolor sit amet, consectetur adipisicing.</Title>
          <Button>Tell us more</Button>
          <DescriptionWrapper>
            <Description fontSize='1.1em'>2018 Cultum LLC. All rights reserved.</Description>
          </DescriptionWrapper>
        </BTWrapper>
      </MoonContentWrapper>
    </Wrapper>
  );
};

export default FooterPage;
