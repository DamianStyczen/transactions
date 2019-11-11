import { TRANSACTIONS_ADD, TRANSACTIONS_DELETE } from './actionTypes';

export const addTransaction = transaction => dispatch => dispatch({
    type: TRANSACTIONS_ADD,
    transaction
});

export const deleteTransaction = id => dispatch => dispatch({
    type: TRANSACTIONS_DELETE,
    id
});