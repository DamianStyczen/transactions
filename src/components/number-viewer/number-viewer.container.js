import { connect } from 'react-redux';
import NumberViewer from './number-viewer.component';

const mapStateToProps = ({ exchangeRate }) => ({
    exchangeRate: exchangeRate.value
});

export default connect(mapStateToProps, null)(NumberViewer);