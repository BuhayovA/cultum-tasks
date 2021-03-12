import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import { Comment } from '@md-shared/types/comment';

interface Context {
  transform: {
    x: number;
    y: number;
  };
  handleScroll: (e: React.UIEvent<HTMLElement>) => void;
  inProjectsPageArea: boolean;
  scrollPosition: string;
  rotate: string;
  commentsState: Comment[];
  nextSlide: () => void;
  prevSlide: () => void;
  sliderRef: { current: Slider | null };
}

export const LandingBLContext = React.createContext<Context>({
  transform: { x: 0, y: 0 },
  handleScroll: () => {},
  inProjectsPageArea: false,
  scrollPosition: '0',
  rotate: '45deg',
  commentsState: [],
  nextSlide: () => {},
  prevSlide: () => {},
  sliderRef: { current: null }
});

const LandingBLContextProvider: React.FC = ({ children }) => {
  const [inProjectsPageArea, setInProjectsPageArea] = useState(false);
  const [scrollPosition, setScrollPosition] = useState('127.925px');
  const [rotate, setRotate] = useState('45deg');

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    e.currentTarget.scrollTop >= window.innerHeight && e.currentTarget.scrollTop < 3 * window.innerHeight
      ? setInProjectsPageArea(true)
      : setInProjectsPageArea(false);

    if (e.currentTarget.scrollTop + window.innerHeight <= e.currentTarget.scrollHeight - 6 * window.innerHeight + 300) {
      setRotate('45deg');
    } else if (
      e.currentTarget.scrollTop + window.innerHeight <=
      e.currentTarget.scrollHeight - 5 * window.innerHeight + 300
    ) {
      setRotate('90deg');
    } else {
      setRotate('135deg');
    }
    e.currentTarget.scrollTop < 3 * window.innerHeight
      ? setScrollPosition('127.925px')
      : setScrollPosition(`${window.innerHeight * 2 + 100}px`);
  };

  // parallax effect
  const [transform, setTransform] = useState({ x: 0, y: 0 });
  const mouseHandler = (e: MouseEvent) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    setTransform((prevState) => ({
      ...prevState,
      x: -(x * 50),
      y: -(y * 50)
    }));
  };
  //mouse event did mount and will unmount
  useEffect(() => {
    window.addEventListener('mousemove', mouseHandler);

    return () => {
      window.removeEventListener('mousemove', mouseHandler);
    };
  }, []);

  //local comments state
  const commentsState = [
    {
      name: 'Andrew',
      company: 'ceo huge',
      image: '',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur at dolore dolorem ducimus harum incidunt ipsum nobis, nulla odit, optio perspiciatis praesentium qui quidem similique, soluta vitae. Autem, mollitia?'
    },
    {
      name: 'Egor',
      company: 'ceo huge',
      image: '',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam, delectus doloremque ducimus ea explicabo fugit ipsa itaque modi necessitatibus odio quam quidem quisquam quod reiciendis, repellendus repudiandae, sapiente. Aliquid.'
    },
    {
      name: 'Max',
      company: 'ceo huge',
      image: '',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    }
  ];
  //ref to slider
  const sliderRef = useRef<Slider>(null);
  /*TODO add types */
  const nextSlide = () => {
    // @ts-ignore
    sliderRef.current.slickNext();
  };
  const prevSlide = () => {
    // @ts-ignore
    sliderRef.current.slickPrev();
  };

  return (
    <LandingBLContext.Provider
      value={{
        transform,
        handleScroll,
        inProjectsPageArea,
        scrollPosition,
        rotate,
        commentsState,
        nextSlide,
        prevSlide,
        sliderRef
      }}
    >
      {children}
    </LandingBLContext.Provider>
  );
};

export default LandingBLContextProvider;
