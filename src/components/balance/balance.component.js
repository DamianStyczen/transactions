import React from 'react';

const Balance = ({ transactions }) => {
const output = transactions.reduce((acc, item) => (acc + item.value), 0);
return (
    <span>{ output }</span>
  );
}

export default Balance;
