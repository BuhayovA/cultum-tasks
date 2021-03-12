import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  background: linear-gradient(to right, rgb(55, 26, 58) 6%, rgb(122, 53, 71));
  backface-visibility: hidden;
`;
export const SectionWrapper = styled.div`
  min-height: 100vh;
  backface-visibility: hidden;
  transform: translateZ(0px);
  padding-left: 250px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 1250px) {
    -webkit-flex-direction: column-reverse;
    -ms-flex-direction: column-reverse;
    flex-direction: column-reverse;
  }
  @media screen and (max-width: 700px) {
    padding-left: 0px;
    text-align: center;
  }

  @media screen and (max-width: 754px) {
    img {
      width: 500px;
    }
  }
  @media screen and (max-width: 700px) {
    img {
      width: 400px;
    }
  }
`;
export const ProjectsInfoWrapper = styled.div`
  @media screen and (max-width: 600px) {
    width: 50%;
    font-size: 10px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;
