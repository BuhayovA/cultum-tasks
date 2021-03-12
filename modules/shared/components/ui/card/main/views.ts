import styled from 'styled-components';

interface Props {
  width?: string;
  height?: string;
  top?: string;
  left?: string;
  zIndex?: string;
  backgroundColor?: string;
}

export const Wrapper = styled.div`
  position: absolute;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  border-radius: 7px;
  box-shadow: 0px 0px 40px 0px rgb(141 151 158 / 30%);
  width: ${({ width }: Props) => width};
  height: ${({ height }: Props) => height};
  top: ${({ top }: Props) => top};
  left: ${({ left }: Props) => left};
  background-color: ${({ backgroundColor }: Props) => (backgroundColor ? backgroundColor : 'rgb(255,255,255)')};
  z-index: ${({ zIndex }: Props) => zIndex};
`;
