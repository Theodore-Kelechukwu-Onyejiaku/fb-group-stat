import expect from 'expect';
import React from 'react'; // eslint-disable-line no-unused-vars
import { mount, shallow } from 'enzyme'; // eslint-disable-line no-unused-vars
import StatCards from './StatCards';

/**
* @return {Func} A shallow dom for tests
*/
function setup(status) {
  let props = {
    stats: [
      { id: 1 },
      { id: 2 }
    ]
  };
  return shallow(<StatCards {...props} />);
}

describe('<StatCards />', () => {
  it('renders the StatCards component', () => {
    const wrapper = setup();

    // assertions
    expect(wrapper.find('StatCard').length).toEqual(2);
  });
});
