import { useState } from 'react';

export const useModal = () => {
  const [imagesList, setImagesList] = useState([] as string[]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const openModal = (index: number, images: string[]) => {
    setIsOpen(true);
    setCurrentSlide(index);
    setImagesList(images);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return {
    imagesList,
    modalIsOpen,
    currentSlide,
    closeModal,
    openModal
  };
};
