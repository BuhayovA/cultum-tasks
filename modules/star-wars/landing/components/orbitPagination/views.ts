import styled from 'styled-components';

interface Props {
  position?: boolean;
  positionPagination?: string;
  rotate?: string;
}

export const PaginationWrapper = styled.div`
  position: ${({ position }: Props) => (position ? 'fixed' : 'absolute')};
  z-index: 10;
  right: 100%;
  top: ${({ positionPagination }) => positionPagination};
  min-width: 65vh;
  min-height: 65vh;
  transform: translateX(190px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const Image = styled.img`
  position: absolute;
  right: 190px;
  top: 50%;
  transform: translateY(-50%) translateX(100%);
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
