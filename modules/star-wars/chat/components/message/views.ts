import styled from 'styled-components';

interface Props {
  active: boolean;
}

export const MWrapper = styled.div`
  white-space: normal;
  height: auto;
  border: 1px solid #6200ee;
  transition: all ease 0.5s;
  border-radius: 10px;
  word-wrap: break-word;
  padding: 10px;
  background: ${({ active }: Props) => (active ? '#6200ee' : '#404556')};
  color: white;
  order: 2;
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
  padding: 4px;
  max-width: 450px;
  max-height: 350px;
`;

export const SliderWrapper = styled.div`
  
`;
