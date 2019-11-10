import {
    TRANSACTIONS_ADD
} from '../actions/actionTypes';

const initialState = {
    list: []
}

export default function (state = initialState, action) {
    console.log(action);
    console.log('state check', state.list);
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