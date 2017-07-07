import { RECEIVE_USER, RECEIVE_ERROR } from '../actions/sessionActions';

const _nullUser = {
    currentUser: null,
    errors: null
};

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze();
  switch (action.type){
    case RECEIVE_USER:
      let user = {
        currentUser: action.response,
        error: null
      };
      return Object.assign({}, user);
    case RECEIVE_ERROR:
      let error = {
        currentUser: null,
        error: action.response
      };
      return Object.assign({}, error);
    default:
      return state;
  }
};

export default SessionReducer;
