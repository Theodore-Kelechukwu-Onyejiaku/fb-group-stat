import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';

import * as actions from '../../../actions/statActions';
import ListPage from './ListPage';

export class Stats extends Component {
  constructor(props) {
    super(props);
  }

  refreshPage = () => {
    this.props.actions.loadStats()
      .then(msg => toastr.success('Feed stat loaded successfully'))
      .catch(e => toastr.error('Error while loading stats'))
  }

  render() {
    return (
      <ListPage
        {...this.props}
        refreshPage={this.refreshPage} />
    );
  }
}

Stats.propTypes = {
  stats: PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
  const { stats } = state;
  return { stats };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Stats);
