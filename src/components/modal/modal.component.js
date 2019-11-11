import React, { useRef } from 'react';
import { ClickOutside, Wrapper } from './modal.style';
import Section from '../section';
import { config } from './modal.const';

const Modal = ({ isShown, modalName, closeModal }) => {
  const clickOutsideRef = useRef();

  if (!isShown) {
    return null;
  }

  const handleClickOutside = e => {
    const targetMatchesRef = e.target === clickOutsideRef.current;

    if (targetMatchesRef) {
      closeModal();
    }
  }

  const output = config[modalName];

  return (
    <ClickOutside
      onClick={handleClickOutside}
      ref={clickOutsideRef}
    >
      <Wrapper>
        <Section title={output.title}>
          {output.component}
        </Section>
      </Wrapper>
    </ClickOutside>
  );
}

export default Modal;
