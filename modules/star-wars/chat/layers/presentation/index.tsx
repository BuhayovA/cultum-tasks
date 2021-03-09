import React, { useContext } from 'react';
//views
import { Wrapper, InputWrapper, MessageWrapper, ChatWrapper, SwapPersonWrapper } from './views';
import ChatInput from '@md-star-wars/chat/components/chat-input';
import Message from '@md-star-wars/chat/components/message';
import { Avatar } from '@md-ui/avatar/main';
import ModalWindow from '@md-ui/modal/main';
//Context
import { ChatBLContext } from '@md-star-wars/chat/layers/businnes';


const ChatPresentation = () => {
  // use bll logic here
  const { addMessage, addTextMessage, newMessage, messages, setActiveUser, activeUser, addImage, images, imagesList, modalIsOpen, currentSlide, closeModal, openModal } = useContext(
    ChatBLContext
  );

  return (
    <Wrapper>
      <ChatWrapper>
        <MessageWrapper>
          {messages &&
          messages.map((message, index) => (
            <Message
              imgOnClick={openModal}
              images={message.imgSrc}
              active={activeUser == message.userId}
              userName={message.userName}
              avatarImg={message.avatar}
              key={index}
              message={message.message}
            />
          ))}
        </MessageWrapper>
      </ChatWrapper>

      <ModalWindow action={{type: 'ImageSlider', images: imagesList, currentSlide: currentSlide}} closeModal={closeModal} modalIsOpen={modalIsOpen}/>

      <InputWrapper>
        <ChatInput
          addImage={addImage}
          endIconOnClick={addMessage}
          inputOnChange={addTextMessage}
          inputValue={newMessage}
          uploadImages={images}
          placeholder='Start typing...'
          startIcon={'/static/images/photo-camera.svg'}
          endIcon={'/static/images/send-button.svg'}
        />
      </InputWrapper>

      <SwapPersonWrapper>
        <Avatar
          active={activeUser == "first"}
          onClick={() => setActiveUser("first")}
          avatarImg='/static/avatars/make-discord-avatars-but-not-minecraft-or-anime.jpg'
        />
        <Avatar
          active={activeUser == "second"}
          onClick={() => setActiveUser("second")}
          avatarImg='/static/avatars/gratis-png-discord-avatar-personaje-digital-arte-avatar.png'
        />
        <Avatar
          active={activeUser == "third"}
          onClick={() => setActiveUser("third")}
          avatarImg='/static/avatars/Screen-Shot-2020-04-27-at-10.28.26-AM--1-.png'
        />
      </SwapPersonWrapper>
    </Wrapper>
  );
};

export default ChatPresentation;
