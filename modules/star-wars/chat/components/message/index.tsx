import React from 'react';
import { MWrapper, Wrapper, AvatarWrapper, UNWrapper, Image, ImagesWrapper } from './views';
import { Avatar } from '@md-ui/avatar/main';

interface Props {
  message: string;
  avatarImg: string;
  userName?: string;
  active: boolean;
  images: string[];
  imgOnClick: (data: string[], index: number) => void;
}

const Message: React.FC<Props> = ({ images, message, avatarImg, userName, active, imgOnClick }) => {
  return (
    <Wrapper>
      <AvatarWrapper>
        <Avatar avatarImg={avatarImg} />
      </AvatarWrapper>
      <MWrapper active={active}>
        <UNWrapper>{userName}</UNWrapper>
        <span>{message}</span>
        <ImagesWrapper>
          {images.map((image, index) => {
            return <Image onClick={() => imgOnClick(images, index)} key={index} src={image} alt='' />;
          })}
        </ImagesWrapper>
      </MWrapper>
    </Wrapper>
  );
};

export default Message;
