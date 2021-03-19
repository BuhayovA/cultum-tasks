import styled from 'styled-components';

export const Wrapper = styled.div`
  bottom: 0px;
  display: flex;
  right: 0px;
  min-height: 100%;
  max-height: 100%;
  min-width: 65%;
  z-index: 0;
  padding: 30px 70px 30px 100px;
  height: 100vh;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (max-width: 1250px) {
    flex-direction: column-reverse;
    height: auto;
  }
  @media screen and (max-width: 700px) {
    padding: 20px;
    text-align: center;
  }
`;
export const SubTitleWrapper = styled.div`
  max-width: 50vh;
  @media screen and (max-width: 700px) {
    max-width: 100%;
  }
`;
export const Image = styled.img`
  max-height: 100%;
  max-width: 100%;
`;
export const BSTWrapper = styled.div`
  justify-content: center;
`;
