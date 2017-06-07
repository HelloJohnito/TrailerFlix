import { connect } from 'react-redux';
import { fetchAllVideos } from '../../actions/videoAction';
import VideoIndex from './videoIndex';

const mapStateToProps = (state, ownProps) => {

  return({
    video: state.videos
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    fetchAllVideos: () => dispatch(fetchAllVideos())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoIndex);
