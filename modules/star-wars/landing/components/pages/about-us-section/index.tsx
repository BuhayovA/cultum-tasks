import { Wrapper, SubTitleWrapper } from './views';
import React from 'react';
import SubTitle from '@md-modules/shared/components/ui/sub-title';
import ImageButton from '@md-ui/buttons/image-button';

const AboutUsSection = () => {
  return (
    <Wrapper>
      <div>
        <SubTitleWrapper>
          <SubTitle color='black'>
            Oh by the way, we're Cultum. A passionate, tigt-knit team of premier specialists who can take on any
            challenge in the sphere of web and mobile app development.
          </SubTitle>
        </SubTitleWrapper>
        <ImageButton size='medium'>More about us</ImageButton>
      </div>
      <img src='/static/images/spaceship-illustration.png' alt='' />
    </Wrapper>
  );
};

export default AboutUsSection;
