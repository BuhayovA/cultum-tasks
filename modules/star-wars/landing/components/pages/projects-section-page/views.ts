import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  background: linear-gradient(to right, rgb(55, 26, 58) 6%, rgb(122, 53, 71));
  backface-visibility: hidden;
  @media screen and (max-width: 754px) {
    //display: inline-block;
    //width: 500px;
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

  @media screen and (max-width: 700px) {
    padding-left: 0px;
  }
  @media screen and (max-width: 800px) {
    img {
      width: 90%;
    }
  }
`;
export const ProjectsInfoWrapper = styled.div`
  @media screen and (max-width: 600px) {
    width: 100%;
    font-size: 10px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  @media screen and (max-width: 700px) {
    padding-left: 0px;
    max-width: 60%;
    span {
      max-width: 250px;
    }
  }
`;
