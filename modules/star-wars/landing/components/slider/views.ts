import styled from 'styled-components';

export const SliderWrapper = styled.div`
  max-width: 100%;
  position: relative;
  height: auto;
  color: rgb(84, 75, 75);
  margin: 0px;
  display: block;
`;

export const ArrowButtonsWrapper = styled.div`
  max-width: 95px;
  display: flex;
  position: absolute;
  bottom: 10px;
  left: 78%;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
