import React from 'react';
import Button from '../button';
import NumberViewer from '../number-viewer';

const ExchangeRate = ({ exchangeRate }) => {
  const initialNumber = {
    value: 1,
    currency: 'EUR'
  }
  return (
    <div>
      <NumberViewer number={initialNumber} convert />
    </div>
  );
}

export default ExchangeRate;
