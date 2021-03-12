import {
  Wrapper,
  ProjectsContainer,
  Image,
  ProjectsPattern,
  ProjectsPageContainer,
  CheckPoint,
  CheckedPoint,
  AboutUsContainer,
  LinesCopy,
  FooterContainer
} from './views';
import React, { useContext } from 'react';
import WelcomePage from '@md-star-wars/landing/components/pages/welcome-page';
import { Header } from '../../../../shared/layouts/landing-header/main/index';
import { LandingBLContext } from '@md-star-wars/landing/layers/business';
import ProjectsPage from '@md-star-wars/landing/components/pages/projects-section-page';
import AboutUsSection from '@md-star-wars/landing/components/pages/about-us-section';
import CommentsPage from '../../components/pages/comments-page';
import FooterPage from '../../components/pages/footer-page/index';
import OurSkillsPage from '@md-star-wars/landing/components/pages/our-skills-page';

const LandingPresentation = () => {
  const {
    transform,
    handleScroll,
    inProjectsPageArea,
    scrollPosition,
    rotate,
    commentsState,
    nextSlide,
    prevSlide,
    sliderRef
  } = useContext(LandingBLContext);

  return (
    <Wrapper onScroll={(e) => handleScroll(e)}>
      <Header>
        <WelcomePage transform={transform} />
      </Header>
      <ProjectsContainer>
        {/*TODO move the logic of checkpoints into a separate component */}
        <ProjectsPattern position={inProjectsPageArea} scrollPosition={scrollPosition}>
          <Image src='/static/images/earth.png' alt='adas' />

          <CheckPoint rotate='45deg'></CheckPoint>
          <CheckPoint rotate='90deg'></CheckPoint>
          <CheckPoint rotate='135deg'></CheckPoint>
          <CheckedPoint rotate={rotate} src='/static/images/slider.png' alt='slider' />
        </ProjectsPattern>
        <ProjectsPageContainer>
          <LinesCopy top='20%' src='/static/images/lines-copy_2.png' alt='lines-1' />
          <LinesCopy top='60%' src='/static/images/lines-copy-2.png' alt='lines-2' />
          <ProjectsPage
            subTitle={'Web development - Node.js and React.'}
            img={'/static/images/picture-1.png'}
            title={'Property Management'}
            descriptions={'Evolving and expanding renting experience'}
          />
          <ProjectsPage
            subTitle={'Evolving and expanding caring for a skin.'}
            img={'/static/images/picture-2.png'}
            title={'Skin Care'}
            descriptions={'Web development - Ruby On Rails and Vue.js'}
          />
          <ProjectsPage
            subTitle={'Evolving and expanding aggregation of financial loans.'}
            img={'/static/images/picture-3.png'}
            title={'Credit Loans'}
            descriptions={'Web development - GraphQL and React.js'}
          />
        </ProjectsPageContainer>
      </ProjectsContainer>
      <AboutUsContainer>
        <AboutUsSection />
        <OurSkillsPage />
        <CommentsPage sliderRef={sliderRef} nextSlide={nextSlide} prevSlide={prevSlide} commentsState={commentsState} />
      </AboutUsContainer>
      <FooterContainer>
        <FooterPage />
      </FooterContainer>
    </Wrapper>
  );
};

export default LandingPresentation;
