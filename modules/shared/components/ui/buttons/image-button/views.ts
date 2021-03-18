import styled, { css } from 'styled-components';

interface Props {
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
`;
const medium = css`
  max-width: 400px;
  max-height: 10px;
  font-size: 12px;
  img {
    max-width: 40px;
    max-height: 10px;
  }
`;
const large = css`
  max-width: 600px;
  max-height: 55px;
  font-size: 18px;
  img {
    width: 75px;
    height: 20px;
  }
`;

export const Wrapper = styled.div<Props>`
  ${({ size }) => {
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
  }}
  min-width: 200px;
  width: 50%;
  max-width: 300px;
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
