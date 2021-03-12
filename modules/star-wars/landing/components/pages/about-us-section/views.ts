import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 30px 70px 30px 100px;
  position: relative;
  margin: 0 auto;
  min-height: 100vh;
  height: 100vh;
  display: flex;
  align-items: center;
  z-index: 1;
  opacity: 1;
  justify-content: space-evenly;

  @media screen and (max-width: 1250px) {
    -webkit-flex-direction: column-reverse;
    -ms-flex-direction: column-reverse;
    flex-direction: column-reverse;
  }
  @media screen and (max-width: 700px) {
    margin-top: 50px;
    span {
      width: 250px;
    }
    img {
      max-width: 350px;
    }
  }
  @media screen and (max-width: 400px) {
    span {
      width: 250px;
    }
    img {
      max-width: 350px;
    }
  }
`;
export const SubTitleWrapper = styled.div`
  max-width: 50vh;
`;
