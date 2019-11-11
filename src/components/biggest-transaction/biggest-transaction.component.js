import React from 'react';
import Transaction from '../transaction';
import convert from '../../utils/converter';

const BiggestTransaction = ({ transactions, exchangeRate, deleteTransaction }) => {
    const rate = exchangeRate.value;
    const { list } = transactions;
    list.sort((a, b) => {
        const convertedA = a.value.currency !== 'EUR' ? convert(a.value, rate) : a.value;
        const convertedB = b.value.currency !== 'EUR' ? convert(b.value, rate) : b.value;

        return convertedB.value - convertedA.value;
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
