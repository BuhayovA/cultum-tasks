import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 30px 70px 30px 100px;
  position: relative;
  max-height: 100vh;
  height: 100vh;
  display: flex;
  margin-top: 50px;
  align-items: center;
  z-index: 1;
  opacity: 1;
  justify-content: space-evenly;
  box-sizing: border-box;
  @media screen and (max-width: 1250px) {
    flex-direction: column-reverse;
  }
  @media screen and (max-width: 600px) {
    margin-top: 100px;
    padding: 30px 20px 70px 20px;
    text-align: center;
    img {
      margin-top: 50px;
    }
  }
  @media screen and (max-height: 600px) {
    padding-top: 100px;
  }
`;
export const SubTitleWrapper = styled.div`
  max-width: 50vh;
  @media screen and (max-width: 1200px) {
    max-width: 100%;
  }
`;
export const ButtonWrapper = styled.div`
  align-items: center;
`;
export const Image = styled.img`
  max-height: 100%;
  max-width: 100%;
`;
