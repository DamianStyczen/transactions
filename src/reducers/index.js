import { combineReducers } from 'redux';
import transactionsReducers from './transactionsReducers';
import modalReducers from './modalReducers';
import exchangeRateReducers from './exchangeRateReducers';

export default combineReducers({
    transactions: transactionsReducers,
    modal: modalReducers,
    exchangeRate: exchangeRateReducers
});