import axios from 'axios';

export const fetchAllVideos = (request) => {

  return axios({
    method: 'get',
    url: '/api/vidoes',
  });
};
