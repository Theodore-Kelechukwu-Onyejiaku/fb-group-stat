import expect from 'expect';
import settingReducer from './settingReducer';
import * as actions from '../../actions/settingActions';

describe('Setting Reducer Test', () => {
  it('should load stats when passed LOAD_SETTINGS_SUCCESS', () => {
    const initialState = {};
    const settings = {
      access_token: '123',
      group_id: '456'
    }

    const action = actions.loadSettingsSuccess(settings);

    // action
    const newState = settingReducer(initialState, action);

    // assertion
    expect(newState).toEqual(settings);
  });

  it('should add a new setting when passed UPDATE_SETTING_SUCCESS' +
    ' if setting doesn\'t already exist in store', () => {
    const initialState = {
      access_token: '123',
      group_id: '456'
    }
    const newSetting = {id: 'C'};

    const action = actions.updateSettingSuccess(newSetting);

    // action
    const newState = settingReducer(initialState, action);

    expect(Object.keys(newState).length).toEqual(4);
    expect(newState.id).toEqual('C');
  });

  it('should update setting when passed UPDATE_SETTING_SUCCESS', () => {
    const initialState = {
      access_token: "1234"
    };
    const setting = {group_id: 34};
    const action = actions.updateSettingSuccess(setting);

    // action
    const updatedState = settingReducer(initialState, action);
    console.log(updatedState)

    // assertions
    expect(Object.keys(updatedState).length).toEqual(3);
    expect(updatedState.group_id).toEqual(34);
  });

});
