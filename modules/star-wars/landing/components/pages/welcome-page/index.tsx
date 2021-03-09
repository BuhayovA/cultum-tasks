import React, { useState } from 'react';
//views
import { DescriptionsWrapper, Wrapper, Image, InfoWrapper } from './views';
import Button from '@md-star-wars/landing/components/button';
import Title from '@md-star-wars/landing/components/title';
import Description from '@md-star-wars/landing/components/description';

interface Props {
  transform: string;
}

const WelcomePage: React.FC<Props> = ({ transform }) => {
  return (
    <Wrapper>
      <DescriptionsWrapper>
        <InfoWrapper>
          <Title>High speed web and mobile apps development</Title>
          <Description>Full-stack development, based on empathy.</Description>
        </InfoWrapper>
        <Button>Drop us a line</Button>
      </DescriptionsWrapper>

      <Image transform={transform} src='/static/images/illustration.png' alt='illustration' />
    </Wrapper>
  );
};

export default WelcomePage;
