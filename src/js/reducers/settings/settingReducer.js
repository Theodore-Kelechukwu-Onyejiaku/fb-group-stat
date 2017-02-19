import types from '../../actions/actionTypes';
import * as storeHelpers from './storeHelpers';
import initialState from '../initialState';

export default function settingReducer(state = initialState.settings, action) {
  switch (action.type) {
    case types.LOAD_SETTINGS_SUCCESS:
      return storeHelpers.loadSettings(state, action.settings);

    case types.LOAD_SETTING_SUCCESS:
      return storeHelpers.updateSetting(state, action.setting);

    case types.UPDATE_SETTING_SUCCESS:
      return storeHelpers.updateSetting(state, action.setting);

    default:
      return state;
  }
}
