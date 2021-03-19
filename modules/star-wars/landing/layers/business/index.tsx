//hooks
import React, { useCallback, useState } from 'react';

interface Context {
  transform: {
    x: number;
    y: number;
  };
  mouseHandler: (e: MouseEvent) => void;
}

export const LandingBLContext = React.createContext<Context>({
  transform: { x: 0, y: 0 },
  mouseHandler: () => {}
});

const LandingBLContextProvider: React.FC = ({ children }) => {
  // parallax effect
  const [transform, setTransform] = useState({ x: 0, y: 0 });

  const mouseHandler = useCallback((e: MouseEvent) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    setTransform((prevState) => ({
      ...prevState,
      x: -(x * 50),
      y: -(y * 50)
    }));
  }, []);

  return (
    <LandingBLContext.Provider
      value={{
        transform,
        mouseHandler
      }}
    >
      {children}
    </LandingBLContext.Provider>
  );
};

export default LandingBLContextProvider;
