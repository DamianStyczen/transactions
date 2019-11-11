import { connect } from 'react-redux';
import ExchangeRate from './exchange-rate.component';
import { showModal } from '../../actions/modalActions';

const mapStateToProps = ({ exchangeRate }) => ({
  exchangeRate
});

export default connect(mapStateToProps, { showModal })(ExchangeRate);