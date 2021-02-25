import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const DWrapper = styled.div`
  font-size: 18px;
  color: #fafafa;
  padding-left: 32px;
`;

export const ImgWrapper = styled.div`
  justify-content: space-between;
  transition: all 0.5s ease;
  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    transform: scale(1.02);
  }
`;
export const TitleWrapper = styled.div`
  padding-bottom: 24px;
  font-size: 32px;
  font-weight: 600;
  color: white;
  text-align: center;
`;
export const Image = styled.img`
  max-width: 650px;
  height: auto;
  overflow: hidden;
  justify-content: center;
  user-select: none;
  pointer-events: none;
`;
