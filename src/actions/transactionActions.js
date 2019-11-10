import { TRANSACTIONS_ADD } from './actionTypes';

export const addTransaction = transaction => dispatch => dispatch({
    type: TRANSACTIONS_ADD,
    transaction
});