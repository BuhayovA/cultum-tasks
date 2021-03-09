import React, { useState } from 'react';
import { MWrapper, Wrapper, AvatarWrapper, UNWrapper, Image } from './views';
import { Avatar } from '@md-ui/avatar/main';
// @ts-ignore
import Modal from 'react-modal';
import ImageSlider from '@md-ui/image-slider/main';

interface Props {
  message: string;
  avatarImg: string;
  userName?: string;
  active: boolean;
  images: string[];
}

const customStyles = {
  content: {
    height: 'auto',
    overflow: 'hidden',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    'overflow-y': 'scroll'
  }
};

const Message: React.FC<Props> = ({ images, message, avatarImg, userName, active }) => {
  // modal state
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const openModal = (index: number) => {
    setIsOpen(true);
    setCurrentSlide(index);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Wrapper>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel='Example Modal'>
        <ImageSlider currentSlide={currentSlide} images={images} />
      </Modal>

      <AvatarWrapper>
        <Avatar avatarImg={avatarImg} />
      </AvatarWrapper>
      <MWrapper active={active}>
        <UNWrapper>{userName}</UNWrapper>
        {message}
        {images &&
          images.map((image, index) => {
            return <Image onClick={() => openModal(index)} key={image} src={image} alt='' />;
          })}
      </MWrapper>
    </Wrapper>
  );
};

export default Message;
