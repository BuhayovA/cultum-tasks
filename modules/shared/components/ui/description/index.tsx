import React from 'react';
import { Wrapper } from './views';

interface Props {
  color?: string;
  fontSize?: string;
}

const Description: React.FC<Props> = ({ children, fontSize, color }) => {
  return (
    <Wrapper fontSize={fontSize} color={color}>
      {children}
    </Wrapper>
  );
};

export default Description;
