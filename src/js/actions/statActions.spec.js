import expect from 'expect';
import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import { omit } from 'underscore';
import Config from '../config/environment';
import * as statActions from './statActions';
import * as types from './actionTypes';

const stat = { id: 'A1023', body: 'Testing stat' };
const stats = [ stat ];

describe('Stat actions', () => {

  it('should create a LOAD_STATS_SUCCESS action', () => {

    const expectedAction = {
      type: types.default.LOAD_STATS_SUCCESS,
      stats
    };

    // actions
    const action = statActions.loadStatsSuccess(stats);

    // assertions
    expect(action).toEqual(expectedAction);
  }); 

  it('should create a UPDATE_STAT_SUCCESS action', () => {
    // setup
    const expectedUpdateAction = {
      type: types.default.UPDATE_STAT_SUCCESS,
      stat
    };

    // actions
    const action = statActions.updateStatSuccess(stat);

    // assertions
    expect(action).toEqual(expectedUpdateAction);
  });

  describe('Stat action thunks', function() {

    const middleware = [thunk];
    const mockStore = configureMockStore(middleware);
    const initialAppState = { stats: [], stat: {} };

    afterEach(() => {
      nock.cleanAll();
    });

    // this.timeout(15000);
    describe('loadStats', () => {
      it('should dispatch a success action on successful API response', done => {

        nock(Config.host)
        .get('/stats')
        .reply(200, stats);

        const expectedActions = [
          {type: types.default.LOAD_STATS_SUCCESS, stats}
        ];

        // action
        const store = mockStore(initialAppState, expectedActions);
        store.dispatch(statActions.loadStats())
          .then(() => {
            const [actions] = store.getActions();
            expect(actions.type).toEqual(types.default.LOAD_STATS_SUCCESS);
          });

          done();
      }); 
    })

    describe('saveStats', () => {
      it('should dispatch a success action on successful API response', done => {

        const expectedActions = [
          {type: types.default.UPDATE_STAT_SUCCESS, stat}
        ];
        
        // action
        const store = mockStore(initialAppState, expectedActions);
        const [actions] = store.getActions();
        store.dispatch(statActions.saveStat(stat))
          .then(() => {
            expect(actions.type).toEqual(types.default.UPDATE_STAT_SUCCESS);
          });
          
          done();
      }); 
    })    
  });  

});
