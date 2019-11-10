import { combineReducers } from 'redux';
import transactionsReducers from './transactionsReducers';

export default combineReducers({
    transactions: transactionsReducers
});