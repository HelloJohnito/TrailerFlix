import { connect } from 'react-redux';
import { verify, logout, clearErrors } from '../../actions/sessionActions';
import Navbar from './navbar';

const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.session.currentUser,
    history: ownProps.history
  });
};

const mapDispatchToProps = dispatch => ({
  verify: () => dispatch(verify()),
  logout: () => dispatch(logout()),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
