import React from 'react';
import { SliderWrapper, TitleWrapper, Wrapper } from './views';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Comment } from '@md-shared/types/comment';
import Title from '@md-ui/titles/main';

import CommentsSlider from '@md-star-wars/landing/components/slider';

interface Props {
  commentsState: Comment[];
}

const CommentsPage: React.FC<Props> = ({ commentsState }) => {
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
