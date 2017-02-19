import expect from 'expect';
import statReducer from './statReducer';
import * as actions from '../../actions/statActions';

describe('Stat Reducer Test', () => {
  it('should load stats when passed LOAD_STATS_SUCCESS', () => {
    const initialState = {};
    const stats = [
      {id: 1},
      {id: 2}
    ];
    const expectedState = {
      1: {id: 1},
      2: {id: 2}
    };
    const action = actions.loadStatsSuccess(stats);

    // action
    const newState = statReducer(initialState, action);

    // assertion
    expect(newState).toEqual(expectedState);
  });

  it('should add a new stat when passed UPDATE_STAT_SUCCESS' +
    ' if stat doesn\'t already exist in store', () => {
    const initialState = {
      1: {id: 1},
      2: {id: 2}
    };
    const newStat = {id: 'C'};

    const action = actions.updateStatSuccess(newStat);

    // action
    const newState = statReducer(initialState, action);

    expect(Object.keys(newState).length).toEqual(3);
    expect(newState[1].id).toEqual(1);
    expect(newState[2].id).toEqual(2);
  });

  it('should update stat when passed UPDATE_STAT_SUCCESS', () => {
    const initialState = {
      1: {id: 1},
      2: {id: 2}
    };
    const stat = {id: 2, labor_cost: 34};
    const action = actions.updateStatSuccess(stat);

    // action
    const updatedState = statReducer(initialState, action);

    // assertions
    expect(Object.keys(updatedState).length).toEqual(2);
    expect(updatedState[stat.id].labor_cost).toEqual(34);
  });

});
