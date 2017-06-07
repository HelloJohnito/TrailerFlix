import { RECEIVE_ALL_VIDEOS } from '../actions/videoAction';

const initialState = {
  name: "",
  youtube_id: "",
  desciption: "",
  rating: "",
  category: "",
  releaseDate: "",
  comments: []
};

const VideoReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ALL_VIDEOS:
      return Object.assign({}, action.response);
    default:
      return state;
  }
};

export default VideoReducer;
