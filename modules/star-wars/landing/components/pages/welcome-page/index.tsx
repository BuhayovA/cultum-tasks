import React from 'react';
//views
import { DescriptionsWrapper, Wrapper, Image, InfoWrapper, LeftPlanet, RightPlanet, ImageWrapper } from './views';

import Description from '@md-ui/description';
import Title from '@md-ui/titles/main';
import Button from '@md-ui/buttons/main';

interface Props {
  transform: { x: number; y: number };
}

const WelcomePage: React.FC<Props> = ({ transform }) => {
  return (
    <Wrapper>
      <DescriptionsWrapper>
        <InfoWrapper>
          <Title>High speed web and mobile apps development</Title>
          <Description color={'black'}>Full-stack development, based on empathy.</Description>
        </InfoWrapper>
        <Button>Drop us a line</Button>
      </DescriptionsWrapper>
      <ImageWrapper>
        {/*TODO*/}
        <LeftPlanet transform={transform} background={''} src='/static/images/left-planet.svg' />
        <RightPlanet transform={transform} background={''} src='/static/images/right-planet.svg' />
        <Image src='/static/images/cultum.svg' alt='illustration' />
      </ImageWrapper>
    </Wrapper>
  );
};

export default WelcomePage;
