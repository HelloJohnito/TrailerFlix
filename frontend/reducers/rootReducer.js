import { combineReducers } from 'redux';
import VideoReducer from './videoReducer';

const RootReducer = combineReducers({
  videos: VideoReducer
});

export default RootReducer;
