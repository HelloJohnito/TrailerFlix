import { combineReducers } from 'redux';
import SessionReducer from './sessionReducer';
import VideoReducer from './videoReducer';

const RootReducer = combineReducers({
  user: SessionReducer,
  video: VideoReducer
});

export default RootReducer;
