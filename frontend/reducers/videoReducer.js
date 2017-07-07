import { RECEIVE_ALL_VIDEOS, RECEIVE_VIDEO } from '../actions/videoActions';

// const initialState = {
//   name: "",
//   youtube_id: "",
//   desciption: "",
//   rating: "",
//   category: "",
//   releaseDate: "",
//   comments: []
// };

const VideoReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ALL_VIDEOS:
      return Object.assign({}, action.response);
    case RECEIVE_VIDEO:
      return Object.assign({}, action.response);
    default:
      return state;
  }
};

export default VideoReducer;
