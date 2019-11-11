import { EXCHANGE_RATE_RESET, EXCHANGE_RATE_SET_CUSTOM } from '../actions/actionTypes';

const initialState = {
    value: 4.27,
    default: 4.27,
    isCustom: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case EXCHANGE_RATE_SET_CUSTOM:
            return {
                ...state,
                value: action.value,
                isCustom: false
            }
        case EXCHANGE_RATE_RESET:
            return {
                ...state,
                value: state.default,
                isCustom: false
            }
        default:
            return state;
    }
}