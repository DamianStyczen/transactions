import { connect } from 'react-redux';
import TransactionList from './transaction-list.component';

const mapStateToProps = state => ({
    transactions: state.transactions.list
})
export default connect(mapStateToProps, null)(TransactionList);