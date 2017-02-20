import types from './actionTypes';
import webAPI from '../utils/webAPI';
import mockStatApi from '../api/mockStatsApi';
import Auth from '../auth/index';

/**
* @param stats : array of stats
* @return {Object} containing the action type and data
*/
export function loadStatsSuccess(stats) {
  return { type: types.LOAD_STATS_SUCCESS, stats };
}

/**
* @param {Object} stat
* @return {Object} containing the action type and stat
*/
export function updateStatSuccess(stat) {
  return { type: types.UPDATE_STAT_SUCCESS, stat };
}

export function loadStats() {
  return dispatch => {
    // return mockStatApi.getAllStats()
    return webAPI(`/${Auth.getGroupId()}/feed?fields=name%2Cid%2Cmessage%2Ccomments.limit(0).summary(true)%2Clikes.limit(0).summary(true)&since=2017&access_token=${Auth.getUserToken()}`, 'GET', '')
      .then(res => {
        dispatch(loadStatsSuccess(res.data));
      });
  };
}

export function saveStat(stat) {
  const type = stat.id ? 'PUT' : 'POST';
  const rootUrl = `/stats`;
  const url = stat.id ? `${rootUrl + '/' + stat.id}` : rootUrl;

  return (dispatch) => {
    return webAPI(url, type, stat)
      .then(res => {
        dispatch(updateStatSuccess(res))
      })
  };
}
