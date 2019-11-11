import { connect } from 'react-redux';
import SetCustomRateForm from './set-custom-rate-form.component';
import { setCustomRate } from '../../actions/exchangeRateActions';
import { closeModal } from '../../actions/modalActions';


export default connect(null, { setCustomRate, closeModal })(SetCustomRateForm);