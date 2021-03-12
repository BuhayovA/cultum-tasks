import styled from 'styled-components';

interface Props {
  position?: boolean;
  scrollPosition?: string;
  rotate?: string;
  top?: string;
}

export const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  height: 100%;
  box-sizing: border-box;
  line-height: 1.5em;
  overflow-x: hidden;
`;

export const ProjectsContainer = styled.div`
  position: relative;
  z-index: 1;
  background: linear-gradient(to right, rgb(55, 26, 58) 6%, rgb(122, 53, 71));
  backface-visibility: hidden;
`;

export const Image = styled.img`
  position: absolute;
  right: 190px;
  top: 50%;
  transform: translateY(-50%) translateX(100%);
`;

export const ProjectsPattern = styled.div`
  position: ${({ position }: Props) => (position ? 'fixed' : 'absolute')};
  z-index: 10;
  right: 100%;
  top: ${({ scrollPosition }) => scrollPosition};
  min-width: 65vh;
  min-height: 65vh;
  transform: translateX(190px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const CheckPoint = styled.span`
  position: absolute;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background-color: rgb(255, 206, 173);
  top: 0px;
  left: 50%;
  cursor: pointer;
  transform-origin: center calc((32.5vh + 5.5px) - 1px);
  transform: translate3d(-50%, -50%, 0px) rotateZ(${({ rotate }: Props) => rotate && rotate});
`;
export const CheckedPoint = styled.img`
  transition: transform ease 1s;
  position: absolute;
  border-radius: 50%;
  left: 50%;
  cursor: pointer;
  transform-origin: center calc((32.5vh + 5.5px) - 1px);
  transform: translate3d(-10%, 0px, 0px) rotateZ(${({ rotate }: Props) => rotate && rotate});
`;
export const AboutUsContainer = styled.div``;

export const FooterContainer = styled.div`
  position: relative;
  z-index: 1;
  height: 100vh;
`;

export const ProjectsPageContainer = styled.div`
  position: relative;
  z-index: 1;
`;

export const LinesCopy = styled.img`
  position: absolute;
  top: ${({ top }: Props) => top};
  right: 0;
  z-index: 2;
`;
