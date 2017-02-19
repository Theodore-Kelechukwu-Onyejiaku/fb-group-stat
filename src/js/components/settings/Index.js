import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';

import * as actions from '../../actions/settingActions';
import TextInput from "../common/textinput/Index";

export class Settings extends Component {
  constructor() {
    super();
    this.state = {group_id: '', access_token: ''}
  }

  componentWillMount() {
    const {access_token, group_id} = this.props.settings;
    this.setState({access_token, group_id})
  }

  componentWillReceiveProps(nextProps) {
    const {access_token, group_id} = nextProps.settings;
    this.setState({access_token, group_id})
  }

  handleChange = (key, value) => {
   this.setState({[key]: value})
  }

  submitSettings = () => {
    this.props.actions.loadSettingsSuccess(this.state);
    toastr.success('New settings saved successfully.');
  }

  render() {
    const {access_token, group_id} = this.state;
    return (
      <div className="settings">
        <div className="access">
          <TextInput
            name="access_token"
            value={access_token}
            onChange={this.handleChange}
            label="Access Token"/>

          <TextInput
            name="group_id"
            value={group_id}
            onChange={this.handleChange}
            label="Group ID"/>

          <div className="cta">
            <button
              className="btn btn-default"
              onClick={this.submitSettings}>
              Save
            </button>
          </div>

        </div>

      </div>
    )
  }
}


Settings.propTypes = {
  settings: PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
  const { settings } = state;
  return { settings };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
