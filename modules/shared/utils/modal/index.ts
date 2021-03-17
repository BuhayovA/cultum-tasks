import { useCallback, useState } from 'react';
import { ModalAction } from '@md-shared/types/modal';

export interface ModalState<A> {
  state: { data: A | A[] | undefined; currentSlide?: number };
  modalIsOpen: boolean;
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
    state: { data: undefined },
    modalIsOpen: false
  });

  const closeModal = useCallback(() => {
    setModalState((prevState) => ({
      ...prevState,
      modalIsOpen: false
    }));
  }, []);

  switch (type) {
    case 'ImageSlider': {
      const openModal = useCallback((data: A | A[], index?: number) => {
        setModalState((prev) => ({
          ...prev,
          state: { data: data, currentSlide: index },
          modalIsOpen: true
        }));
      }, []);

      return {
        action: {
          type: 'ImageSlider',
          state: { data: modalState.state.data, currentSlide: modalState.state.currentSlide },
          modalIsOpen: modalState.modalIsOpen
        },
        openModal,
        closeModal
      };
    }
    case 'Text': {
      const openModal = useCallback((data: A | A[]) => {
        setModalState((prev) => ({
          ...prev,
          state: { data },
          modalIsOpen: true
        }));
      }, []);

      return {
        action: {
          type: 'Text',
          state: modalState.state,
          modalIsOpen: modalState.modalIsOpen
        },
        openModal,
        closeModal
      };
    }
  }
};
