export interface ModalAction<A> {
  data: A[] | A | undefined;
  type: 'ImageSlider' | 'Text';
  currentSlide?: number;
  modalIsOpen: boolean;
}
