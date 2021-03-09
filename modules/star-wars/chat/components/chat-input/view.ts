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
  outline-offset: 0;

  //un select
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
`;

export const ImageWrapper = styled.div`
  cursor: pointer;
  //un select
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
`;

export const UploadWrapper = styled.div`
  position: relative;
  overflow: hidden;
  transition: all ease 1s;
  display: block;
  height: max-content;
`;

export const UploadImage = styled.img`
  max-width: 100%;
  padding: 2px;
  height: 50px;
  object-fit: cover;
  pointer-events: none;
  border-radius: 6px;

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
`;
