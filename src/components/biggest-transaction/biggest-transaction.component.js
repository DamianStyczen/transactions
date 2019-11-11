import React from 'react';
import Transaction from '../transaction';
import convert from '../../utils/converter';

const BiggestTransaction = ({ transactions, exchangeRate, deleteTransaction }) => {
    const rate = exchangeRate.value;
    const { list } = transactions;
    list.sort((a, b) => {
        const convertedA = a.currency !== 'EUR' ? convert(a, rate) : a;
        const convertedB = b.currency !== 'EUR' ? convert(b, rate) : b;

        return convertedA - convertedB;
    })

    const transaction = list[0];


    if (!transaction) {
        return (
            <p>You have no transactions</p>
        )
    }

    return (
        <Transaction
            {...transaction}
            deleteTransaction={() => deleteTransaction(transaction.id)}
        />
    );
}

export default BiggestTransaction;
