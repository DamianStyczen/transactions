import {
    TRANSACTIONS_ADD
} from '../actions/actionTypes';

const initialState = {
    list: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case TRANSACTIONS_ADD:
            const { transaction } = action;
            const newList = state.list ? [...state.list, transaction] : [transaction];
            return {
                ...state,
                list: newList
            }
        default:
            return state;
    }
}