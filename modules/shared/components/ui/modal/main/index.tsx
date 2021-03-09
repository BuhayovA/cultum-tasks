import React from 'react';
import ImageSlider from '@md-ui/image-slider/main';
import Modal from 'react-modal';

interface Props {
  modalIsOpen: boolean;
  closeModal: () => void;
  action: ActionType;
}

interface ActionType {
  type: string;
  images?: string[];
  currentSlide?: number;
  text?: string;
}

const ModalWindow: React.FC<Props> = ({ action, modalIsOpen, closeModal }) => {
  const customStyles = {
    content: {
      height: 'auto',
      overflow: 'hidden',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  };

  switch (action.type) {
    case 'ImageSlider':
      return (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel='Example Modal'
          ariaHideApp={false}
        >
          {action.images ? (
            <ImageSlider currentSlide={action.currentSlide} images={action.images} />
          ) : (
            <div>Photo upload error...</div>
          )}
        </Modal>
      );
    case 'Text':
      return (
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel='Example Modal'>
          <span>{action.text}</span>
        </Modal>
      );
    case 'Form':
      return (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel='Example Modal'
        ></Modal>
      );
  }
  return null;
};

export default ModalWindow;
