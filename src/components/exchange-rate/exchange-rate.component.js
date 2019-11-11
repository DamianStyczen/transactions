import React from 'react';
import Button from '../button';
import NumberViewer from '../number-viewer';
import { Wrapper } from './exchange-rate.style';

const ExchangeRate = ({ isCustom, showModal, resetRateToDefault }) => {
  const initialNumber = {
    value: 100,
    currency: 'EUR'
  }

  const handleButtonClick = () => {
    if (isCustom) {
      return resetRateToDefault()
    }

    showModal('setCustomRate');
  }

  const buttonText = isCustom ? 'Reset to default' : 'Set custom rate';

  return (
    <Wrapper>
      <NumberViewer number={initialNumber} convert />
      <Button danger={isCustom} onClick={handleButtonClick}>{buttonText}</Button>
    </Wrapper>
  );
}

export default ExchangeRate;
