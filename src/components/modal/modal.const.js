import React from 'react';
import AddTransactionForm from '../add-transaction-form';

export const config = {
    setCustomRate: {
        title: 'Set custom exchange rate',
        component: <span>set custom exchange rate</span>
    },
    addTransaction: {
        title: 'Add new transaction',
        component: <AddTransactionForm />
    }
}