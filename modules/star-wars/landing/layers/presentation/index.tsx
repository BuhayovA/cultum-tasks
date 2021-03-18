//Context
import React, { useContext } from 'react';
import { LandingBLContext } from '@md-star-wars/landing/layers/business';
//all pages
import WelcomePage from '@md-star-wars/landing/components/pages/welcome-page';
import ProjectsPage from '@md-star-wars/landing/components/pages/projects-section-page';
import AboutUsSection from '@md-star-wars/landing/components/pages/about-us-section';
import CommentsPage from '../../components/pages/comments-page';
import FooterPage from '../../components/pages/footer-page/index';
import OurSkillsPage from '@md-star-wars/landing/components/pages/our-skills-page';
import OrbitPagination from '@md-star-wars/landing/components/orbitPagination';
//views
import { Header } from '../../../../shared/layouts/landing-header/main/index';
import {
  Wrapper,
  ProjectsContainer,
  ProjectsPageContainer,
  AboutUsContainer,
  LinesCopy,
  FooterContainer
} from './views';

const LandingPresentation = () => {
  const {
    transform,
    handleScroll,
    inProjectsPageArea,
    positionPagination,
    initialPage,
    commentsState,
    mouseHandler
  } = useContext(LandingBLContext);

  return (
    <Wrapper onScroll={(e) => handleScroll(e)}>
      <Header>
        <WelcomePage transform={transform} mouseHandler={mouseHandler} />
      </Header>
      <ProjectsContainer>
        <LinesCopy top='60%' src='/static/images/lines-copy-2.png' alt='lines-2' />
        <LinesCopy top='20%' src='/static/images/lines-copy_2.png' alt='lines-1' />

        <OrbitPagination
          inProjectsPageArea={inProjectsPageArea}
          positionPagination={positionPagination}
          initialPage={initialPage}
        >
          <ProjectsPageContainer>
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
        </OrbitPagination>
      </ProjectsContainer>
      <AboutUsContainer>
        <AboutUsSection />
        <OurSkillsPage />
        <CommentsPage commentsState={commentsState} />
      </AboutUsContainer>
      <FooterContainer>
        <FooterPage />
      </FooterContainer>
    </Wrapper>
  );
};

export default LandingPresentation;
