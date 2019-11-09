import React, {useState} from 'react';

const AddTransactionForm = ({ exchangeRate }) => {
const [selectedCurrency, setCurrency] = useState('EUR');
const [value, setValue] = useState(0);
const convertedValue = selectedCurrency === 'EUR'
    ? `${value * exchangeRate} PLN`
    : `${value / exchangeRate} EUR`;

const handleSubmit = event => {
    event.preventDefault();
    console.log('Submited!');
};

return (
    <form onSubmit={handleSubmit}>
    <p>Currency</p>
    <label>
        <input
            type='radio'
            name='currency'
            checked={selectedCurrency === 'EUR'}
            onChange={() => setCurrency('EUR')}
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
