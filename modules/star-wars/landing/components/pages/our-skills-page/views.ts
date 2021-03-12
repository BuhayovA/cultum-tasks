import styled from 'styled-components';

export const Wrapper = styled.div`
  backface-visibility: hidden;
  transform: translateZ(0px);
  min-height: 750px;
  position: relative;
  padding: 0 10vw 50px 450px;
  display: flex;
  justify-content: space-around;
  z-index: 2;
  background: rgb(255, 255, 255);
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    padding: 0 10vw 50px 0px;
  }
`;

export const Devises = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 350px;
  z-index: 1;
  @media screen and (max-width: 1000px) {
    position: initial;
  }
`;
export const OurSkillsContent = styled.div`
  max-width: 850px;
  width: 100%;
  color: rgb(84, 75, 75);
  z-index: 10;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;
export const TitleWrapper = styled.div`
  max-width: 500px;
  @media screen and (max-width: 600px) {
    padding: 10vh 0 0 50px;
    text-align: center;
  }
`;
export const SkillRowWrapper = styled.div`
  padding-top: 60px;
  display: grid;
  grid-template-columns: 400px 400px;
  
  @media screen and (max-width: 1300px) {
    grid-template-columns: 100vh;
    padding: 10vh 0 0 50px;
  }
  
  @media screen and (max-width: 600px) {
    grid-template-columns: 500px;
    padding: 10vh 0 0 50px;
  }
`;
