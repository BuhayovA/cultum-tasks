import React from 'react';
import { Wrapper, Image, Text } from './views';

const UserInfo: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Image src='https://i.redd.it/wellr7jjiv011.jpg' alt='' />
      <Text>{children}</Text>
    </Wrapper>
  );
};

export default UserInfo;
