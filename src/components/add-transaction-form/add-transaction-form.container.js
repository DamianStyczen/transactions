import { connect } from 'react-redux';
import AddTransactionForm from './add-transaction-form.component';
import { addTransaction } from '../../actions/transactionActions';

export default connect(null, { addTransaction })(AddTransactionForm);