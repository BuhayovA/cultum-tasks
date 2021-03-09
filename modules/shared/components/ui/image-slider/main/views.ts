import styled from 'styled-components';

interface Props {
  active: boolean;
}

export const SliderWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ArrowButtonWrapper = styled.div`
  /*TODO*/
`;

export const ImageWrapper = styled.div`
  opacity: ${({ active }: Props) => (active ? '1' : '0')};
  transition-duration: 0.5s;
  transform: ${({ active }: Props) => active && 'scale(1.05)'};
`;

export const ArrowButtonLeft = styled.img`
  position: absolute;
  width: 50px;
  height: 50px;
  top: 50%;
  left: 32px;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;
export const ArrowButtonRight = styled.img`
  position: absolute;
  width: 50px;
  height: 50px;
  top: 50%;
  right: 32px;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;

export const Image = styled.img`
  max-width: 1000px;
  height: 600px;
  border-radius: 10px;
`;
