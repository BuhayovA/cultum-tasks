import styled from 'styled-components';

interface Props {
  fontSize?: string;
  color?: string;
}

export const Wrapper = styled.h1`
  font-weight: 800;
  font-size: ${({ fontSize }: Props) => (fontSize ? fontSize : '35px')};
  color: ${({ color }: Props) => (color ? color : 'rgb(84, 75, 75)')};
  padding: 20px 0 8px 0;
  line-height: 1.5em;
`;
