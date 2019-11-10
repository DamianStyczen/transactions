import { connect } from 'react-redux';
import AddTransactionForm from './add-transaction-form.component';
import { addTransaction } from '../../actions/transactionActions';

const mapStateToProps = state => ({
    exchangeRate: state.exchangeRate
});

export default connect(mapStateToProps, { addTransaction })(AddTransactionForm);