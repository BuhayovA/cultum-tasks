import React, { useState } from 'react';
//type
import { Message } from '@md-shared/types/chat';

interface Context {
  messages: Message[] | undefined;
  newMessage: string;
  addMessage: () => void;
  addTextMessage: (message: string) => void;
  setActiveUser: (id: number) => void;
  addImage: (image: string[]) => void;
  activeUser: number;
  Images: string[];
}

interface State {
  messages: Message[];
  Images: string[];
  newMessage: string;
}

export const ChatBLContext = React.createContext<Context>({
  messages: undefined,
  newMessage: '',
  addMessage: () => {},
  addTextMessage: () => {},
  setActiveUser: () => {},
  activeUser: 1,
  addImage: () => {},
  Images: []
});

const ChatBLContextProvider: React.FC = ({ children }) => {
  //state for checking the active user
  const [activeUser, setActiveUser] = useState(1);

  //local state
  const [messagesState, setMessagesState] = useState<State>({
    messages: [
      {
        userId: 1,
        userName: 'Andrew',
        id: 1,
        message: `Hello`,
        avatar: '/static/avatars/make-discord-avatars-but-not-minecraft-or-anime.jpg',
        imgSrc: []
      },
      {
        userId: 3,
        userName: 'Egor',
        id: 4,
        message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus earum omnis pariatur totam. Asperiores dicta placeat possimus sapiente sunt voluptatum.`,
        avatar: '/static/avatars/Screen-Shot-2020-04-27-at-10.28.26-AM--1-.png',
        imgSrc: []
      },
      {
        userId: 1,
        userName: 'Andrew',
        id: 2,
        message: `How are you?`,
        avatar: '/static/avatars/make-discord-avatars-but-not-minecraft-or-anime.jpg',
        imgSrc: []
      },
      {
        userId: 1,
        userName: 'Andrew',
        id: 3,
        message: `Happy birthday, for me`,
        avatar: '/static/avatars/make-discord-avatars-but-not-minecraft-or-anime.jpg',
        imgSrc: []
      },
      {
        userId: 2,
        userName: 'Alexandr',
        id: 4,
        message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, iure?`,
        avatar: '/static/avatars/gratis-png-discord-avatar-personaje-digital-arte-avatar.png',
        imgSrc: []
      }
    ],
    newMessage: '',
    Images: []
  });

  const addMessage = () => {
    if (messagesState.newMessage.length == 0 && messagesState.Images.length == 0) {
      return;
    }

    const checkPerson = messagesState.messages.find((message) => {
      return message.userId == activeUser;
    });

    const newMessage = {
      ...checkPerson,
      message: messagesState.newMessage,
      imgSrc: messagesState.Images
    };

    setMessagesState(
      (prevState): State => {
        return {
          newMessage: '',
          Images: [],
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
        Images: [...messagesState.Images, ...images]
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
    Images: messagesState.Images
  };

  return <ChatBLContext.Provider value={contextValue}>{children}</ChatBLContext.Provider>;
};

export default ChatBLContextProvider;
