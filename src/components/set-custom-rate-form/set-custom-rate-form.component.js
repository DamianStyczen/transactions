import React, { useState } from 'react';
import { Form, Button, Input } from './set-custom-rate-form.style';

const SetCustomRateForm = ({ setCustomRate, closeModal }) => {
    const [value, setValue] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        setCustomRate(Number(value));
        closeModal();
    };

    return (
        <Form onSubmit={handleSubmit}>
            <label>
                Custom rate
            <br />
                <span>1 EUR = </span>
                <Input
                    type='number'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    step={0.01}
                    min={0}
                />
                <span> PLN</span>
            </label>
            <Button type='submit'>Set a custom rate</Button>
        </Form>
    );
}

export default SetCustomRateForm;
