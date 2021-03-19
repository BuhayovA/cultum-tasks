import React, { useMemo } from 'react';
import ProjectsPage from '@md-star-wars/landing/components/pages/projects-section-page';
import styled from 'styled-components';
import OrbitPagination from '@md-star-wars/landing/components/orbitPagination';

interface Props {
  inProjectsPageArea: boolean;
  positionPagination: string | undefined;
  initialPage: 'first' | 'second' | 'third';
}

/*TODO bring the array to the constants file*/
const ProjectPagesState = [
  {
    subTitle: 'Web development - Node.js and React.',
    img: '/static/images/picture-1.png',
    title: 'Property Management',
    descriptions: 'Evolving and expanding renting experience'
  },
  {
    subTitle: 'Evolving and expanding caring for a skin.',
    img: '/static/images/picture-2.png',
    title: 'Skin Care',
    descriptions: 'Web development - Ruby On Rails and Vue.js'
  },
  {
    subTitle: 'Evolving and expanding aggregation of financial loans.',
    img: '/static/images/picture-3.png',
    title: 'Credit Loans',
    descriptions: 'Web development - GraphQL and React.js'
  }
];

const ProjectsPageContainer: React.FC<Props> = ({ inProjectsPageArea, positionPagination, initialPage }) => {
  return (
    <>
      {useMemo(() => {
        return (
          <OrbitPagination
            inProjectsPageArea={inProjectsPageArea}
            positionPagination={positionPagination}
            initialPage={initialPage}
          >
            <Wrapper>
              {ProjectPagesState.map((page, index) => (
                <ProjectsPage
                  key={index}
                  title={page.title}
                  subTitle={page.subTitle}
                  descriptions={page.descriptions}
                  img={page.img}
                />
              ))}
            </Wrapper>
          </OrbitPagination>
        );
      }, [initialPage, inProjectsPageArea, positionPagination])}
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
`;

export default ProjectsPageContainer;
