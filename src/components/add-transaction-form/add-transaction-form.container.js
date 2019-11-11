import { connect } from 'react-redux';
import AddTransactionForm from './add-transaction-form.component';
import { addTransaction } from '../../actions/transactionsActions';
import { closeModal } from '../../actions/modalActions';

export default connect(null, { addTransaction, closeModal })(AddTransactionForm);