import { connect } from 'react-redux';
import NumberViewer from './number-viewer.component';

const mapStateToProps = ({ exchangeRate }) => ({
    exchangeRate
});

export default connect(mapStateToProps, null)(NumberViewer);