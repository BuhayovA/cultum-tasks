import styled from 'styled-components';

export const IWrapper = styled.div`
  width: 700px;
`;

export const EWrapper = styled.div`
  text-align: center;
  width: auto;
  color: white;
  background: #c51244 !important;
  padding: 10px !important;
  //border-radius: 0 0 8px 8px !important;
  position: relative;
  //box-shadow: 1px 1px 1px #191e2d;
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  border-bottom: 2px solid #929fba;
  padding: 16px;
  text-decoration: none;
  background: none;
  outline: 0;
  color: white;
  outline-offset: 0;
  &:focus {
    transition: 0.5s;
    border-bottom: 2px solid #4285f4 !important;
  }
`;