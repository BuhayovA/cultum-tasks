import React from 'react';
import ChatPresentation from '@md-star-wars/chat/layers/presentation';
import ChatBLContextProvider from '@md-star-wars/chat/layers/businnes';

const ChatContainer = () => {
  return (
    <ChatBLContextProvider>
      <ChatPresentation />
    </ChatBLContextProvider>
  );
};

export default ChatContainer;
