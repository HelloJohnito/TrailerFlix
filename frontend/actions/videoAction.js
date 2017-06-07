import * as APIUtil from '../utils/videoAPI';

export const RECEIVE_ALL_VIDEOS = 'RECEIVE_ALL_VIDEOS';

export const fetchAllVideos = request => dispatch => (
  APIUtil.fetchAllVideos(request).then( response => dispatch(receiveAllVideos(response)))
);


export const receiveAllVideos = response => ({
  type: RECEIVE_ALL_VIDEOS,
  response
});
