import axios from 'axios';

export const fetchAllVideos = (request) => {
  return axios({
    method: 'get',
    url: '/api/category',
    params: request
  });
};


export const fetchVideoById = (id) => {
  return axios({
    method: 'get',
    url: `/api/video/${id}`,
  });
};
