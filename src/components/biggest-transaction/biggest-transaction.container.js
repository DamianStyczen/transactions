import { connect } from 'react-redux';
import BiggestTransaction from './biggest-transaction.component';
import { deleteTransaction } from '../../actions/transactionsActions';

const mapStateToProps = ({ exchangeRate, transactions }) => ({
    exchangeRate,
    transactions
})

export default connect(mapStateToProps, { deleteTransaction })(BiggestTransaction);