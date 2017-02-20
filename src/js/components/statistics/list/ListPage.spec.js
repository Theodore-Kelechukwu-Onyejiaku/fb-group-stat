import expect from 'expect';
import React from 'react'; // eslint-disable-line no-unused-vars
import {mount, shallow} from 'enzyme'; // eslint-disable-line no-unused-vars
import ListPage from './ListPage';

/**
* @return {Func} A shallow dom for tests
*/
function setup(status) {
  let props = {
    stats: {
      1: { id: 1 },
      2: { id: 2 }
    }
  };
  return shallow(<ListPage {...props} />);
}

describe('<ListPage />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  })

  it('renders the IndexPage component', () => {
    expect(wrapper.find('div.stats-index').length).toEqual(1);
    expect(wrapper.find('StatCards').length).toEqual(1);
  });
});
