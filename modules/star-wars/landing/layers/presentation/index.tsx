//Context
import React, { useContext } from 'react';
//types
import { LandingBLContext } from '@md-star-wars/landing/layers/business';
//all pages
import WelcomePage from '@md-star-wars/landing/components/pages/welcome-page';
import FooterPage from '../../components/pages/footer-page/index';
//views
import { Header } from '../../../../shared/layouts/landing-header/main/index';
import ProjectsPageContainer from '../../components/conteiners/ProjectsPages';
import { Wrapper, ProjectsWrapper, LinesCopy, FooterContainer } from './views';
import { useScrollPagination } from '@md-shared/hooks/orbitPagination';
import AboutUsContainer from '@md-star-wars/landing/components/conteiners/AboutUs';

const LandingPresentation = () => {
  const { handleScroll, inProjectsPageArea, positionPagination, initialPage } = useScrollPagination(8, 1, '127.925px');
  //use bll context here
  const { transform, mouseHandler } = useContext(LandingBLContext);

  return (
    <Wrapper onScroll={(e) => handleScroll(e)}>
      <Header>
        <WelcomePage transform={transform} mouseHandler={mouseHandler} />
      </Header>
      <ProjectsWrapper>
        <LinesCopy top='60%' src='/static/images/lines-copy-2.png' alt='lines-2' />
        <LinesCopy top='20%' src='/static/images/lines-copy_2.png' alt='lines-1' />
        <ProjectsPageContainer
          inProjectsPageArea={inProjectsPageArea}
          positionPagination={positionPagination}
          initialPage={initialPage}
        />
      </ProjectsWrapper>
      <AboutUsContainer />
      <FooterContainer>
        <FooterPage />
      </FooterContainer>
    </Wrapper>
  );
};

export default LandingPresentation;
