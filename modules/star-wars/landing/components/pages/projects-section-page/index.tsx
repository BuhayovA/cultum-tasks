import React from 'react';
import { SectionWrapper, Wrapper, ProjectsInfoWrapper, Image } from './views';
import SubTitle from '@md-ui/sub-title';
import Description from '@md-ui/description';
import ProjectsTitle from '@md-ui/titles/projects-title';
import ImageButton from '@md-ui/buttons/image-button';

interface Props {
  title: string;
  subTitle: string;
  descriptions: string;
  img: string;
}

const ProjectsPage: React.FC<Props> = ({ title, subTitle, descriptions, img }) => {
  return (
    <Wrapper>
      <SectionWrapper>
        <ProjectsInfoWrapper>
          <ProjectsTitle>{title}</ProjectsTitle>
          <SubTitle>{subTitle}</SubTitle>
          <Description>{descriptions}</Description>
          <div>
            <ImageButton>view projects</ImageButton>
          </div>
        </ProjectsInfoWrapper>
        <Image src={img} alt='picture' />
      </SectionWrapper>
    </Wrapper>
  );
};

export default ProjectsPage;
