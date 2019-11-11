import React from 'react';
import Button from '../button';

const ExchangeRate = ({ exchangeRate }) => {
  return (
    <div>
      <span> 1 EUR = {exchangeRate} PLN</span>
      <Button>Set custom rate</Button>
    </div>
  );
}

export default ExchangeRate;
