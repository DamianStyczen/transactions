import React from 'react';

const Transaction = ({ id, value, label, currency }) => {
  const sign = value < 0 ? '-' : '+';

    return (
    <div>
        <h3>{ label }</h3>
        <p>{ sign } { Math.abs(value) } { currency }</p>
    </div>
  );
}

export default Transaction;
