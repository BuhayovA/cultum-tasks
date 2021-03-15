import React from 'react';
import CommentCard from '@md-ui/card/comment-card';
import { ArrowButtonsWrapper, SliderWrapper } from './views';
import ImageButton from '@md-ui/buttons/image-button';
import Slider from 'react-slick';
import { Comment } from '@md-shared/types/comment';
import { useSlider } from '@md-shared/hooks/slider';

const sliderSetting = {
  dots: false,
  arrow: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  className: 'slider'
};

interface Props {
  commentsState: Comment[];
}

const CommentsSlider: React.FC<Props> = ({ commentsState }) => {
  const { prevSlide, nextSlide, sliderRef } = useSlider();

  return (
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
  );
};

export default CommentsSlider;
