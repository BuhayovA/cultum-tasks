import React from 'react';
//views
import SkillCard from '@md-ui/card/main';
import Title from '@md-ui/titles/main';
import ImageButton from '@md-ui/buttons/image-button';
import SkillItem from '@md-ui/card/skill-item';
import { Devises, Wrapper, OurSkillsContent, Header, TitleWrapper, SkillRowWrapper, ButtonWrapper } from './views';

/*TODO bring the array to the constants file*/
const SkillsList = [
  {
    title: 'Web Development',
    image: '/static/images/web-dev.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
  },
  {
    title: 'Mobile Development',
    image: '/static/images/mobile.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
  },
  {
    title: 'E-commerce',
    image: '/static/images/e-commerce.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
  },
  {
    title: 'SAAS',
    image: '/static/images/saas.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
  }
];

const OurSkillsPage = () => {
  return (
    <Wrapper>
      <div>
        <Devises src='/static/images/devices.png' alt='devises-img' />
        <SkillCard
          backgroundColor='rgb(229, 249, 255)'
          zIndex='4'
          image='/static/images/react.png'
          top='63px'
          left='246px'
          width='79px'
          height='75px'
        />
        <SkillCard
          zIndex='2'
          image='/static/images/nodejs-1.png'
          top='105px'
          left='130px'
          width='139px'
          height='106px'
        />
        <SkillCard
          backgroundColor='rgb(255, 226, 226)'
          zIndex='3'
          image='/static/images/ruby-on-rails-logo.png'
          top='115px'
          left='318px'
          width='82px'
          height='60px'
        />
      </div>
      <OurSkillsContent>
        <Header>
          <TitleWrapper>
            <Title>There are a couple of things we do really well.</Title>
          </TitleWrapper>
          <ButtonWrapper>
            <ImageButton>all services</ImageButton>
          </ButtonWrapper>
        </Header>
        <SkillRowWrapper>
          {SkillsList.map((skill, index) => (
            <SkillItem key={index} title={skill.title} description={skill.description} image={skill.image} />
          ))}
        </SkillRowWrapper>
      </OurSkillsContent>
    </Wrapper>
  );
};

export default OurSkillsPage;
