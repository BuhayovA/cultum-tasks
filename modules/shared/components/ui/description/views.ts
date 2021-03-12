import styled from 'styled-components';

interface Props {
  color?: string;
  fontSize?: string;
}

export const Wrapper = styled.h3`
  color: ${({ color }: Props) => (color ? color : 'white')};
  padding: 0 0 40px 0;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '1.6em')};
  line-height: 1.4;
  opacity: 50%;
  font-weight: 100;
`;
