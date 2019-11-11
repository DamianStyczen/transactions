import { connect } from 'react-redux';
import AddTransactionForm from './add-transaction-form.component';
import { addTransaction } from '../../actions/transactionsActions';

export default connect(null, { addTransaction })(AddTransactionForm);