import React from 'react';
import AddTransactionForm from '../add-transaction-form';
import SetCustomRateForm from '../set-custom-rate-form';

export const config = {
    setCustomRate: {
        title: 'Set custom exchange rate',
        component: <SetCustomRateForm />
    },
    addTransaction: {
        title: 'Add new transaction',
        component: <AddTransactionForm />
    }
}