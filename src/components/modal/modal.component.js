import React, { useRef } from 'react';
import { ClickOutside } from './modal.style';
import Section from '../section';
import AddTransactionForm from '../add-transaction-form';

const modals = {
    setCustomRate: {
        title: 'Set custom exchange rate',
        component: <span>set custom exchange rate</span>
    },
    addTransaction: {
        title: 'Add new transaction',
        component: <AddTransactionForm />
    }
}

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

    const output = modals[modalName];

    return (
        <ClickOutside
            onClick={handleClickOutside}
            ref={clickOutsideRef}
        >
            <Section title={output.title}>
                {output.component}
            </Section>
        </ClickOutside>
    );
}

export default Modal;
