import delay from './delay';
import {settings} from './data/settings';

/* eslint-disable camelcase */

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

// This would be performed on the server in a real app. Just stubbing in.
const generateId = (setting) => {
  return replaceAll(setting.setting_no.toLowerCase(), ' ', '-');
};

class SettingApi {
  static getAllSettings() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign({}, settings));
      }, delay);
    });
  }

  static saveSetting(setting) {
    setting = Object.assign({}, setting); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minSettingTitleLength = 3;
        if (setting.title.length < minSettingTitleLength) {
          reject(`Title must be at least ${minSettingTitleLength} characters.`);
        }

        if (setting.id) {
          const existingSettingIndex = settings.findIndex(a => a.id === setting.id);
          settings.splice(existingSettingIndex, 1, setting);
        } else {
          // Just simulating creation here.
          // The server would generate ids and watchHref's for new settings in a real app.
          // Cloning so copy returned is passed by value rather than by reference.
          // setting.id = generateId(setting);
          settings.push(setting);
        }

        resolve(setting);
      }, delay);
    });
  }

  static deleteSetting(settingId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfSettingToDelete = settings.findIndex(setting => {
          return setting.settingId === settingId;
        });
        settings.splice(indexOfSettingToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default SettingApi;
