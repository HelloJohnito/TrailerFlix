import axios from 'axios';

export const signup = (user) => {
  return axios({
    method: 'POST',
    url: '/api/user',
    params: user
  });
};

export const login = (user) => {
  return axios({
    method: 'POST',
    url: '/api/session',
    params: user
  });
};

export const logout = (user) => {
  return axios({
    method: 'DELETE',
    url: '/api/logout',
  });
};

export const verify = (user) => {
  return axios({
    method: 'GET',
    url: '/api/verify',
  });
};

export const addFavorite = (request) => {
  return axios({
    method: 'PATCH',
    url: '/api/addFavorite',
    params: request
  });
};
