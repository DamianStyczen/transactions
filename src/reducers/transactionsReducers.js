import {
    TRANSACTIONS_ADD,
    TRANSACTIONS_DELETE
} from '../actions/actionTypes';

const initialState = {
    list: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case TRANSACTIONS_ADD:
            const { transaction } = action;
            transaction.id = state.list ? state.list.length : 0;
            const newList = state.list ? [...state.list, transaction] : [transaction];
            return {
                ...state,
                list: newList
            }
        case TRANSACTIONS_DELETE:
            const { id } = action;
            const filteredList = state.list.filter(item => item.id !== id);
            return {
                ...state,
                list: filteredList
            }
        default:
            return state;
    }
}