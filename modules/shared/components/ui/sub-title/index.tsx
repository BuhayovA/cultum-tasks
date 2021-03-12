import React from 'react';
import { Wrapper } from './views';

interface Props {
  color?: string;
}

const SubTitle: React.FC<Props> = ({ children, color }) => {
  return <Wrapper color={color}>{children}</Wrapper>;
};

export default SubTitle;
