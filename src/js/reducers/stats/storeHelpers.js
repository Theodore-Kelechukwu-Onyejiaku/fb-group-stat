import * as enums from '../../utils/enumsHelpers.js';
import assign from 'object-assign';

/* eslint-disable camelcase */

/**
* @param {Object} state: current application state. Most likely empty though
* @param {Object} stats object of stats (unserialized)
* @return {object} new serialized stat object
*/
export function loadStats(state, stats) {
  return assign({}, state, enums.serializeByKey(stats));
}

/**
* @param {Object} stats object of stats currently in state
* @param {Object} id of stat to edit
* @return {object} stats state with the specific stat set to editing
*/
export function edit(stats, id) {
  return update(stats, stats[id], true);
}

/**
* @param {Object} stats object of stats currently in state
* @param {Object} updatedStat of stat to edit
* @param {Object} editing: Boolean to show if edit status is to be set to editing
* @return {object} new serialized stat object
*/
function update(stats, updatedStat, editing) {
  return enums.update(stats, updatedStat.id, updatedStat, editing);
}

/**
* @param {Object} stats object of stats currently in state
* @param {Object} stat object with most recent updates
* @return {object} state with updates having any editing status removed
*/
export function updateStat(stats, stat) {
  return update(stats, assign({}, stat, {editing: null}));
}
