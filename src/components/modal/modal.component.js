import React, { useRef } from 'react';
import { ClickOutside } from './modal.style';
import Section from '../section';
import AddTransactionForm from '../add-transaction-form';

const Modal = ({ isShown, modalName, closeModal }) => {
    const clickOutsideRef = useRef();

    const handleClickOutside = e => {
        const targetMatchesRef = e.target === clickOutsideRef.current;

        if (targetMatchesRef) {
            closeModal();
        }
    }

    if (!isShown) {
        return null;
    }

    return (
        <ClickOutside
            onClick={handleClickOutside}
            ref={clickOutsideRef}
        >
            <Section title='Add new transaction'>
                <AddTransactionForm />
            </Section>
        </ClickOutside>
    );
}

export default Modal;
