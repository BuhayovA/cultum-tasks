import React from 'react';

import ChatInput from '@md-star-wars/chat/components/chat-input';
import { Wrapper,InputWrapper, MessageWrapper } from './views';
import Message from '@md-star-wars/chat/components/message';

const ChatPresentation = () => {
  return (
    <Wrapper>
      <MessageWrapper>
        <Message/>
      </MessageWrapper>
      <InputWrapper>
        <ChatInput placeholder='Start typing...' sendButtonImg={'/static/images/send-button.svg'}/>
      </InputWrapper>
    </Wrapper>
  );
};

export default ChatPresentation;