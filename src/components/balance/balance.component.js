import React from 'react';

const Balance = ({ transactions }) => {
const output = transactions && transactions.reduce((acc, item) => (acc + item.value), 0);
return (
    <span>{ output || 0 } EUR</span>
  );
}

export default Balance;
