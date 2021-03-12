import { Wrapper } from './views';
import React from 'react';

interface Props {
  width?: string;
  height?: string;
  image?: string;
  top?: string;
  left?: string;
  zIndex?: string;
  backgroundColor?: string;
}

const SkillCard: React.FC<Props> = ({ width, backgroundColor, zIndex, height, image, top, left }) => {
  return (
    <Wrapper width={width} height={height} top={top} backgroundColor={backgroundColor} zIndex={zIndex} left={left}>
      <img src={image} alt={image} />
    </Wrapper>
  );
};

export default SkillCard;
