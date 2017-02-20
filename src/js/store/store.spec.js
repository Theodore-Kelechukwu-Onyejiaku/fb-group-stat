import expect from 'expect';
import {createStore} from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as statActions from '../actions/statActions';

describe('Store', () => {
  it('should load in an array of stats', () => {
    // arrange
    const store = createStore(rootReducer, initialState);
    const stats = [
      {id: "A1023"},
      {id: "A1024"}
    ];

    // act
    const action = statActions.loadStatsSuccess(stats);
    store.dispatch(action);

    // assert
    const statsInStore = store.getState().stats;
    expect(Object.keys(statsInStore).length).toEqual(2);
    expect(statsInStore[stats[0].id]).toEqual(stats[0]);
  });

  it('should handle creating stats', () => {
    // arrange
    const store = createStore(rootReducer, initialState);
    const stat = {id: "A1023"};

    // act
    const action = statActions.updateStatSuccess(stat);
    store.dispatch(action);

    // assert
    const newState = store.getState().stats;
    expect(newState[stat.id].id).toEqual(stat.id);
  });
});
