import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import isEmpty from '../../utils/isEmpty';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/loginActions';
import CurrentUser from '../../auth/currentUser';


export class Header extends React.Component {
  render() {
    const { currentUser } = this.props;
    return (
      <nav className="navbar navbar-default navbar-fixed-top top-header">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">FB Group Stats</Link>
          <ul className="nav navbar-nav pull-xs-right right-nav">
            {!isEmpty(currentUser) && <li className="nav-item" key={3}>
              <Link className="nav-link" to="/proverbs/new">
                <i className="fa fa-file-o" aria-hidden="true" />
                Add
              </Link>
            </li>}
            {!isEmpty(currentUser) && <li className="nav-item" key={4}>
              <Link className="nav-link" to="/logout">
                <i className="fa fa-file-o" aria-hidden="true" />
                Logout
              </Link>
            </li>}
            {isEmpty(currentUser) && <li className="nav-item" key={5}>
              <Link className="nav-link" to="/login">
                <i className="fa fa-file-o" aria-hidden="true" />
                Login
              </Link>
            </li>}
          </ul>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  currentUser: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
  return {
    currentUser: CurrentUser.get()
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
