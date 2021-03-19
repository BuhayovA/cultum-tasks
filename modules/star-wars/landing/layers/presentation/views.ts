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

export const ProjectsWrapper = styled.div`
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

export const FooterContainer = styled.div`
  position: relative;
  z-index: 1;
  height: 100vh;
`;

export const LinesCopy = styled.img`
  position: absolute;
  top: ${({ top }: Props) => top};
  right: 0;
  z-index: 2;
`;
