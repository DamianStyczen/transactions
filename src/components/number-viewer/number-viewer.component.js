import React from 'react';
import { MainNumber, ConvertedNumber } from './number-viewer.style'
import convertValue from '../../utils/converter';

const NumberViewer = ({ number, convert, exchangeRate }) => {
    const { value, currency } = number;

    const convertedNumber = convert ? convertValue(number, exchangeRate) : null;

    return (
        <div>
            <MainNumber>
                {value.toFixed(2)} {currency}
            </MainNumber>
            <ConvertedNumber>
                {convertedNumber.value.toFixed(2)} {convertedNumber.currency}
            </ConvertedNumber>
        </div>
    )
}

export default NumberViewer;
