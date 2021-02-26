import styled from 'styled-components';

export const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
`;

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

export const BWrapper = styled.div`
  padding-top: 16px;
`;
export const Button = styled.button`
  padding: 5px 10px;
  background-color: transparent;
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.colors.green200};
  color: #fff;
  outline: none;
  transition: background-color 0.2s linear;
  cursor: pointer;

  &:hover {
    background-color: rgba(135, 204, 67, 0.8);
  }
`;
