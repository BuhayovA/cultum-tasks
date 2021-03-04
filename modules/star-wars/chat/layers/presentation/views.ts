import styled from 'styled-components';

export const Wrapper = styled.div`
  width:800px;
  height: 700px;
  background: #fafafa;
  overflow: hidden;
  margin: 0 auto;
  border-radius: 24px;
  position:relative;
  display: flex;
  flex-direction: column;
`
export const ChatWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  
  &::-webkit-scrollbar {
    border-radius: 10px;
    width: 8px;
    background-color: white;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #9e9e9e;
  }

  &::-webkit-scrollbar-thumb:active {
    background-color: #707070;
  }
`

export const MessageWrapper = styled.div`
  padding: 10px;
  float: left;
  width: 450px;
  line-height: 1.5;
  padding: 10px;
`

export const InputWrapper = styled.div`
  width: 100%;
  bottom: 4px;
  border-top: 1px solid #676767;
`
export const SwapPersonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 0 14px 14px;
  overflow: hidden;
`
