import { connect } from 'react-redux';
import Modal from './modal.component';
import { showModal, closeModal } from '../../actions/modalActions';

const mapStateToProps = ({ modal }) => ({
    modalName: modal.name,
    isShown: modal.isShown
});

export default connect(mapStateToProps, { showModal, closeModal })(Modal);