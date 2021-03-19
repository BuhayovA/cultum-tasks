import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  backface-visibility: hidden;
  transform: translateZ(0px);
  min-height: 0px;
  display: flex;
  justify-content: center;
  z-index: 2;
  background: rgb(255, 255, 255);
  padding: 150px 0 50px;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    padding: 25px;
  }
`;

export const SliderWrapper = styled.div`
  max-width: 70vh;
  padding: 10px 60px;
  @media screen and (max-width: 1200px) {
    padding: 0px;
    max-width: 100%;
  }
`;

export const TitleWrapper = styled.div`
  position: relative;
  font-weight: 800;
  font-size: 33px;
  line-height: 1;
  max-width: 350px;
  margin: 0px 50px;
  @media screen and (max-width: 700px) {
    text-align: center;
    width: 100%;
    max-width: 100%;
  }
`;
