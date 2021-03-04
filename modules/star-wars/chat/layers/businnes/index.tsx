import React, { useState } from 'react';
//type
import { Message } from '@md-shared/types/chat';

interface Context {
  messages: Message[] | undefined;
  newMessage: string;
  addMessage: () => void;
  addTextMessage: (message: string) => void;
  setActiveUser: (id: number) => void;
  activeUser: number;
}

interface State {
  messages: Message[];
  newMessage: string;
}

export const ChatBLContext = React.createContext<Context>({
  messages: undefined,
  newMessage: '',
  addMessage: () => {},
  addTextMessage: () => {},
  setActiveUser: () => {},
  activeUser: 1
});

const ChatBLContextProvider: React.FC = ({ children }) => {
  //state for checking the active user
  const [activeUser, setActiveUser] = useState(1);

  // const [peopleState, setPeopleState] = useState({
  //   people: [
  //     {
  //       userName: 'Andrew',
  //       userId: 1,
  //       imgSrc: '/static/avatars/gratis-png-discord-avatar-personaje-digital-arte-avatar.png',
  //       messages: [
  //         {id: 1, message: `Hello` },
  //         {id: 2, message: `How are you?`},
  //         {id: 3, message: `Happy birthday, for me`},
  //         {id: 4, message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, iure?`},
  //       ],
  //       newMessage: '',
  //     },
  //     {
  //       userName: 'Andrew',
  //       userId: 2,
  //       imgSrc: '/static/avatars/make-discord-avatars-but-not-minecraft-or-anime.jpg',
  //       messages: [
  //         {id: 1, message: `Hello` },
  //         {id: 2, message: `How are you?`},
  //         {id: 3, message: `Happy birthday, for me`},
  //         {id: 4, message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, iure?`},
  //       ],
  //       newMessage: '',
  //     },
  //   ],
  // })

  //local state
  const [messagesState, setMessagesState] = useState<State>({
    messages: [
      {
        userId: 1,
        userName: 'Andrew',
        id: 1,
        message: `Hello`,
        imgSrc: '/static/avatars/make-discord-avatars-but-not-minecraft-or-anime.jpg'
      },
      {
        userId: 1,
        userName: 'Andrew',
        id: 2,
        message: `How are you?`,
        imgSrc: '/static/avatars/make-discord-avatars-but-not-minecraft-or-anime.jpg'
      },
      {
        userId: 1,
        userName: 'Andrew',
        id: 3,
        message: `Happy birthday, for me`,
        imgSrc: '/static/avatars/make-discord-avatars-but-not-minecraft-or-anime.jpg'
      },
      {
        userId: 2,
        userName: 'Alexandr',
        id: 4,
        message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, iure?`,
        imgSrc: '/static/avatars/gratis-png-discord-avatar-personaje-digital-arte-avatar.png'
      }
    ],
    newMessage: ''
  });

  const addMessage = () => {
    if (messagesState.newMessage.length == 0) {
      return;
    }

    const checkPerson = messagesState.messages.find((message) => {
      return message.userId == activeUser;
    });

    const newMessage = {
      ...checkPerson,
      message: messagesState.newMessage
    };

    setMessagesState(
      (prevState): State => {
        return {
          newMessage: '',
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

  const contextValue = {
    addMessage,
    addTextMessage,
    setActiveUser,
    messages: messagesState.messages,
    newMessage: messagesState.newMessage,
    activeUser
  };

  return <ChatBLContext.Provider value={contextValue}>{children}</ChatBLContext.Provider>;
};

export default ChatBLContextProvider;
