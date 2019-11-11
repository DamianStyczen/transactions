import { connect } from 'react-redux';
import ExchangeRate from './exchange-rate.component';
import { showModal } from '../../actions/modalActions';
import { resetRateToDefault } from '../../actions/exchangeRateActions';

const mapStateToProps = ({ exchangeRate }) => ({
  isCustom: exchangeRate.isCustom
});

export default connect(mapStateToProps, { showModal, resetRateToDefault })(ExchangeRate);