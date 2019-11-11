import { connect } from 'react-redux';
import { showModal } from '../../actions/modalActions';
import Balance from './balance.component';

const mapStateToProps = state => ({
  transactions: state.transactions.list,
  exchangeRate: state.exchangeRate.value
});

export default connect(mapStateToProps, { showModal })(Balance);