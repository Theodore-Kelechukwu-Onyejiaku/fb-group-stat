import React, { PropTypes, Component } from 'react';
import Proverbs from '../statistics/list/Index';

class HomePage extends Component {
  render() {
    return (
      <div className="home">
        <Statistics />
      </div>
    );
  }
}

export default HomePage;
