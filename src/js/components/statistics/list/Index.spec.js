import expect from 'expect';
import React from 'react'; // eslint-disable-line no-unused-vars
import { mount, shallow } from 'enzyme'; // eslint-disable-line no-unused-vars
import { Stats } from './Index';

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
  return shallow(<Stats {...props} />);
}

describe('<Stats />', () => {
  it('renders a list of stats', () => {
    const wrapper = setup();

    // assertions
    expect(wrapper.find('ListPage').length).toEqual(1);
  });
});
