import UserInfo from '@md-ui/user-info';
import React from 'react';
import { CommentWrapper, Wrapper } from './views';

interface Props {
  name: string;
  company: string;
  text: string;
}

const CommentCard: React.FC<Props> = ({ name, company, text }) => {
  return (
    <Wrapper>
      <CommentWrapper>{text}</CommentWrapper>
      <UserInfo>
        <span>{name}</span>
        <span>,{company}</span>
      </UserInfo>
    </Wrapper>
  );
};

export default CommentCard;
