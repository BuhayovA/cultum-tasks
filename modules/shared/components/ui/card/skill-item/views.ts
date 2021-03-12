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
  position: relative;
  display: flex;
`;

export const ImageWrapper = styled.div``;

export const ItemWrapper = styled.div`
  flex-direction: column;
  margin: 0px 50px 40px;
`;
export const Title = styled.span`
  font-size: 24px;
`;
