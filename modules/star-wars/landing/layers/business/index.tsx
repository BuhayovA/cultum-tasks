import React, { useEffect, useState } from 'react';

interface Context {
  transform: string;
}

export const LandingBLContext = React.createContext<Context>({
  transform: ''
});

const LandingBLContextProvider: React.FC = ({ children }) => {
  const [transform, setTransform] = useState('');

  const mouseHandler = (e: MouseEvent) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    setTransform(`translate(-${x * 50}px, -${y * 50}px)`);
  };

  useEffect(() => {
    window.addEventListener('mousemove', mouseHandler);

    return () => {
      window.removeEventListener('mousemove', mouseHandler);
    };
  }, []);

  return (
    <LandingBLContext.Provider
      value={{
        transform
      }}
    >
      {children}
    </LandingBLContext.Provider>
  );
};

export default LandingBLContextProvider;
