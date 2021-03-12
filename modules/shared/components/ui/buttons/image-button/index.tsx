import React from 'react';
import { Wrapper, Image, Text } from './views';

interface Props {
  image?: string;
  onClick?: () => void;
}

const ImageButton: React.FC<Props> = ({ children, image, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <Image src={image ? image : '/static/images/shape_2.png'} alt={image} />
      <Text>{children}</Text>
    </Wrapper>
  );
};

export default ImageButton;
