import React from 'react';
import { MWrapper, Wrapper, AvatarWrapper, UNWrapper } from './views';
import { Avatar } from '@md-ui/avatar/main';

interface Props {
  message: string;
  avatarImg: string;
  userName?: string;
  active: boolean;
}

const Message: React.FC<Props> = ({ message, avatarImg, userName, active }) => {
  return (
    <Wrapper>
      <AvatarWrapper>
        <Avatar avatarImg={avatarImg} />
      </AvatarWrapper>
      <MWrapper active={active}>
        <UNWrapper>{userName}</UNWrapper>
        {message}
      </MWrapper>
    </Wrapper>
  );
};

export default Message;
