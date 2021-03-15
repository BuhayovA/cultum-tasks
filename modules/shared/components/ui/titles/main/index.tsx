import React from 'react';
import { Wrapper } from './views';

interface Props {
  fontSize?: string;
  color?: string;
}

const Title: React.FC<Props> = ({ children, fontSize, color }) => {
  return (
    <Wrapper color={color} fontSize={fontSize}>
      {children}
    </Wrapper>
  );
};

export default Title;
