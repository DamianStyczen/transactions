import React from 'react';
import NumberViewer from '../number-viewer';

const Balance = ({ transactions }) => {
  const output = transactions && transactions.reduce((acc, item) => (acc + item.value), 0);
  return (
    <NumberViewer
      number={{ value: output, currency: 'EUR' }}
      convert
    />
  );
}

export default Balance;
