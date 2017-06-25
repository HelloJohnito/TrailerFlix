import { combineReducers } from 'redux';
import VideoReducer from './videoReducer';

const RootReducer = combineReducers({
  video: VideoReducer
});

export default RootReducer;
