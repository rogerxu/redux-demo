import { connect } from 'react-redux';
import Message from '../components/Message';

const mapStateToProps = (state) => {
  const count = state.getIn(['count']);

  return {
    text: `Count: ${count}`,
  };
};

export default connect(mapStateToProps)(Message);
