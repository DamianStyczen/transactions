import { combineReducers } from 'redux';
import transactionsReducers from './transactionsReducers';
import modalReducers from './modalReducers';

export default combineReducers({
    transactions: transactionsReducers,
    modal: modalReducers
});