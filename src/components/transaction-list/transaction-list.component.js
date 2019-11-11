import React from 'react';
import Transaction from '../transaction';

const TransactionList = ({ transactions, deleteTransaction }) => {
    const listItems = transactions && transactions.map(item => (
        <li key={item.id}>
            <Transaction {...item} deleteTransaction={() => deleteTransaction(item.id)} />
        </li>
    ))

    if (listItems && listItems.length === 0) {
        return <p>The list is empty</p>
    }
    return (
        <ul>
            {listItems}
        </ul>
    );
}

export default TransactionList;
