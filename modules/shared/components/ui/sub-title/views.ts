import styled from 'styled-components';

interface Props {
  color?: string;
}

export const Wrapper = styled.div`
  color: ${({ color }: Props) => (color ? color : 'white')};
  font-family: Assistant, sans-serif;
  font-weight: 300;
  font-size: 1.5em;
  line-height: 1.8;
`;
