import {combineReducers} from 'redux';
import stats from './stats/statReducer';
import settings from './settings/settingReducer';
import auth from './auth'
import ajaxCallsInProgress from './ajaxStatusReducer';


const rootReducer = combineReducers({
  stats,
  settings,
  auth,
  ajaxCallsInProgress
});

export default rootReducer;
