import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

export const ContentWrapper = styled.div`
  width: 322px;
  height: 700px;
  overflow-y: scroll;
  margin: 0 auto;
  box-shadow: 0 0 8px rgba(0.2, 0.2, 0.2, 0.5);

  &::-webkit-scrollbar {
    border-radius: 10px;
    width: 8px;
    background-color: #0d1521;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #cfcfcf;
  }

  &::-webkit-scrollbar-thumb:active {
    background-color: #7b7b7b;
  }

  max-width: ${({ theme }) => theme.dimensions.pageMaxWidth}px;
`;
