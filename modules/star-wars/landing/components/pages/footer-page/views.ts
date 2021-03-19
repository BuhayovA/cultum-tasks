import styled from 'styled-components';

export const Wrapper = styled.div`
  backface-visibility: hidden;
  left: 0px;
  right: 0px;
  bottom: 0px;
  min-height: 100vh;
  color: rgb(255, 255, 255);
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  display: flex;
  transform: translateZ(0px);
  &:before {
    position: absolute;
    inset: 0px;
  }
`;

export const MoonContentWrapper = styled.div`
  position: relative;
  min-height: 500px;
  margin-top: 50vh;
  width: 100%;
  height: 100%;
  padding: 15vh 30px 10px;
  justify-self: flex-end;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  flex: 1 1 0%;
  &:before {
    content: '';
    position: absolute;
    inset: 0px;
    background: url(/static/images/moon.png) center top / cover no-repeat;
    z-index: -1;
  }
`;

export const BTWrapper = styled.div`
  max-width: 500px;
  z-index: 3;
  text-align: center;
  margin-top: 100px;
  inset: 0;
`;

export const AstronautImage = styled.img`
  width: 230px;
  position: absolute;
  top: -95px;
  left: 52%;
  transform: translate3d(-40%, -35%, 0px);
  z-index: 2;
`;

export const DescriptionWrapper = styled.div`
  margin-top: 10vh;
`;
