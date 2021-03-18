import React from 'react';
import { Devises, Wrapper, OurSkillsContent, Header, TitleWrapper, SkillRowWrapper } from './views';
import SkillCard from '@md-ui/card/main';
import Title from '@md-ui/titles/main';
import ImageButton from '@md-ui/buttons/image-button';
import SkillItem from '@md-ui/card/skill-item';

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
          <ImageButton>all services</ImageButton>
        </Header>
        <SkillRowWrapper>
          {/*// TODO: should be array of items here with map */}

          <SkillItem
            title='Web Development'
            image='/static/images/web-dev.png'
            description={'Lorem ipsum dolor sit amet, consectetur adipisicing.'}
          />
          <SkillItem
            title='Mobile Development'
            image='/static/images/mobile.png'
            description={'Lorem ipsum dolor sit amet, consectetur adipisicing.'}
          />
          <SkillItem
            title='E-commerce'
            image='/static/images/e-commerce.png'
            description={'Lorem ipsum dolor sit amet, consectetur adipisicing.'}
          />
          <SkillItem
            title='SAAS'
            image='/static/images/saas.png'
            description={'Lorem ipsum dolor sit amet, consectetur adipisicing.'}
          />
        </SkillRowWrapper>
      </OurSkillsContent>
    </Wrapper>
  );
};

export default OurSkillsPage;
