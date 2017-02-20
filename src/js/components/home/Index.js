import React, { PropTypes, Component } from 'react';
import Statistics from '../statistics/list/Index';
import Settings from '../settings/Index';

class HomePage extends Component {
  render() {
    return (
      <div className="home">
        <Settings />
        <Statistics />
      </div>
    );
  }
}

export default HomePage;
