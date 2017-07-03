import { connect } from 'react-redux';
import SessionForm from './sessionForm';
import { signup } from '../../actions/sessionActions';

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
  signup: (userInfo) => dispatch(signup(userInfo))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
