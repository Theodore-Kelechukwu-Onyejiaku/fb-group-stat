import * as statActions from '../actions/statActions.js';
import * as settingsActions from '../actions/settingActions';
import fBLoginHandler from '../lib/facebook/fb_login_handler';
import toastr from 'toastr';

async function loadData(store) {
  await store.dispatch(settingsActions.loadSettings());
  store.dispatch(statActions.loadStats())
    .catch(err => 'An error occured. Are you sure your token hasn\'t expired?)
}

function appInit (store) {
  // (new fBLoginHandler(store)).loadInitScript();
  loadData(store)
}

export default appInit;
