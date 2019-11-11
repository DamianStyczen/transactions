import React from 'react';
import Button from '../button';
import NumberViewer from '../number-viewer';
import { Wrapper } from './balance.style';
import convert from '../../utils/converter';

const Balance = ({ transactions, showModal, exchangeRate }) => {
  const output = transactions && transactions.reduce((acc, item) => {
    const { value: transaction } = item;

    let convertedTransaction = transaction.currency === 'PLN' ? convert(transaction, exchangeRate) : transaction;

    return (acc + convertedTransaction.value)
  }, 0);

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
