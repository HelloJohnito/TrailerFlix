import * as APIUtil from '../utils/videoAPI';

export const RECEIVE_ALL_VIDEOS = 'RECEIVE_ALL_VIDEOS';
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';

export const fetchAllVideos = request => dispatch => (
  APIUtil.fetchAllVideos(request).then( response => dispatch(receiveAllVideos(response.data.results)))
);

export const fetchVideoById = request => dispatch => (
  APIUtil.fetchVideoById(request).then( response => dispatch(receiveVideo(response.data.result)))
);

//response.data

export const receiveAllVideos = response => ({
  type: RECEIVE_ALL_VIDEOS,
  response
});

export const receiveVideo = response => ({
  type: RECEIVE_VIDEO,
  response
});
