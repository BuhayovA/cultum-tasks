import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  padding: 13px 26px;
  border-radius: 30px;
  background: rgb(224, 77, 77);
  color: white;
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;
  letter-spacing: 2px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: background ease 0.2s;
  box-shadow: rgb(0 0 0) 1px 1px 5px -3px;

  &:hover {
    background: rgb(80, 36, 61);
  }
`;
