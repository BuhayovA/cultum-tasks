import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  position: relative;
  backface-visibility: hidden;
  transform: translateZ(0px);
  min-height: 0px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  z-index: 2;
  background: rgb(255, 255, 255);
  padding: 150px 50px 0 0;

  @media screen and (max-width: 1470px) {
    flex-direction: column;
  }
`;

export const SliderWrapper = styled.div`
  max-width: 100vh;
  position: relative;
  height: auto;
  color: rgb(84, 75, 75);
  margin: 0px;
  padding: 10px 50px;
  display: block;
`;

export const TitleWrapper = styled.div`
  position: relative;
  font-family: Assistant, sans-serif;
  font-weight: 800;
  font-size: 33px;
  line-height: 1;
  max-width: 350px;
  margin: 0px 50px;

  @media screen and (max-width: 1470px) {
    max-width: 100vh;
  }
  @media screen and (max-width: 700px) {
    text-align: center;
  }
`;

export const ArrowButtonsWrapper = styled.div`
  //background: white;
  //width: 100%;
  display: flex;
  position: inherit;
  bottom: 100px;
  left: 70vh;
`;
