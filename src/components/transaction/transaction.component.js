import React from 'react';
import NumberViewer from '../number-viewer';

const Transaction = ({ id, value, label, currency }) => {
  return (
    <div>
      <h3>{label}</h3>
      <NumberViewer number={{ value, currency }} convert />
    </div>
  );
}

export default Transaction;
