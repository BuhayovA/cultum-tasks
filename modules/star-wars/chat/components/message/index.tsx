import React from 'react';
import { MWrapper, Wrapper, AvatarWrapper } from './views';
import { Avatar } from '@md-ui/avatar/main';


interface Props {
  message: string;
  avatarImg: string
}

const Message: React.FC<Props> = ({message, avatarImg}) => {
  return (
    <Wrapper>
      <AvatarWrapper>
        <Avatar avatarImg={avatarImg}/>
      </AvatarWrapper>
      <MWrapper>
        {message}
      </MWrapper>
    </Wrapper>
  );
};

export default Message;