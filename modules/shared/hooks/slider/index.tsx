import { useCallback, useRef } from 'react';
import Slider from 'react-slick';

interface returnUseSlider {
  prevSlide: () => void;
  nextSlide: () => void;
  sliderRef: Slider | null;
}

export const useSlider = (): returnUseSlider => {
  const sliderRef = useRef<Slider>(null).current;
  const nextSlide = useCallback(() => {
    sliderRef && sliderRef.slickNext();
  }, []);
  const prevSlide = useCallback(() => {
    sliderRef && sliderRef.slickPrev();
  }, []);

  return {
    prevSlide,
    nextSlide,
    sliderRef
  };
};
