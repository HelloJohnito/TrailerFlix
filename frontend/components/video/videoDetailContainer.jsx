import {connect} from 'react-redux';
import VideoDetail from './videoDetail';
import { fetchVideoById } from '../../actions/videoActions';
import { addFavorite } from '../../actions/sessionActions';


const mapStateToProps = (state, ownProps) => {

  return({
    user: ownProps.user.currentUser,
    video: ownProps.video,
    formType: ownProps.formType
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    addFavorite: (request) => dispatch(addFavorite(request))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoDetail);
