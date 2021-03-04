import styled from 'styled-components';


interface Props {
  active: boolean;
}

export const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  display: block;
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  padding: 2px;
  cursor: pointer;
  border: ${({active}: Props) => active ? "2px solid #0070f3" : 'none'};
`