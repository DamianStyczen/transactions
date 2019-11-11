import React, { useState } from 'react';
import Button from '../button';

const SetCustomRateForm = ({ setCustomRate, closeModal }) => {
    const [value, setValue] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        setCustomRate(Number(value));
        closeModal();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Custom rate
            <br />
                1 EUR =
                <input
                    type='number'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    step={0.01}
                    min={0}
                />
                PLN
        </label>
            <Button type='submit'>Set a custom rate</Button>
        </form>
    );
}

export default SetCustomRateForm;
