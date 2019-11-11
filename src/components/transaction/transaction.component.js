import React from 'react';
import NumberViewer from '../number-viewer';
import { Wrapper, Button, Header } from './transaction.style';

const Transaction = ({ value, label, deleteTransaction }) => {
  return (
    <Wrapper>
      <Header>{label}</Header>
      <Button onClick={deleteTransaction} danger>Delete</Button>
      <NumberViewer number={value} convert />
    </Wrapper>
  );
}

export default Transaction;
