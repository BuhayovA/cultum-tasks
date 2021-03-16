import React from 'react';
import ImageSlider from '@md-ui/image-slider/main';
import Modal from 'react-modal';

interface Props {
  closeModal: () => void;
  action: ActionType;
}

export interface ActionType {
  type: 'ImageSlider' | 'Text';
  data: string[] | string | undefined;
  currentSlide?: number;
  modalIsOpen: boolean;
}

const ModalWindow: React.FC<Props> = ({ action, closeModal }) => {
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
          isOpen={action.modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel='Example Modal'
          ariaHideApp={false}
        >
          {action.data ? (
            <ImageSlider currentSlide={action.currentSlide} images={action.data} />
          ) : (
            <div>Upload error...</div>
          )}
        </Modal>
      );
    case 'Text':
      return (
        <Modal
          isOpen={action.modalIsOpen}
          onRequestClose={closeModal}
          style={{
            ...customStyles,
            content: { ...customStyles.content, overflowY: 'scroll', maxHeight: '70vh', maxWidth: '70vh' }
          }}
          contentLabel='Example Modal'
          ariaHideApp={false}
        >
          <span>{action.data}</span>
        </Modal>
      );
  }
  return null;
};

export default ModalWindow;
