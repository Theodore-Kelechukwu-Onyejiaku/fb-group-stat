import * as enums from '../../utils/enumsHelpers.js';
import assign from 'object-assign';
import Auth from '../../auth/index';

/* eslint-disable camelcase */

/**
* @param {Object} state: current application settinge. Most likely empty though
* @param {Object} settings object of settings (unserialized)
* @return {object} new serialized setting object
*/
export function loadSettings(state, settings) {
  Auth.setUserAccessToken(settings.access_token);
  Auth.setGroupId(settings.group_id);
  return assign({}, state, settings)
}

/**
* @param {Object} settings object of settings currently in settinge
* @param {Object} key of setting to edit
* @return {object} settings settinge with the specific setting set to editing
*/
export function edit(settings, key) {
  return update(settings, settings[key], true);
}

/**
* @param {Object} settings object of settings currently in settinge
* @param {Object} updates of setting to edit
* @param {Object} editing: Boolean to show if edit settingus is to be set to editing
* @return {object} new serialized setting object
*/
function update(settings, updates, editing) {
  return Object.assign(settings, updates, {editing})
}

/**
* @param {Object} settings object of settings currently in settinge
* @param {Object} setting object with most recent updates
* @return {object} settinge with updates having any editing settingus removed
*/
export function updateSetting(settings, setting) {

  return update(settings, assign({}, setting, {editing: null}));
}
