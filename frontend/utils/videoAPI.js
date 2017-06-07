import axios from 'axios';

export const fetchAllVideos = (request) => {
  // return axios({
  //   method: 'get',
  //   url: '/api/video',
  //   params: request
  // });
  return axios({
    method: 'get',
    url: '/api/category',
    params: request
  });
};
