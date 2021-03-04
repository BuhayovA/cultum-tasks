import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;
export const Input = styled.input`
  background: #c7c7c7;
  border-radius: 50px;
  border: 1px solid #cccccc;
  width: 100%;
  padding: 10px;
  text-decoration: none;
  outline: 0;
  color: black;
  outline-offset: 0;
  //&:focus {
  //  transition: 0.2s;
  //  border-bottom: 2px solid #4285f4 !important;
  //}
  //un select
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
`;

export const ImageWrapper = styled.image`
  cursor: pointer;
  //un select
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
`;
