import * as APIUtil from '../utils/sessionAPI';
import { hashHistory } from 'react-router-dom';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_ERROR = "RECEIVE_ERROR";


export const signup = request => dispatch => (
  APIUtil.signup(request).then(response => {
    if(response.data.confirmation === "success"){
      dispatch(receiveUser(response.data.result));
    }
    else {
      dispatch(receiveError(response.data.message));
    }
  }
));

export const login = request => dispatch => (
  APIUtil.login(request).then(response => {
    if(response.data.confirmation === "success"){
      dispatch(receiveUser(response.data.result));
    }
    else {
      dispatch(receiveError(response.data.message));
    }
  }
));

export const logout = request => dispatch => (
  APIUtil.logout(request).then(response => {
    if(response.data.confirmation === "success"){
      dispatch(receiveUser(null));
    }
    else {
      dispatch(receiveError(response.data.message));
    }
  }
));


export const verify = request => dispatch => (
  APIUtil.verify(request).then(response => {
    if(response.data.confirmation === "success"){
      dispatch(receiveUser(response.data.result));
    }
    else {
      dispatch(receiveError(response.data.message));
    }
  }
));


export const receiveUser = response => ({
  type: RECEIVE_USER,
  response
});

export const receiveError = response => ({
  type: RECEIVE_ERROR,
  response
});
