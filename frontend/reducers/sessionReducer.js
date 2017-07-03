import { RECEIVE_USER, RECEIVE_ERROR } from '../actions/sessionActions';


const SessionReducer = (state = {}, action) => {
  Object.freeze();
  switch (action.type){
    case RECEIVE_USER:
      return Object.assign({}, action.response);
    case RECEIVE_ERROR:
      return Object.assign({}, action.response);
    default:
      return state;
  }
};

export default SessionReducer;
