import React from 'react';
import { ImageWrapper, IWrapper,Input } from './view';


interface Props {
  sendButtonImg?: string;
  placeholder?: string;
}

const ChatInput: React.FC<Props> = ({sendButtonImg, placeholder}) => {
  return (
    <IWrapper>
      <Input placeholder={placeholder}/>
      <ImageWrapper>
        <img src={sendButtonImg} alt='send'  width='50px' height='30px'/>
      </ImageWrapper>
    </IWrapper>
  );
};

export default ChatInput;