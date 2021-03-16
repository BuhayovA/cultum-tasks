import { useCallback, useState } from 'react';
import { ModalAction } from '@md-shared/types/modal';

export interface ModalState<A> {
  data: A[] | A | undefined;
  modalIsOpen: boolean;
  currentSlide?: number;
}

interface actionParam {
  type: 'ImageSlider' | 'Text';
}

export interface ReturnUseModal<A> {
  action: ModalAction<A>;
  openModal: (data: A | A[], index?: number) => void;
  closeModal: () => void;
}

export const useModal = <A>({ type }: actionParam): ReturnUseModal<A> => {
  const [modalState, setModalState] = useState<ModalState<A>>({
    data: undefined,
    modalIsOpen: false,
    currentSlide: 1
  });

  const closeModal = useCallback(() => {
    setModalState((prevState) => ({
      ...prevState,
      modalIsOpen: false
    }));
  }, []);

  switch (type) {
    case 'ImageSlider': {
      const openModal = useCallback((data, index) => {
        setModalState((prev) => ({
          ...prev,
          data: data,
          currentSlide: index,
          modalIsOpen: true
        }));
      }, []);

      return {
        action: {
          type: 'ImageSlider',
          data: modalState.data,
          currentSlide: modalState.currentSlide,
          modalIsOpen: modalState.modalIsOpen
        },
        openModal,
        closeModal
      };
    }
    case 'Text': {
      const openModal = useCallback((data) => {
        setModalState((prev) => ({
          ...prev,
          data: data,
          modalIsOpen: true
        }));
      }, []);

      return {
        action: {
          type: 'Text',
          data: modalState.data,
          modalIsOpen: modalState.modalIsOpen
        },
        openModal,
        closeModal
      };
    }
  }
};
