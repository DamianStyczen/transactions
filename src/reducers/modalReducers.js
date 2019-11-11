import {
    MODAL_SHOW,
    MODAL_CLOSE
} from '../actions/actionTypes';

const initialState = {
    isShown: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case MODAL_SHOW:
            return {
                isShown: true,
                name: action.name
            }
        case MODAL_CLOSE:
            return {
                isShown: false
            }
        default:
            return state;
    }
}