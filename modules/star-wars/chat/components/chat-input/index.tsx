import React from 'react';
import { ImageWrapper, Wrapper, Input } from './view';

interface Props {
  endIcon?: string;
  startIcon?: string;
  placeholder?: string;
  inputValue: string;
  addMessage: () => void;
  addTextMessage: (message: string) => void;
}

const ChatInput: React.FC<Props> = ({ endIcon, startIcon, inputValue, placeholder, addMessage, addTextMessage }) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <img src={startIcon} alt='send' width='50px' height='35px' />
      </ImageWrapper>

      <Input
        onKeyDown={(e) => (e.key === 'Enter' && addMessage())}
        onChange={(event) => addTextMessage(event.target.value)}
        value={inputValue}
        placeholder={placeholder}
      />

      <ImageWrapper>
        <img onClick={() => addMessage()} src={endIcon} alt='send' width='50px' height='30px' />
      </ImageWrapper>
    </Wrapper>
  );
};

export default ChatInput;
