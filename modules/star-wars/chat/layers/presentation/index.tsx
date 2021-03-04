import React, { useContext } from 'react';
//views
import { Wrapper, InputWrapper, MessageWrapper, ChatWrapper, SwapPersonWrapper } from './views';
import ChatInput from '@md-star-wars/chat/components/chat-input';
import Message from '@md-star-wars/chat/components/message';
import { Avatar } from '@md-ui/avatar/main';
//Context
import { ChatBLContext } from '@md-star-wars/chat/layers/businnes';

const ChatPresentation = () => {
  // use bll logic here
  const { addMessage, addTextMessage, newMessage, messages, setActiveUser, activeUser } = useContext(ChatBLContext);

  return (
    <Wrapper>
      <ChatWrapper>
        <MessageWrapper>
          {messages &&
            messages.map((message) => (
              <Message
                active={activeUser == message.userId}
                userName={message.userName}
                avatarImg={message.imgSrc}
                key={message.id}
                message={message.message}
              />
            ))}
        </MessageWrapper>
      </ChatWrapper>

      <InputWrapper>
        <ChatInput
          addMessage={addMessage}
          addTextMessage={addTextMessage}
          inputValue={newMessage}
          placeholder='Start typing...'
          startIcon={'/static/images/photo-camera.svg'}
          endIcon={'/static/images/send-button.svg'}
        />
      </InputWrapper>

      <SwapPersonWrapper>
        {/*{messages && messages.map(message => {*/}
        {/*  return <Avatar avatarImg={message.imgSrc} active={activeUser === message.userId} onClick={() => setActiveUser(message.userId)}/>*/}
        {/*})}*/}
        <Avatar
          active={activeUser == 1}
          onClick={() => setActiveUser(1)}
          avatarImg='/static/avatars/make-discord-avatars-but-not-minecraft-or-anime.jpg'
        />
        <Avatar
          active={activeUser == 2}
          onClick={() => setActiveUser(2)}
          avatarImg='/static/avatars/gratis-png-discord-avatar-personaje-digital-arte-avatar.png'
        />
        <Avatar
          active={activeUser == 3}
          onClick={() => setActiveUser(3)}
          avatarImg='/static/avatars/Screen-Shot-2020-04-27-at-10.28.26-AM--1-.png'
        />
      </SwapPersonWrapper>
    </Wrapper>
  );
};

export default ChatPresentation;
