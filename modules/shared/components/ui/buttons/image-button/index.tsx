import React from 'react';
import { Wrapper, Image, Text } from './views';
import { css } from 'styled-components';

interface Props {
  image?: string;
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large';
}

const small = css`
  max-width: 200px;
  max-height: 10px;
  font-size: 8px;
  img {
    max-width: 40px;
    max-height: 10px;
  }
`
const medium = css`
  max-width: 400px;
  max-height: 10px;
  font-size: 12px;
`
const large = css`
  max-width: 600px;
  max-height: 55px;
  font-size: 18px;
  img {
    width: 75px;
    height: 20px;
  }
`

const ImageButton: React.FC<Props> = ({ children, size, image, onClick }) => {
  return (
    <Wrapper onClick={onClick} size={(() => {
      switch (size) {
        case 'large':
          return large;
        case 'medium':
          return medium;
        case 'small':
          return small;
        default:
          return medium;
      }
    })()}>
      <Image src={image ? image : '/static/images/shape_2.png'} alt={image} />
      <Text>{children}</Text>
    </Wrapper>
  );
};

export default ImageButton;
