import { connect } from 'react-redux';
import Balance from './balance.component';

const mapStateToProps = state => ({
  transactions: state.transactions.list
});

export default connect(mapStateToProps, null)(Balance);