import { } from '../actions/actionTypes';

const initialState = {
    value: 4.27,
    isCustom: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}