import types from './actionTypes';
import webAPI from '../utils/webAPI';
import mockSettingApi from '../api/mockSettingsApi';

/**
* @param settings object of access_control and/or group_id
* @return {Object} containing the action type and data
*/
export function loadSettingsSuccess(settings) {
  return { type: types.LOAD_SETTINGS_SUCCESS, settings };
}

/**
* @param {Object} setting
* @return {Object} containing the action type and setting
*/
export function updateSettingSuccess(setting) {
  return { type: types.UPDATE_SETTING_SUCCESS, setting };
}

export function loadSettings(locale) {
  return dispatch => {
    // return webAPI(`${'/' + defaultLocale + '/settings'}`, 'GET', '')
    return mockSettingApi.getAllSettings()
      .then(res => {
        dispatch(loadSettingsSuccess(res));
      });
  };
}

export function saveSetting(setting) {
  const type = setting.id ? 'PUT' : 'POST';
  const rootUrl = `/settings`;
  const url = setting.id ? `${rootUrl + '/' + setting.id}` : rootUrl;

  return (dispatch) => {
    return webAPI(url, type, setting)
      .then(res => {
        dispatch(updateSettingSuccess(res))
      })
  };
}
