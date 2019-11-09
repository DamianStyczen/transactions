import React from 'react';

const Transaction = ({ id, value, category }) => {
  const sign = value < 0 ? '-' : '+';

    return (
    <div>
        {sign} {Math.abs(value)} {category}
    </div>
  );
}

export default Transaction;
