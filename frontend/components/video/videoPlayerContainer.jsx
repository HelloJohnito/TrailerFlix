import { connect } from 'react-redux';
import VideoPlayer from './videoPlayer';
import { fetchVideoById } from '../../actions/videoActions';

const mapStateToProps = (state, ownProps) => {
  return({
    video: state.video
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let videoId = ownProps.videoId;
  return({
    fetchVideoById: () => dispatch(fetchVideoById(videoId))
  });
};


export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);
