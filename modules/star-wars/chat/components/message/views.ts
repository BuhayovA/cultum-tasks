import styled from 'styled-components';

interface Props {
  active: boolean;
}

export const MWrapper = styled.div`
  white-space: normal;
  height: auto;
  transition: all ease 0.5s;
  border-radius: 10px;
  word-wrap: break-word;
  padding: 10px;
  background: ${({ active }: Props) => (active ? '#306ACD' : '#404556')};
  color: white;
  order: 2;
`;

export const ImagesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Wrapper = styled.div`
  display: flex;
  padding: 4px;
`;
export const UNWrapper = styled.div`
  padding-bottom: 8px;
  font-weight: 520;
`;

export const AvatarWrapper = styled.div`
  padding: 4px;
  order: 1;
`;

export const Image = styled.img`
  border-radius: 10px;
  max-height: 200px;
  width: 150px;
  cursor: pointer;
  margin: 10px 10px 0;
  flex-direction: column;
`;
