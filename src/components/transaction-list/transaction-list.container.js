import { connect } from 'react-redux';
import TransactionList from './transaction-list.component';
import { deleteTransaction } from '../../actions/transactionsActions';

const mapStateToProps = state => ({
    transactions: state.transactions.list
})
export default connect(mapStateToProps, { deleteTransaction })(TransactionList);