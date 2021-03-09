import React from 'react';
import { Wrapper } from './views'

const Description: React.FC = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
};

export default Description;