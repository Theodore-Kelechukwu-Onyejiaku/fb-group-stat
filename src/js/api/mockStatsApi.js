import delay from './delay';
import { stats } from './data/stats';

/* eslint-disable camelcase */

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

// This would be performed on the server in a real app. Just stubbing in.
export const generateId = (stat) => {
  return replaceAll(stat.body.toLowerCase(), ' ', '-');
};

class StatApi {
  static getAllStats() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign({}, stats));
      }, delay);
    });
  }

  static getStat(statId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const stat = stats.filter(p => p.id.toString() === statId)
        resolve(Object.assign({}, stat));
      }, delay);
    });
  }

  static saveStat(stat) {
    stat = Object.assign({}, stat); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minStatQuoteLength = 3;
        if (stat.body.length < minStatQuoteLength) {
          reject(`Quote must be at least ${minStatQuoteLength} characters.`);
        }

        if (stat.id) {
          const existingStatIndex = stats.findIndex(a => a.id === stat.id);
          stats.splice(existingStatIndex, 1, stat);
        } else {
          stat.id = generateId(stat);
          stats.push(stat);
        }

        resolve(stat);
      }, delay);
    });
  }

  static deleteStat(statId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfStatToDelete = stats.findIndex(stat => {
          return stat.id === statId;
        });
        stats.splice(indexOfStatToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default StatApi;
