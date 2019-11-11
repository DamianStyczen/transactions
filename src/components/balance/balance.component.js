import React from 'react';
import Button from '../button';
import NumberViewer from '../number-viewer';
import { Wrapper } from './balance.style';

const Balance = ({ transactions, showModal }) => {
  const output = transactions && transactions.reduce((acc, item) => (acc + item.value), 0);
  const handleButtonClick = () => {
    showModal('addTransaction');
  }
  return (
    <Wrapper>
      <NumberViewer
        number={{ value: output, currency: 'EUR' }}
        convert
      />
      <Button onClick={handleButtonClick}>Add a new transaction</Button>
    </Wrapper>
  );
}

export default Balance;
