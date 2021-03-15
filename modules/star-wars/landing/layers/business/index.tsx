import React, { useEffect, useState } from 'react';
import { Comment } from '@md-shared/types/comment';
import { useScrollPagination } from '@md-shared/hooks/orbitPagination';

interface Context {
  transform: {
    x: number;
    y: number;
  };
  handleScroll: (e: React.UIEvent<HTMLElement>) => void;
  inProjectsPageArea: boolean;
  positionPagination: string | undefined;
  initialPage: 'first' | 'second' | 'third';
  commentsState: Comment[];
}

export const LandingBLContext = React.createContext<Context>({
  transform: { x: 0, y: 0 },
  handleScroll: () => {},
  inProjectsPageArea: false,
  positionPagination: '0',
  initialPage: 'first',
  commentsState: []
});

const LandingBLContextProvider: React.FC = ({ children }) => {
  const { handleScroll, inProjectsPageArea, positionPagination, initialPage } = useScrollPagination(8, 1, '127.925px');
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

  return (
    <LandingBLContext.Provider
      value={{
        transform,
        handleScroll,
        inProjectsPageArea,
        positionPagination,
        initialPage,
        commentsState
      }}
    >
      {children}
    </LandingBLContext.Provider>
  );
};

export default LandingBLContextProvider;
