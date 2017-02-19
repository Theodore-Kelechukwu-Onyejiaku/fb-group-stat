import * as statActions from '../actions/statActions.js';
import * as settingsActions from '../actions/settingActions';
import fBLoginHandler from '../lib/facebook/fb_login_handler';

async function loadData(store) {
  await store.dispatch(settingsActions.loadSettings());
  store.dispatch(statActions.loadStats());
}

function appInit (store) {
  // (new fBLoginHandler(store)).loadInitScript();
  loadData(store)
}

export default appInit;
