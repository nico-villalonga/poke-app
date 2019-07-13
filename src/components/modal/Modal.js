import React from 'react';
import { createPortal } from 'react-dom';
import { Wrapper } from './ModalStyle';

const Modal = (props) => {
  const { children } = props;

  return createPortal(
    <Wrapper>
      { children }
    </Wrapper>,
    document.querySelector('#modal')
  );
}

export default Modal;
