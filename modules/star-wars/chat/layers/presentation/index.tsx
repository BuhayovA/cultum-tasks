import React, { useContext } from 'react';

//views
import { Wrapper,InputWrapper, MessageWrapper, ChatWrapper, SwapPersonWrapper } from './views';
import ChatInput from '@md-star-wars/chat/components/chat-input';
import Message from '@md-star-wars/chat/components/message';
//Context
import { ChatBLContext } from '@md-star-wars/chat/layers/businnes';
import { Avatar } from '@md-ui/avatar/main';

const ChatPresentation = () => {
  //
  const {addMessage, addTextMessage,newMessage, messages, setActiveUser, activeUser} = useContext(ChatBLContext)

  return (
    <Wrapper>
      <ChatWrapper>
          <MessageWrapper>
            {
              messages ? messages.map(message => <Message avatarImg={message.imgSrc} key={message.id} message={message.message}/>) : undefined
            }
          </MessageWrapper>
      </ChatWrapper>

      <InputWrapper>
        <ChatInput addMessage={addMessage} addTextMessage={addTextMessage} inputValue={newMessage} placeholder='Start typing...' startIcon={'/static/images/photo-camera.svg'} endIcon={'/static/images/send-button.svg'}/>
      </InputWrapper>

      <SwapPersonWrapper>
        <Avatar active={activeUser == 1} onClick={() => setActiveUser(1)} avatarImg='/static/avatars/make-discord-avatars-but-not-minecraft-or-anime.jpg'/>
        <Avatar active={activeUser == 2} onClick={() => setActiveUser(2)} avatarImg='/static/avatars/gratis-png-discord-avatar-personaje-digital-arte-avatar.png'/>
      </SwapPersonWrapper>
    </Wrapper>
  );
};

export default ChatPresentation;