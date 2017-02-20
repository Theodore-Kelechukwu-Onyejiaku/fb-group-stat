import types from '../../actions/actionTypes';
import * as storeHelpers from './storeHelpers';
import initialState from '../initialState';

export default function statReducer(state = initialState.stats, action) {
  switch (action.type) {
    case types.LOAD_STATS_SUCCESS:
      return storeHelpers.loadStats(state, action.stats);

    case types.LOAD_STAT_SUCCESS:
      return storeHelpers.updateStat(state, action.stat);

    case types.UPDATE_STAT_SUCCESS:
      return storeHelpers.updateStat(state, action.stat);

    default:
      return state;
  }
}
