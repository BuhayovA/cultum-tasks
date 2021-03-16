import styled from 'styled-components';

interface Props {
  active?: boolean;
}

export const Image = styled.img<Props>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  display: block;
  user-select: none;
  padding: 2px;
  cursor: pointer;
  border: ${({ active }) => (active ? '2px solid #0070f3' : 'none')};
  transition: all ease 0.25ms;

  //un select
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
`;
