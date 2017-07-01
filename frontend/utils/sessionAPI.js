import axios from 'axios';

export const signup = (user) => {
  return axios({
    method: 'POST',
    url: '/api/user',
    params: user
  });
};
