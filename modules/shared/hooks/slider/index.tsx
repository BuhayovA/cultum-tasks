import { useCallback, useRef } from 'react';
import Slider from 'react-slick';

// TODO: add types for useSlider here | useSlider = (): TYPE => ...

export const useSlider = () => {
  const sliderRef = useRef<Slider>(null);

  const nextSlide = useCallback(() => {
    sliderRef.current && sliderRef.current.slickNext();
  }, []);
  const prevSlide = useCallback(() => {
    sliderRef.current && sliderRef.current.slickPrev();
  }, []);

  return {
    prevSlide,
    nextSlide,
    sliderRef
  };
};
