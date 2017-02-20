import React from 'react'; // eslint-disable-line no-unused-vars
import { stats } from '../../../api/data/stats';
import expect, { createSpy, spyOn } from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme'; // eslint-disable-line no-unused-vars
import Stat from './Index';
import StatForm from './statForm';

/**
* @return {Func} A shallow dom for tests
*/

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const initialState = { stats: [] };
const store = mockStore(initialState);

const actions = {
  loadStats : () => {},
  saveStat  : () => {}
};
//
// const setUp = () => {
//   const [stat] = stats;
//   const props = {
//     stat,
//     params       : { statId: "1" },
//     loadStats : spyOn(actions, 'loadStats'),
//     saveStat  : spyOn(actions, 'saveStat')
//   };
//
//   return mount(
//     <Provider store={store}>
//       <Stat {...props} />
//     </Provider>
//   );
// }

