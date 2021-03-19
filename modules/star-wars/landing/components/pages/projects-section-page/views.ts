import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  background: linear-gradient(to right, rgb(55, 26, 58) 6%, rgb(122, 53, 71));
  backface-visibility: hidden;
  @media screen and (max-width: 754px) {
  }
`;
export const SectionWrapper = styled.div`
  min-height: 100vh;
  backface-visibility: hidden;
  transform: translateZ(0px);
  padding-left: 250px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 1250px) {
    flex-direction: column-reverse;
  }

  @media screen and (max-width: 1000px) {
    padding-left: 0px;
  }
`;

export const Image = styled.img`
  @media screen and (max-width: 800px) {
    width: 95%;
  }
`;

export const ProjectsInfoWrapper = styled.div`
  @media screen and (max-width: 600px) {
    width: 100vh;
    font-size: 12px;
    justify-content: center;
    text-align: center;
  }
  @media screen and (max-width: 350px) {
    width: 100vh;
    font-size: 10px;
    justify-content: center;
    text-align: center;
  }
  @media screen and (max-width: 700px) {
    padding-left: 0px;
    max-width: 70%;
  }
`;
