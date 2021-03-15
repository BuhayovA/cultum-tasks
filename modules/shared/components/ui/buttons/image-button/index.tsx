import React from 'react';
import { Wrapper, Image, Text } from './views';

interface Props {
  image?: string;
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large';
}

const ImageButton: React.FC<Props> = ({ children, size, image, onClick }) => {
  return (
    <Wrapper onClick={onClick} size={size}>
      <Image src={image ? image : '/static/images/shape_2.png'} alt={image} />
      <Text>{children}</Text>
    </Wrapper>
  );
};

export default ImageButton;
