import React from 'react';
import Slider from 'react-slick';
import { ArrowButtonsWrapper, SliderWrapper, TitleWrapper, Wrapper } from './views';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Comment } from '@md-shared/types/comment';
import Title from '@md-ui/titles/main';
import CommentCard from '@md-ui/card/comment-card';
import ImageButton from '@md-ui/buttons/image-button';

interface Props {
  commentsState: Comment[];
  nextSlide: () => void;
  prevSlide: () => void;
  sliderRef: { current: Slider | null };
}
const sliderSetting = {
  dots: false,
  arrow: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  className: 'slider'
};

const CommentsPage: React.FC<Props> = ({ commentsState, nextSlide, prevSlide, sliderRef }) => {
  /*TODO move the slider into a separate component*/
  return (
    <Wrapper>
      <TitleWrapper>g
        <Title>Seems like our clients love us…</Title>
      </TitleWrapper>
      <SliderWrapper>
        <Slider ref={sliderRef} {...sliderSetting}>
          {commentsState.map((comment, index) => (
            <CommentCard text={comment.comment} key={index} name={comment.name} company={comment.company} />
          ))}
        </Slider>
        <ArrowButtonsWrapper>
          <ImageButton onClick={prevSlide} image='/static/images/shape-copy-4.png' />
          <ImageButton onClick={nextSlide} image='/static/images/shape.png' />
        </ArrowButtonsWrapper>
      </SliderWrapper>
    </Wrapper>
  );
};

export default CommentsPage;
