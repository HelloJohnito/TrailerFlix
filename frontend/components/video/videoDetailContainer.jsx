import {connect} from 'react-redux';
import VideoDetail from './videoDetail';
import { fetchVideoById } from '../../actions/videoActions';


const mapStateToProps = (state, ownProps) => ({
  user: ownProps.user,
  video: ownProps.video
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return({

  });
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoDetail);
