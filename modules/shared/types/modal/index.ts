export interface ModalAction<A> {
  type: 'ImageSlider' | 'Text';
  state: { data: A[] | A | undefined; currentSlide?: number };
  modalIsOpen: boolean;
}
