import { MODAL_SHOW, MODAL_CLOSE } from './actionTypes';

export const showModal = modalName => dispatch => dispatch({
    type: MODAL_SHOW,
    name: modalName
});

export const closeModal = () => dispatch => dispatch({
    type: MODAL_CLOSE
});