import { connect } from 'react-redux';
import { fetchAllVideos } from '../../actions/videoActions';
import VideoIndex from './videoIndex';

const mapStateToProps = (state, ownProps) => {

  return({
    video: state.video
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    fetchAllVideos: () => dispatch(fetchAllVideos())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoIndex);
