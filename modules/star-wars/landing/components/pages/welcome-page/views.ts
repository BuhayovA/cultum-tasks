import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 30px 70px 30px 100px;
  min-height: 100vh;
  height: 100vh;
  display: flex;
  align-items: center;
  z-index: 1;
  opacity: 1;
  transform: translateZ(0px);
  justify-content: space-around;
  
  @media screen and (max-width: 1200px) {
    flex-direction: column-reverse;
    padding-top: 100px;
  }
`;
export const DescriptionsWrapper = styled.div`
  flex-flow: column;
`;

export const InfoWrapper = styled.div`
  position: relative;
  max-width: 500px;
`

export const Image = styled.img`
  z-index: -1;
`;

