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
  -webkit-box-align: center;
  align-items: center;
  z-index: -1;
  display: flex;
  transform: translateZ(0px);

`;

export const MoonContentWrapper = styled.div`
  position: relative;
  min-height: 500px;
  width: 100%;
  height: 100%;
  padding: 15vh 30px 10px;
  justify-self: flex-end;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex: 1 1 0%;
  
  &:before{
    content: "";
    position: absolute;
    inset: 0px;
    background: url(/static/images/moon.png) center  no-repeat;
    background-position: bottom;
    z-index: -1;
  }
`;


export const BTWrapper = styled.div`
  max-width: 50vh;
  top: 400px;
  text-align: center;
  position: absolute;
`;

export const DescriptionsWrapper = styled.div`
  margin-top: 10vh;
`;
export const AstronautImage = styled.img`
  width: 230px;
  position: absolute;
  top: 70px;
  left: 53%;
  transform: translate3d(-40%, -35%, 0px);
  z-index: 2;
  object-fit: cover;
`;
