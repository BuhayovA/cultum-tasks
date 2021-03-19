import React from 'react';
//views
import { SliderWrapper, TitleWrapper, Wrapper } from './views';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Title from '@md-ui/titles/main';

import CommentsSlider from '@md-star-wars/landing/components/slider';
//local state comments
const commentsState = [
  {
    name: 'Andrew',
    company: 'ceo huge',
    image: '',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur ea ipsam, praesentium provident qui quis?'
  },
  {
    name: 'Egor',
    company: 'ceo huge',
    image: '',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur ea ipsam, praesentium provident qui quis?'
  },
  {
    name: 'Max',
    company: 'ceo huge',
    image: '',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  }
];

const CommentsPage: React.FC = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>Seems like our clients love us…</Title>
      </TitleWrapper>
      <SliderWrapper>
        <CommentsSlider commentsState={commentsState} />
      </SliderWrapper>
    </Wrapper>
  );
};

export default CommentsPage;
