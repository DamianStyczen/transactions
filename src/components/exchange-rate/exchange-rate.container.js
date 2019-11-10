import { connect } from 'react-redux';
import ExchangeRate from './exchange-rate.component';

const mapStateToProps = ({ exchangeRate }) => ({
  exchangeRate
});

export default connect(mapStateToProps, null)(ExchangeRate);