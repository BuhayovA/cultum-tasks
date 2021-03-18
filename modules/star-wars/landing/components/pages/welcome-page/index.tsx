//hooks
import React, { useEffect, useMemo, useRef } from 'react';
//views
import { DescriptionsWrapper, Wrapper, Image, InfoWrapper, LeftPlanet, RightPlanet, ImageWrapper } from './views';
import Description from '@md-ui/description';
import Title from '@md-ui/titles/main';
import Button from '@md-ui/buttons/main';

interface Props {
  transform: { x: number; y: number };
  mouseHandler: (e: MouseEvent) => void;
}

const WelcomePage: React.FC<Props> = ({ transform, mouseHandler }) => {
  const welcomePageWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    welcomePageWrapperRef.current && welcomePageWrapperRef.current.addEventListener('mousemove', mouseHandler);

    return () => {
      welcomePageWrapperRef.current && welcomePageWrapperRef.current.removeEventListener('mousemove', mouseHandler);
    };
  }, []);

  return (
    <Wrapper ref={welcomePageWrapperRef}>
      {useMemo(() => {
        return (
          <DescriptionsWrapper>
            <InfoWrapper>
              <Title>High speed web and mobile apps development</Title>
              <Description color={'black'}>Full-stack development, based on empathy.</Description>
            </InfoWrapper>
            <Button>Drop us a line</Button>
          </DescriptionsWrapper>
        );
      }, [])}
      <ImageWrapper>
        <LeftPlanet transform={transform} background={''} src='/static/images/left-planet.svg' />
        <RightPlanet transform={transform} background={''} src='/static/images/right-planet.svg' />
        <Image src='/static/images/cultum.svg' alt='illustration' />
      </ImageWrapper>
    </Wrapper>
  );
};

export default WelcomePage;
