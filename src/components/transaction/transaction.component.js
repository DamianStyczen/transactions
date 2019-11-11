import React from 'react';
import NumberViewer from '../number-viewer';
import { Wrapper, Button, Header } from './transaction.style';

const Transaction = ({ value, label, currency, deleteTransaction }) => {
  return (
    <Wrapper>
      <Header>{label}</Header>
      <Button onClick={deleteTransaction} danger>Delete</Button>
      <NumberViewer show={true} number={{ value, currency }} convert />
    </Wrapper>
  );
}

export default Transaction;
