import styled from 'styled-components';

interface Props {
  size?: 'small' | 'medium' | 'large';
}


export const Wrapper = styled.div<Props>`
  ${({ size }) => size}
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  color: rgb(255, 128, 118);
  cursor: pointer;
  transition: opacity 0.2s ease-in-out 0s;
  margin-top: 80px;
`;
export const Image = styled.img`
  width: 52px;
  height: 14px;
`;
export const Text = styled.span`
  text-transform: uppercase;
  letter-spacing: 5px;
  line-height: 30px;
  margin-left: 10px;
`;
