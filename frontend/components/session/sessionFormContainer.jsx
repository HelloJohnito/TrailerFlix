import { connect } from 'react-redux';
import SessionForm from './sessionForm';
import { signup, login } from '../../actions/sessionActions';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: state.session.currentUser ? true : false,
  path: ownProps.formType,
  error : state.session.error
});

const mapDispatchToProps = (dispatch, ownProps) => {
  let path = ownProps.formType;
  let processForm = (path === "signup") ? signup : login;
  return {
    processForm: (userInfo) => dispatch(processForm(userInfo)),
    login: (userInfo) => dispatch(login(userInfo))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
