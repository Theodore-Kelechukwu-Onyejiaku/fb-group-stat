import expect from 'expect';
import React from 'react'; // eslint-disable-line no-unused-vars
import { mount, shallow } from 'enzyme'; // eslint-disable-line no-unused-vars
import StatCard from './StatCard';

const stat = {
  id: 1,
  message: "What is this? A post?",
  summary: {
    total_count: 1
  }
}

/**
* @return {Func} A shallow dom for tests
*/
function setup(status) {
  let props = {
    stat
  };
  return mount(<StatCard {...props} />);
}

describe('<StatCard />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  })

  it('renders the StatCard component', () => {
    expect(wrapper.find('.stat-card').length).toEqual(1);
  });

});
