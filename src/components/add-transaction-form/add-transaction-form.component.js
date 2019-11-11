import React, { useState } from 'react';
import { Form, Input, Button, Label, NumberWrapper } from './add-transaction-form.style';
import NumberViewer from '../number-viewer';

const AddTransactionForm = ({ addTransaction, closeModal }) => {
    const [selectedCurrency, setCurrency] = useState('EUR');
    const [transactionLabel, setLabel] = useState('');
    const [value, setValue] = useState('');
    const handleSubmit = event => {
        event.preventDefault();
        addTransaction({
            label: transactionLabel,
            value: {
                value: Number(value) * 100,
                currency: selectedCurrency
            }
        });
        closeModal();
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Label>
                Label <br />
                <input type='text' value={transactionLabel} onChange={e => setLabel(e.target.value)} step={0.01} />
            </Label>
            <Label>
                Currency <br />
                <input
                    type='radio'
                    name='currency'
                    checked={selectedCurrency === 'EUR'}
                    onChange={() => setCurrency('EUR')}
                    placeholder='0'
                />
                EUR
                <br />
                <input
                    type='radio'
                    name='currency'
                    value='PLN'
                    checked={selectedCurrency === 'PLN'}
                    onChange={() => setCurrency('PLN')}
                />
                PLN
    </Label>

            <Label>
                Value of transaction<br />
                <Input type='number' value={value} onChange={(e) => setValue(e.target.value)} /> {selectedCurrency}
            </Label>
            <NumberWrapper>
                <NumberViewer number={{ value: value * 100, currency: selectedCurrency }} convert />
            </NumberWrapper>
            <Button type='submit' >Add transaction</Button>
        </Form>
    );
}

export default AddTransactionForm;
