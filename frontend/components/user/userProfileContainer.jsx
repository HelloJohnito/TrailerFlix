import { connect } from 'react-redux';
import UserProfile from './userProfile';
import { verify } from '../../actions/sessionActions';

const mapStateToProps = (state, ownProps) => {
  return({
    user: state.session.currentUser
  });
};


const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    verify: () => dispatch(verify())
  });
};


export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
