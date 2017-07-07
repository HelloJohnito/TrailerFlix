import { connect } from 'react-redux';
import { logout, clearErrors } from '../../actions/sessionActions';
import Navbar from './navbar';

const mapStateToProps = (state, ownProps) => ({
  name: ownProps,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
