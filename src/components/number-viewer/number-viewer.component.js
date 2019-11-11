import React from 'react';
import convertValue from '../../utils/converter';

const NumberViewer = ({ number, convert, exchangeRate }) => {
    const { value, currency } = number;
    console.log(number);

    const convertedNumber = convert ? convertValue(number, exchangeRate) : null;

    return (
        <div>
            {value} {currency}
            <br />
            {convertedNumber.value} {convertedNumber.currency}
        </div>
    )
}

export default NumberViewer;
