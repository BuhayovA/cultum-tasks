import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 30px 70px 30px 100px;
  position: relative;
  margin: 0 auto;
  max-height: 100vh;
  height: 100vh;
  display: flex;
  align-items: center;
  z-index: 1;
  opacity: 1;
  justify-content: space-evenly;
  box-sizing: border-box;
  @media screen and (max-width: 1250px) {
    -webkit-flex-direction: column-reverse;
    -ms-flex-direction: column-reverse;
    flex-direction: column-reverse;
    margin-top: 50px;
    padding: 30px 50px 70px 50px;
  }
  @media screen and (max-width: 600px) {
    margin-top: 50px;

    // TODO: you should not use span or image without class or styled component wrapper!!!
    span {
      max-width: 250px;
    }
    img {
      width: 90%;
    }
  }
`;
export const SubTitleWrapper = styled.div`
  max-width: 50vh;
`;
