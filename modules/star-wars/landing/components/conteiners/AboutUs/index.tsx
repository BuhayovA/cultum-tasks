import React, { useMemo } from 'react';
import styled from 'styled-components';
import AboutUsSection from '@md-star-wars/landing/components/pages/about-us-section';
import OurSkillsPage from '@md-star-wars/landing/components/pages/our-skills-page';
import CommentsPage from '@md-star-wars/landing/components/pages/comments-page';

const AboutUsContainer = () => {
  return (
    <Wrapper>
      {useMemo(() => {
        return (
          <>
            <AboutUsSection />
            <OurSkillsPage />
            <CommentsPage />
          </>
        );
      }, [])}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default AboutUsContainer;
