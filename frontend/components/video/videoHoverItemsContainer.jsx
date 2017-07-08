import {connect} from 'react-redux';
import VideoHoverItems from './videoHoverItems';
import { fetchVideoById } from '../../actions/videoActions';

const mapStateToProps = (state, ownProps) => ({
  video: state.video
});

const mapDispatchToProps = (dispatch, ownProps) => {
  let videoId = ownProps.videoId;
  return({
    fetchVideoById: () => dispatch(fetchVideoById(videoId))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoHoverItems);
