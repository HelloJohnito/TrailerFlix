import { connect } from 'react-redux';
import { fetchAllVideos } from '../../actions/videoActions';
import { verify } from '../../actions/sessionActions';
import VideoIndex from './videoIndex';

const mapStateToProps = (state, ownProps) => {
  return({
    user: state.session,
    video: state.video
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    fetchAllVideos: () => dispatch(fetchAllVideos()),
    verify: () => dispatch(verify())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoIndex);
