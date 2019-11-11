import { EXCHANGE_RATE_SET_CUSTOM, EXCHANGE_RATE_RESET } from './actionTypes';

export const setCustomRate = value => dispatch => dispatch({
    type: EXCHANGE_RATE_SET_CUSTOM,
    value
});

export const resetRateToDefault = () => dispatch => dispatch({
    type: EXCHANGE_RATE_RESET
});