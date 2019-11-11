import React from 'react';
import Button from '../button';
import NumberViewer from '../number-viewer';
import { Wrapper } from './exchange-rate.style';

const ExchangeRate = ({ exchangeRate, showModal }) => {
  const initialNumber = {
    value: 1,
    currency: 'EUR'
  }

  const handleButtonClick = () => {
    showModal('setCustomRate');
  }
  return (
    <Wrapper>
      <NumberViewer number={initialNumber} convert />
      <Button onClick={handleButtonClick}>Set custom rate</Button>
    </Wrapper>
  );
}

export default ExchangeRate;
