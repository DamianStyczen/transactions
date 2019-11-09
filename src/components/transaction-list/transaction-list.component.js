import React from 'react';
import Transaction from '../transaction';

const TransactionList = ({ transactions, deleteTransaction }) => {
    const listItems = transactions.map(item => (
        <li key={item.id}>
            <Transaction {...item} delete={() => deleteTransaction(item.id)}/>
        </li>
    ))
    return (
    <ul>
        {listItems}
    </ul>
  );
}

export default TransactionList;
