import React from 'react';
import Button from '../button';
import NumberViewer from '../number-viewer';
import { Wrapper } from './exchange-rate.style';

const ExchangeRate = ({ exchangeRate }) => {
  const initialNumber = {
    value: 1,
    currency: 'EUR'
  }
  return (
    <Wrapper>
      <NumberViewer number={initialNumber} convert />
      <Button>Set custom rate</Button>
    </Wrapper>
  );
}

export default ExchangeRate;
