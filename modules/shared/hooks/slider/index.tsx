import { useCallback } from 'react';
import Slider from 'react-slick';

interface returnUseSlider {
  prevSlide: () => void;
  nextSlide: () => void;
}

export const useSlider = (sliderRef: { current: Slider } | React.MutableRefObject<null>): returnUseSlider => {
  const nextSlide = useCallback(() => {
    sliderRef && sliderRef.current && sliderRef.current.slickNext();
  }, []);
  const prevSlide = useCallback(() => {
    sliderRef && sliderRef.current && sliderRef.current.slickPrev();
  }, []);

  return {
    prevSlide,
    nextSlide
  };
};
