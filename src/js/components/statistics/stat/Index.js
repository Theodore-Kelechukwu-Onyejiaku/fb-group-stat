import React, { PropTypes, Component } from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import { saveStat, loadStats } from '../../../actions/statActions';
import { isEmpty } from 'underscore';
import StatForm from './statForm';
import toastr from 'toastr';

class Stat extends Component {
  constructor(props, context) {
    super(props);

    const { stat } = this.props;
    this.state = {
      stat,
      loading   : false 
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.stat.id !== nextProps.stat.id) {
      this.setState({ stat: Object.assign({}, nextProps.stat) });
    }
  } 

  redirect() {
    this.setState({ loading: true });
    toastr.success('Stat Saved');
    this.context.router.push('/stats');
  } 

  handleSubmit(stat) {
    this.setState({ loading: true });
    this.props.saveStat(stat)
    .then(() => this.redirect())
    .catch(err => {
      toastr.error(err);
    });
  }

  render() {
    const { stat, loading } = this.state;
    return (
      <div className="panel-container about-page">
        <h3>{`${this.props.params.statId ? "Edit" : "Create"} A Stat`}</h3>
        <StatForm
          stat={stat}
          loading={loading}
          handleSubmit={this.handleSubmit} 
        />
      </div>
    )
  }
}

Stat.contextTypes = {
  router: PropTypes.object
};

Stat.propTypes = {
  stat     : PropTypes.object,
  loadStats: PropTypes.func,
  saveStat : PropTypes.func,
  params      : PropTypes.object
};

const getStatValues = (statId, stats) => {
  const stat = Object.values(stats)
  .filter(
    stat => stat.id.toString() === statId
  );

  return !isEmpty(stat) ? stat[0] : null;
}

const mapStateToProps = (state, ownProps) => {
  let stat = { body: "", language: "en", translations: [] , tags: [], author: "" };
  const { stats } = state;
  const { statId } = ownProps.params;
  
  if (statId && Object.values(stats).length > 0) {
    stat = getStatValues(statId, stats);
  }

  return { stat };
};

const mapDispatchToProps = {
  loadStats,
  saveStat
};

export default connect(mapStateToProps, mapDispatchToProps)(Stat);
