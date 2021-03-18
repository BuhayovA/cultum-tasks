import styled from 'styled-components';

export const Wrapper = styled.div`
  justify-content: space-around;
  position: static;
  top: 0px;
  left: 0px;
  right: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  transition: all 0.3s ease 0s;
  transform: translate3d(0px, 0px, 0px);
  background: rgba(255, 255, 255, 0.05);
  padding: 30px 70px 30px 100px;
  @media screen and (max-width: 500px) {
    justify-content: space-between;
    padding: 30px 35px 30px 50px;
  }
`;
