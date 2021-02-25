import styled from 'styled-components';


export const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
`

export const EWrapper = styled.div`
  font-weight: 600;
  text-align: center;
  width: auto;
  align-items: center;
  background: #191e2d;
  padding: 3px;
  color: red;
`

export const Input = styled.input`
  border: none;
  width: 400px;
  border-bottom: 2px solid #929fba;
  padding: 10px;
  text-decoration: none;
  background: none;
  outline: 0;
  color: white;
  outline-offset: 0;
  &:focus {
    transition: 0.5s;
    border-bottom: 2px solid #4285F4!important;
  }

`