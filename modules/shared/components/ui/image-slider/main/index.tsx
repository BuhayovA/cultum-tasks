import React, { useState } from 'react';
import { ArrowButtonLeft, ArrowButtonRight, ArrowButtonWrapper, SliderWrapper, Image, ImageWrapper } from './views';

interface Props {
  images: string[];
  currentSlide?: number;
}

const ImageSlider: React.FC<Props> = ({ images, currentSlide = 0 }) => {
  const [current, setCurrent] = useState(currentSlide);
  const length = images.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(images) || length <= 0) {
    return null;
  }

  return (
    <SliderWrapper>
      {images.length > 1 && (
        <ArrowButtonWrapper>
          <ArrowButtonRight src='/static/images/right-arrow.svg' onClick={nextSlide} />
          <ArrowButtonLeft src='/static/images/left-arrow.svg' onClick={prevSlide} />
        </ArrowButtonWrapper>
      )}
      {images.map((image, index) => {
        return (
          <ImageWrapper key={index} active={index === current}>
            {index === current && <Image src={image} />}
          </ImageWrapper>
        );
      })}
    </SliderWrapper>
  );
};
export default ImageSlider;
