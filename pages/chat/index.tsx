import React from 'react';
import { MainLayout } from '@md-shared/layouts/main';
import ChatContainer from '@md-star-wars/chat';

const ChatPage = () => {
  return (
    <MainLayout>
      <ChatContainer />
    </MainLayout>
  );
};

export default ChatPage;
