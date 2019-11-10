import React, {useState} from 'react';

const AddTransactionForm = ({ exchangeRate, addTransaction }) => {
const [selectedCurrency, setCurrency] = useState('EUR');
const [transactionLabel, setLabel] = useState('');
const [value, setValue] = useState('');
const convertedValue = selectedCurrency === 'EUR'
    ? `${value * exchangeRate} PLN`
    : `${value / exchangeRate} EUR`;

const handleSubmit = event => {
    event.preventDefault();
    addTransaction({
        label: transactionLabel,
        value: value,
        currency: selectedCurrency
    });
};

return (
    <form onSubmit={handleSubmit}>
    <label>
        Label
        <input type='text' value={transactionLabel} onChange={e => setLabel(e.target.value)}/>
    </label>
    <p>Currency</p>
    <label>
        <input
            type='radio'
            name='currency'
            checked={selectedCurrency === 'EUR'}
            onChange={() => setCurrency('EUR')}
            placeholder='0'
        />
        EUR
    </label>
    <label>
        <input
            type='radio'
            name='currency'
            value='PLN'
            checked={selectedCurrency === 'PLN'}
            onChange={() => setCurrency('PLN')}
        />
        PLN
    </label>

    <label>
        Value of transaction
        <input type='number' value={value} onChange={(e) => setValue(e.target.value)} /> {selectedCurrency}
    </label>
    <span>{ convertedValue }</span>
    <button type='submit' >Add transaction</button>


    </form>
  );
}

export default AddTransactionForm;
