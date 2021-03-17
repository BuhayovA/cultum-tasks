import React, { useState } from 'react';
//type
import { Message } from '@md-shared/types/chat';
//utils

type ActiveUser = 'first' | 'second' | 'third';

interface Context {
  messages: Message[] | undefined;
  newMessage: string;
  addMessage: () => void;
  addTextMessage: (message: string) => void;
  setActiveUser: (id: ActiveUser) => void;
  addImage: (image: string[]) => void;
  activeUser: ActiveUser;
  images: string[];
}

interface MessagesState {
  messages: Message[];
  images: string[];
  newMessage: string;
}

export const ChatBLContext = React.createContext<Context>({
  messages: undefined,
  newMessage: '',
  addMessage: () => {},
  addTextMessage: () => {},
  setActiveUser: () => {},
  activeUser: 'first',
  addImage: () => {},
  images: []
});

const ChatBLContextProvider: React.FC = ({ children }) => {
  //local state
  const [messagesState, setMessagesState] = useState<MessagesState>({
    messages: [
      {
        userId: 'first',
        userName: 'Andrew',
        id: 1,
        message: `Hello`,
        avatar: '/static/avatars/make-discord-avatars-but-not-minecraft-or-anime.jpg',
        imgSrc: []
      },
      {
        userId: 'second',
        userName: 'Egor',
        id: 4,
        message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus earum omnis pariatur totam. Asperiores dicta placeat possimus sapiente sunt voluptatum.`,
        avatar: '/static/avatars/Screen-Shot-2020-04-27-at-10.28.26-AM--1-.png',
        imgSrc: []
      },
      {
        userId: 'third',
        userName: 'Andrew',
        id: 2,
        message: `How are you?`,
        avatar: '/static/avatars/make-discord-avatars-but-not-minecraft-or-anime.jpg',
        imgSrc: []
      },
      {
        userId: 'first',
        userName: 'Andrew',
        id: 3,
        message: `Happy birthday, for me`,
        avatar: '/static/avatars/make-discord-avatars-but-not-minecraft-or-anime.jpg',
        imgSrc: []
      },
      {
        userId: 'second',
        userName: 'Alexandr',
        id: 4,
        message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, iure?`,
        avatar: '/static/avatars/gratis-png-discord-avatar-personaje-digital-arte-avatar.png',
        imgSrc: []
      }
    ],
    newMessage: '',
    images: []
  });

  //state for checking the active user
  const [activeUser, setActiveUser] = useState<ActiveUser>('first');

  //methods
  const addMessage = () => {
    if (messagesState.newMessage.length == 0 && messagesState.images.length == 0) {
      return;
    }

    const checkPerson = messagesState.messages.find((message) => {
      return message.userId == activeUser;
    });

    const newMessage = {
      ...checkPerson,
      message: messagesState.newMessage,
      imgSrc: messagesState.images
    };

    setMessagesState(
      (prevState): MessagesState => {
        return {
          newMessage: '',
          images: [],
          messages: [...prevState.messages, newMessage] as Message[]
        };
      }
    );
  };

  // update newMessage value when input onchange
  const addTextMessage = (message: string) => {
    setMessagesState((prev) => {
      return {
        ...prev,
        newMessage: message
      };
    });
  };

  const addImage = (images: string[]) => {
    setMessagesState((prev) => {
      return {
        ...prev,
        images: [...messagesState.images, ...images]
      };
    });
  };

  const contextValue = {
    addMessage,
    addTextMessage,
    setActiveUser,
    messages: messagesState.messages,
    newMessage: messagesState.newMessage,
    activeUser,
    addImage,
    images: messagesState.images
  };

  return <ChatBLContext.Provider value={contextValue}>{children}</ChatBLContext.Provider>;
};

export default ChatBLContextProvider;
