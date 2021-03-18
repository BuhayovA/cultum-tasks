import styled from 'styled-components';

interface Props {
  background: string;
  transform: { x: number; y: number };
}

export const Wrapper = styled.div`
  padding: 30px 70px 30px 100px;
  position: relative;
  min-height: 100vh;
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 1;
  opacity: 1;
  transform: translateZ(0px);
  justify-content: space-around;
  overflow: hidden;

  @media screen and (max-width: 1250px) {
    overflow: visible;
    padding: 10px;
    flex-direction: column-reverse;
  }
`;
export const DescriptionsWrapper = styled.div`
  flex-flow: column;
  @media screen and (max-width: 1250px) {
    text-align: center;
  }
`;

export const InfoWrapper = styled.div`
  position: relative;
  max-width: 500px;
`;

export const Image = styled.img`
  width: 500px;
  max-height: inherit;
  z-index: 2;
`;

export const LeftPlanet = styled.img.attrs<Props>(({ transform }) => ({
  style: {
    transform: `translate3d(${transform.x / 5}px,${transform.y / 5}px, 0px)`
  }
}))`
  position: absolute;
  max-width: 50px;
  width: 15%;
  top: -5%;
  left: 15%;
  z-index: 5;
  background: ${({ background }: Props) => background};
`;

export const RightPlanet = styled.img.attrs<Props>(({ transform }) => {
  return {
    style: {
      transform: `translate3d(${transform.x}px,${transform.y}px, 0px)`
    }
  };
})`
  position: absolute;
  max-width: 120px;
  width: 25%;
  top: 30%;
  right: 0px;
  z-index: 5;
  background: ${({ background }: Props) => background};
`;

export const ImageWrapper = styled.div`
  position: relative;
  max-width: 600px;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: calc(100vh - 60px);
`;
