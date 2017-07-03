import * as APIUtil from '../utils/sessionAPI';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_ERROR = "RECEIVE_ERROR";


export const signup = request => dispatch => (
  APIUtil.signup(request).then(response => dispatch(receiveUser(response.data.result)),
  err => dispatch(receiveError(err.responseJSON)))
);



export const receiveUser = response => ({
  type: RECEIVE_USER,
  response
});

export const receiveError = response => ({
  type: RECEIVE_ERROR,
  response
});
