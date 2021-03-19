import { Wrapper, SubTitleWrapper, Image, BSTWrapper } from './views';
import React from 'react';
import SubTitle from '@md-modules/shared/components/ui/sub-title';
import ImageButton from '@md-ui/buttons/image-button';

const AboutUsSection = () => {
  return (
    <Wrapper>
      <BSTWrapper>
        <SubTitleWrapper>
          <SubTitle color='black'>
            Oh by the way, we're Cultum. A passionate, tigt-knit team of premier specialists who can take on any
            challenge in the sphere of web and mobile app development.
          </SubTitle>
        </SubTitleWrapper>
        <ImageButton size='medium'>More about us</ImageButton>
      </BSTWrapper>
      <Image src='/static/images/spaceship-illustration.png' alt='spaceship-illustration' />
    </Wrapper>
  );
};

export default AboutUsSection;
